import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Here you would integrate with your email service
    // For now, we'll just log and return success
    console.log("Contact form submission:", { name, email, phone, message })

    // In production, you'd send an email to hex@hexglyph.com
    // Example with nodemailer or your preferred email service:
    /*
    await sendEmail({
      to: 'hex@hexglyph.com',
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    })
    */

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
  }
}
