# FinTrack Pro — Senior Engineer Technical Assessment

## Overview

This repository contains my submission for the **FinTrack Pro reconciliation system assessment**.

The goal of this exercise was to:

- Audit a partially implemented reconciliation system
- Identify bugs across security, logic, performance, API design, and compliance
- Fix critical issues
- Implement a reliable reconciliation workflow
- Document AI usage during development

---

## Tech Stack

- TypeScript
- Next.js (App Router)
- Drizzle ORM
- Tailwind CSS
- Zod

---

## Key Improvements Implemented

### Security

- Removed SQL injection vulnerabilities
- Added authentication check using `getSession()`
- Implemented strict input validation using Zod
- Prevented internal error stack leakage

### Financial Logic

- Replaced floating-point arithmetic with **integer cents** to avoid rounding errors
- Implemented deterministic matching strategy:
  - Primary: `externalRef === bank.reference`
  - Fallback: amount + currency
- Added discrepancy detection

### Performance

- Fixed dashboard polling memory leak
- Reduced polling frequency
- Improved reconciliation matching structure

### API Improvements

- Correct HTTP semantics
- Parameterized database queries
- Consistent response structure

### Dashboard

Added summary card displaying:

- Total reconciliation runs
- Total discrepancy amount
- Trigger reconciliation button placeholder

---

## Repository Structure
fintrack-assessment-satyarthgaur
│
├── README.md
├── CLARIFICATIONS.md
├── AUDIT.md
├── AI_JOURNAL.md
│
├── lib/services/reconciliation/reconciler.ts
├── app/api/v1/reconcile/route.ts
└── components/reconciliation/ReconciliationDashboard.tsx


---

## Reconciliation Workflow

1. Finance team uploads bank transaction batch
2. API validates request
3. Matching engine compares bank records to internal payments
4. Matched, unmatched, and discrepancy records generated
5. Reconciliation run stored in database
6. Dashboard displays reconciliation history

---

## Security & Compliance Considerations

The solution considers:

- Secure API design
- Authentication
- Input validation
- Financial arithmetic safety
- Auditability

Additional enterprise improvements suggested:

- RBAC authorization
- Audit logging
- Idempotency keys
- Rate limiting
- Monitoring and observability

---

## AI Usage

AI tools were used for:

- identifying potential bugs
- exploring reconciliation strategies
- generating architecture ideas

All outputs were manually reviewed and verified.

See **AI_JOURNAL.md** for details.

---

## Author

Satyarth Gaur
