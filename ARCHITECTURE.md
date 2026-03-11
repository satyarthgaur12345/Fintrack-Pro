# System Architecture

The reconciliation system is designed with clear separation of concerns.

Layers:

API Layer
Handles authentication, request validation, and HTTP responses.

Service Layer
Implements reconciliation workflow and matching logic.

Data Layer
Uses Drizzle ORM for safe database access.

Frontend Layer
Dashboard built with React components to visualize reconciliation runs.

The system prioritizes:

- deterministic financial matching
- secure API design
- auditability
- extensibility

                ┌─────────────────────────┐
                │      Client Apps        │
                │ Dashboard / Finance UI  │
                └─────────────┬───────────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │    API Gateway      │
                   │ Auth + Rate Limit   │
                   └─────────┬───────────┘
                             │
            ┌────────────────┼─────────────────┐
            ▼                ▼                 ▼
  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
  │ Reconciliation  │ │ Payment Service │ │ Import Service  │
  │ Service         │ │ (Ledger source) │ │ Bank File Upload│
  └───────┬─────────┘ └────────┬────────┘ └────────┬────────┘
          │                     │                   │
          ▼                     ▼                   ▼
  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
  │ Matching Engine │  │ Transaction DB  │  │ Object Storage  │
  │ Reconciliation  │  │ (Postgres)      │  │ Bank CSV/JSON   │
  └────────┬────────┘  └─────────────────┘  └─────────────────┘
           │
           ▼
   ┌───────────────────────┐
   │ Event Bus (Kafka/SQS) │
   └─────────┬─────────────┘
             ▼
   ┌────────────────────────┐
   │ Audit + Compliance Log │
   │ Immutable Ledger       │
   └─────────┬──────────────┘
             ▼
   ┌────────────────────────┐
   │ Observability Stack    │
   │ Metrics + Alerts       │
   └────────────────────────┘