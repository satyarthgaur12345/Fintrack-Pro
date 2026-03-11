# AI Usage Journal

## Tools Used

ChatGPT

---

## Interaction Log

| # | Prompt | Quality | Accepted | Reason |
|---|-------|--------|---------|------|
|1|Identify reconciliation bugs|5|Yes|Detected SQL injection and float arithmetic bug|
|2|Suggest secure API implementation|4|Partial|Authentication logic modified|
|3|Reconciliation matching strategy|4|Partial|Adjusted logic to use references|

---

## Reflection

### Bugs AI Found

- Floating-point currency bug
- SQL injection vulnerability
- Missing authentication

### Bugs AI Missed

- Dashboard polling memory leak
- API response mismatch

### AI Code Rejected

Amount-only matching algorithm.

Reason: Unsafe for financial systems.

### Verification Approach

All AI suggestions were manually reviewed and validated against financial reconciliation best practices.

### Domain Insight

Financial reconciliation must prioritize **transaction reference IDs** before amount matching because multiple payments can share identical values.