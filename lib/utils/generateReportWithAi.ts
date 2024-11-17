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
  
  Considerando essas despesas e serviços, sugira maneiras de reduzir custos, otimizando o uso de recursos e aumentando a lucratividade, de maneira personalizada com a relidade do salão. Se necessário,
  utilize referências reais das despesas e serviços do salão.
  `
    const systemMessage = `
  Você é um assistente financeiro especializado em fornecer relatórios estruturados. Ao gerar a resposta, organize a saída de acordo com as seguintes diretrizes:
  
  - Use **títulos** com Markdown para organizar as seções, como por exemplo:
      - ## Estratégia para Redução de Custos
      - ## Sugestões de Otimização
      - ## Aumento da Lucratividade
  
  - Liste pontos importantes em listas ordenadas ou não ordenadas, com a indentação correta.
  
  - Certifique-se de que a resposta seja legível e fácil de seguir, utilizando espaços e quebras de linha apropriadas.

  A resposta deve ser formatada de forma estruturada e clara, usando Markdown.
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
