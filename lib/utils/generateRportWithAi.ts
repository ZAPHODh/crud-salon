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

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        })

        return completion.choices[0].message.content
    } catch (error) {
        throw new Error(`Erro ao gerar relatório com IA: ${error}`)
    }
}
