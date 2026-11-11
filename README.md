# Cheerful Takeaways

Online ordering and kitchen operations platform for Cheerful Takeaways, Moonlight Building, Gweru, Zimbabwe.

**Brand:** Tradition served with a smile.

## Product scope
- Customer storefront for traditional meals, cart, checkout and order tracking.
- Pickup and delivery fulfilment.
- Cash and electronic payment recording, with electronic payment verification.
- Kitchen order board and management dashboard.
- Sales, payment and operational reporting.

## Architecture
- Frontend: React + Vite + TypeScript
- Backend: FastAPI + SQLAlchemy
- Database: PostgreSQL
- Realtime: WebSockets
- Deployment: isolated Docker Compose services on Oracle Cloud

## Development status
Project initialized. Implementation will proceed in milestones: catalogue, ordering, kitchen workflow, payments, reporting, then production hardening. No production payment credentials or customer data belong in this repository.

## Business rules
- Store address: Moonlight Building, Gweru, Zimbabwe.
- Fulfilment supports pickup and delivery.
- Payments support cash and electronic methods.
- An electronic payment reference or uploaded proof is not considered paid until verified.
- Currency is configurable; the app must not assume a single currency.
- The server is authoritative for prices and order totals.
