# Initial database model plan

- users(id, full_name, phone, email, password_hash, role, is_active, created_at)
- categories(id, name, slug, description, sort_order, is_active)
- menu_items(id, category_id, name, description, price_amount, currency, is_available, prep_time_minutes)
- menu_item_images(id, menu_item_id, storage_key, alt_text, sort_order)
- orders(id, order_number, customer_id, fulfilment_type, status, payment_status, currency, subtotal, delivery_fee, discount_total, grand_total, customer_name_snapshot, customer_phone_snapshot, notes, created_at)
- order_items(id, order_id, menu_item_id, name_snapshot, unit_price_snapshot, quantity, line_total)
- order_status_events(id, order_id, from_status, to_status, actor_id, reason, created_at)
- payments(id, order_id, method, amount, currency, status, provider_reference, proof_storage_key, verified_by, verified_at, created_at)
- delivery_addresses(id, customer_id, label, address_text, area, delivery_instructions)
- delivery_zones(id, name, fee_amount, currency, is_active)
- business_settings(id, key, value_json, updated_by, updated_at)
- promotions(id, code, discount_type, discount_value, starts_at, ends_at, is_active)
- audit_logs(id, actor_id, action, entity_type, entity_id, metadata_json, created_at)

Use UUID primary keys, UTC timestamps, decimal/numeric for money (never floating-point), indexes on order_number/status/created_at, and deliberate foreign-key deletion rules.
