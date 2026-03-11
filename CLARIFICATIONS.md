# CLARIFICATIONS

## 1. Matching Strategy Ambiguity

Quote from brief:

"Payments need to be properly matched against the bank records"

### Ambiguity

Matching criteria not defined.

Possible interpretations:

1. Amount only
2. Amount + currency
3. Transaction reference
4. Amount + date tolerance

### Assumption

Primary match:

externalRef === bankRecord.reference

Fallback match:

amount + currency

### Reason

Financial reconciliation systems prioritize **transaction references** over amount-only matching.

---

## 2. Duplicate Bank Records

Quote:

"Accept a batch of bank records"

Ambiguity:

Bank exports often contain duplicates.

### Assumption

Duplicate `transactionId` records may occur.

### Solution

Deduplicate records before reconciliation.

---

## 3. Currency Handling

Quote:

"We handle multiple currencies but for now focus on USD"

### Assumption

Reject non-USD records.

### Reason

Avoid mixing currencies in reconciliation.

---

## 4. Real-time Processing

Quote:

"The system should do reconciliation in real-time"

### Interpretation

Reconciliation should occur **synchronously within API request**.

Nightly batch jobs are not required.

---

## 5. Compliance Question

Question to client:

Should reconciliation runs be stored as **immutable audit records** for compliance (PCI DSS / SOC2)?

---

## 6. Question I Would NOT Ask

Should matching algorithm complexity be optimized?

Reason:

This is purely an **engineering decision**, not a product decision.