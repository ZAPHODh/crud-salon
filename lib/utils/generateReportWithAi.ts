import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export const generateReportWithAI = async (salon: Salon) => {
    const expensesDescription = salon.expenses
        .map(
            (expense) => `${expense.name} (${expense.type}): $${expense.amount}`
        )
        .join('\n')

    const servicesDescription = salon.services
        .map(
            (service) =>
                `${service.name} - Custo: $${service.cost}, Comissão: ${service.commission}%`
        )
        .join('\n')

    const prompt = `
  Análise financeira para o salão ${salon.name}, de propriedade de ${salon.owner}.
  
  **Despesas:**
  ${expensesDescription}
  
  **Serviços:**
  ${servicesDescription}
  
  Considerando essas despesas e serviços, sugira maneiras de reduzir custos, otimizando o uso de recursos e aumentando a lucratividade.
  `
    const systemMessage = `
    Você é um assistente financeiro que fornece análises detalhadas para salões de beleza. Ao gerar relatórios, organize a resposta em tópicos com subtítulos claros, como:
    1. **Estratégia para Redução de Custos:**
    2. **Sugestões de Otimização:**
    3. **Aumento da Lucratividade:**
    
    Forneça sugestões práticas e baseadas em dados financeiros. As respostas devem ser claras, concisas e bem estruturadas. Evite informações vagas e apresente soluções diretas.
    `
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: systemMessage },
                { role: 'user', content: prompt },
            ],
        })

        return completion.choices[0].message.content
    } catch (error) {
        throw new Error(`Erro ao gerar relatório com IA: ${error}`)
    }
}
