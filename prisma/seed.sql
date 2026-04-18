-- 1. Insert Products
INSERT INTO "Product" (id, sku, name, description)
VALUES
('p1-uuid-001', 'PCBA-TX-100', 'Main Controller Board', 'High-speed processing unit for industrial sensors'),
('p2-uuid-002', 'HSG-ALU-05', 'Aluminum Enclosure', 'Anodized heat-dissipating housing');

-- 2. Insert Users
INSERT INTO "User" (id, username, name, role, "createdAt")
VALUES
('u1-uuid-101', 'admin_sarah', 'Sarah Connor', 'ADMIN', NOW()),
('u2-uuid-102', 'op_john', 'John Doe', 'OPERATOR', NOW());

-- 3. Insert Work Orders
-- Order 1: Assigned to John, already in progress
INSERT INTO "WorkOrder" (id, "workOrderNumber", quantity, status, "productId", "userId", "createdAt", "updatedAt")
VALUES
('wo1-uuid-201', 'WO-2026-001', 500, 'IN_PROGRESS', 'p1-uuid-001', 'u2-uuid-102', NOW(), NOW());

-- Order 2: Unassigned and planned
INSERT INTO "WorkOrder" (id, "workOrderNumber", quantity, status, "productId", "userId", "createdAt", "updatedAt")
VALUES
('wo2-uuid-202', 'WO-2026-002', 1200, 'PLANNED', 'p2-uuid-002', NULL, NOW(), NOW());
