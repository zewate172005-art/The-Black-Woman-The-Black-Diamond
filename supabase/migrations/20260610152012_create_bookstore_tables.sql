
-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number integer NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  book_title text NOT NULL DEFAULT 'The Black Woman, The Black Diamond Philosophy',
  payment_method text NOT NULL CHECK (payment_method IN ('card', 'mpesa', 'gift')),
  payment_status text NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'success', 'failed')),
  amount decimal(10,2) NOT NULL DEFAULT 29.99,
  gift_code text,
  card_last4 text,
  mpesa_number text,
  created_at timestamptz DEFAULT now()
);

-- Sequence for order numbers
CREATE SEQUENCE IF NOT EXISTS order_number_seq START 1;

-- Function to get next order number
CREATE OR REPLACE FUNCTION get_next_order_number()
RETURNS integer AS $$
  SELECT COALESCE(MAX(order_number), 0) + 1 FROM orders;
$$ LANGUAGE SQL;

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_orders" ON orders FOR SELECT
  TO anon USING (true);

CREATE POLICY "insert_orders" ON orders FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "update_orders" ON orders FOR UPDATE
  TO anon USING (true) WITH CHECK (true);

CREATE POLICY "delete_orders" ON orders FOR DELETE
  TO anon USING (true);

-- Quotes/slides table for hero slider (admin managed)
CREATE TABLE IF NOT EXISTS hero_quotes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_text text NOT NULL,
  attribution text,
  image_url text,
  active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hero_quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_quotes" ON hero_quotes FOR SELECT
  TO anon USING (true);

CREATE POLICY "insert_quotes" ON hero_quotes FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "update_quotes" ON hero_quotes FOR UPDATE
  TO anon USING (true) WITH CHECK (true);

CREATE POLICY "delete_quotes" ON hero_quotes FOR DELETE
  TO anon USING (true);

-- Seed initial quotes from the book
INSERT INTO hero_quotes (quote_text, attribution, sort_order) VALUES
  ('She bears the weight of generations — unrewarded, unrecognized, yet unbreakable.', 'The Black Woman, The Black Diamond Philosophy', 1),
  ('When she rises, families, communities and nations rise.', 'Daina Mutindi', 2),
  ('Like a diamond buried deep underground, when unearthed and allowed to shine, she reveals rare brilliance.', 'The Black Woman, The Black Diamond Philosophy', 3),
  ('Self-love is the beginning of being.', 'The Black Diamond Philosophy', 4),
  ('Just because you are a girl, you are not vulnerable — you represent greatness.', 'Daina Mutindi', 5),
  ('Die Empty — share your story while you are still alive, to die liberated for life changing impact.', 'The Black Woman, The Black Diamond', 6),
  ('The victory of one woman inspires and brings victorious mindsets to thousands of other women and girls.', 'Daina Mutindi', 7),
  ('Black, beautiful, bold, radiant, rare, resilient, and real.', 'The Black Diamond Philosophy', 8)
ON CONFLICT DO NOTHING;
