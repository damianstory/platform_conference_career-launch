-- Update Block Distribution
-- Move 2 sessions to Block 4 to create the following distribution:
-- Block 1: 5 sessions, Block 2: 5 sessions, Block 3: 7 sessions, Block 4: 8 sessions

-- Move Environmental Scientist from Block 1 to Block 4 (position 7)
UPDATE sessions 
SET block_number = 4, display_order = 7
WHERE id = '770e8400-e29b-41d4-a716-446655440006';

-- Move Forensic Scientist from Block 2 to Block 4 (position 8)
UPDATE sessions 
SET block_number = 4, display_order = 8
WHERE id = '770e8400-e29b-41d4-a716-446655440012';
