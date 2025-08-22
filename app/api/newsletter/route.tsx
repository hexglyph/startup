import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    console.log("Newsletter subscription:", { email })

    // In production, you'd send an email to hex@hexglyph.com
    /*
    await sendEmail({
      to: 'hex@hexglyph.com',
      subject: 'Nova inscrição na newsletter',
      html: `
        <h2>Nova inscrição na newsletter</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
      `
    })
    */

    return NextResponse.json({ success: true, message: "Inscrição realizada com sucesso!" })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao processar inscrição. Tente novamente." },
      { status: 500 },
    )
  }
}
