export function toCents(amount: number): number {
  return Math.round(amount * 100)
}

export function findMatch(bankRecord: any, payments: any[]) {

  const refMatch = payments.find(
    p => p.externalRef === bankRecord.reference
  )

  if (refMatch) return refMatch

  return payments.find(
    p =>
      toCents(p.amount) === toCents(bankRecord.amount) &&
      p.currency === bankRecord.currency
  )
}