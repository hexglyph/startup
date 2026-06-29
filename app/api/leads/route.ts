import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { leadFormSchema } from "@/lib/lead-form"

export const runtime = "nodejs"

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export async function POST(request: Request) {
  const payload = await request.json()
  const parsed = leadFormSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead payload." }, { status: 400 })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT ?? "587")
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const leadToEmail = process.env.LEADS_TO_EMAIL ?? "hex@hexglyph.com"
  const leadFromEmail = process.env.LEADS_FROM_EMAIL ?? smtpUser

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !leadFromEmail) {
    return NextResponse.json(
      { error: "Lead email delivery is not configured." },
      { status: 500 }
    )
  }

  const values = parsed.data
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const subject = `[Hexglyph] New lead from ${values.company}`
  const lines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company}`,
    `Website: ${values.website || "-"}`,
    `Budget: ${values.budget}`,
    `Service: ${values.service || "-"}`,
    `Source: ${values.source || "-"}`,
    "",
    "Problem",
    values.problem,
    "",
    "Attribution",
    `Landing page: ${values.landingPage || "-"}`,
    `Referrer: ${values.referrer || "-"}`,
    `utm_source: ${values.utmSource || "-"}`,
    `utm_medium: ${values.utmMedium || "-"}`,
    `utm_campaign: ${values.utmCampaign || "-"}`,
    `utm_term: ${values.utmTerm || "-"}`,
    `utm_content: ${values.utmContent || "-"}`,
    `gclid: ${values.gclid || "-"}`,
    `gbraid: ${values.gbraid || "-"}`,
    `wbraid: ${values.wbraid || "-"}`,
  ]

  const htmlRows = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company],
    ["Website", values.website || "-"],
    ["Budget", values.budget],
    ["Service", values.service || "-"],
    ["Source", values.source || "-"],
    ["Landing page", values.landingPage || "-"],
    ["Referrer", values.referrer || "-"],
    ["utm_source", values.utmSource || "-"],
    ["utm_medium", values.utmMedium || "-"],
    ["utm_campaign", values.utmCampaign || "-"],
    ["utm_term", values.utmTerm || "-"],
    ["utm_content", values.utmContent || "-"],
    ["gclid", values.gclid || "-"],
    ["gbraid", values.gbraid || "-"],
    ["wbraid", values.wbraid || "-"],
  ]

  await transporter.sendMail({
    to: leadToEmail,
    from: leadFromEmail,
    replyTo: values.email,
    subject,
    text: lines.join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827;">
        <h1 style="font-size: 20px;">New Hexglyph lead</h1>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tbody>
            ${htmlRows
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: 700; width: 180px;">${escapeHtml(label)}</td>
                    <td style="border: 1px solid #e5e7eb; padding: 10px;">${escapeHtml(value)}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
        <h2 style="font-size: 16px; margin-top: 24px;">Problem</h2>
        <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(values.problem)}</p>
      </div>
    `,
  })

  return NextResponse.json({ ok: true })
}
