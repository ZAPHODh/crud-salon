export const generateLiquidValue = (
    fees: number,
    amount: number,
    comission: number
) => {
    const comissionAmount = (amount * (comission - 100)) / 100
    const feesAmount = (amount * fees) / 100

    return comissionAmount - feesAmount
}
