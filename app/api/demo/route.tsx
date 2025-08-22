import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json()

    console.log("Demo scheduling request:", { name, email, phone, company, message })

    // In production, you'd send an email to hex@hexglyph.com
    /*
    await sendEmail({
      to: 'hex@hexglyph.com',
      subject: `Solicitação de demonstração - ${name}`,
      html: `
        <h2>Nova solicitação de demonstração</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message || 'Nenhuma mensagem adicional'}</p>
        <p><strong>Data da solicitação:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      `
    })
    */

    return NextResponse.json({ success: true, message: "Solicitação de demonstração enviada com sucesso!" })
  } catch (error) {
    console.error("Error processing demo request:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao enviar solicitação. Tente novamente." },
      { status: 500 },
    )
  }
}
