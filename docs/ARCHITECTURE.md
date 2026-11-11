# Cheerful Takeaways — Architecture

## Business context
- Business: Cheerful Takeaways
- Location: Moonlight Building, Gweru, Zimbabwe
- Brand line: Tradition served with a smile
- Menu focus: Traditional meals
- Fulfilment: collection and delivery
- Payments: cash and electronic

## Logical services
1. React storefront: catalogue, cart, checkout, order lookup.
2. FastAPI backend: catalogue, pricing, order lifecycle, authentication, payment records.
3. PostgreSQL: durable business records.
4. Realtime channel: kitchen order updates and customer status changes.
5. Object storage: menu images and payment evidence.
6. Nginx/TLS: public ingress; API remains on a loopback-bound host port.

## Important invariants
- Server calculates all prices and totals; never trust browser totals.
- Menu availability is checked again when an order is submitted.
- Orders have immutable item/price snapshots.
- Payment status is distinct from order status.
- Electronic payment evidence is not equivalent to verified payment.
- Kitchen staff cannot change financial configuration unless authorised.
- Important status and payment changes are audited.

## Initial order states
pending_confirmation -> accepted -> preparing -> ready -> completed
Alternative terminal states: rejected, cancelled.
Payment states: unpaid, awaiting_verification, paid, failed, refunded.

## Deployment boundary
Use dedicated containers, volumes, network, database and reverse-proxy site configuration. Do not modify unrelated services or global server configuration without a reviewed change plan.
