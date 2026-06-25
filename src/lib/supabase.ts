import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.error('Supabase environment variables not loaded. Check .env file exists with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  // Create a dummy client that won't crash but will return errors
  supabase = createClient('https://placeholder-placeholder.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder');
}

export { supabase };

export interface Order {
  id?: string;
  order_number: number;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  book_title: string;
  payment_method: 'card' | 'mpesa' | 'gift';
  payment_status: 'pending' | 'success' | 'failed';
  amount: number;
  gift_code?: string;
  card_last4?: string;
  mpesa_number?: string;
  created_at?: string;
}

export interface HeroQuote {
  id?: string;
  quote_text: string;
  attribution?: string;
  image_url?: string;
  active: boolean;
  sort_order: number;
  created_at?: string;
}

export async function getNextOrderNumber(): Promise<number> {
  const { data, error } = await supabase
    .from('orders')
    .select('order_number')
    .order('order_number', { ascending: false })
    .limit(1);
  if (error || !data || data.length === 0) return 1;
  return data[0].order_number + 1;
}

export async function createOrder(order: Omit<Order, 'id' | 'created_at'>): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .insert(order)
    .select()
    .single();
  if (error) { console.error(error); return null; }
  return data;
}

export async function getOrderByNumber(orderNumber: number): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('order_number', orderNumber)
    .single();
  if (error) return null;
  return data;
}

export async function getHeroQuotes(): Promise<HeroQuote[]> {
  const { data } = await supabase
    .from('hero_quotes')
    .select('*')
    .eq('active', true)
    .order('sort_order', { ascending: true });
  return data || [];
}

export async function getAllOrders(): Promise<Order[]> {
  const { data } = await supabase
    .from('orders')
    .select('*')
    .order('order_number', { ascending: true });
  return data || [];
}

export async function getAllQuotes(): Promise<HeroQuote[]> {
  const { data } = await supabase
    .from('hero_quotes')
    .select('*')
    .order('sort_order', { ascending: true });
  return data || [];
}

export async function upsertQuote(quote: Partial<HeroQuote>): Promise<HeroQuote | null> {
  const { data, error } = await supabase
    .from('hero_quotes')
    .upsert(quote)
    .select()
    .single();
  if (error) { console.error(error); return null; }
  return data;
}

export async function deleteQuote(id: string): Promise<boolean> {
  const { error } = await supabase.from('hero_quotes').delete().eq('id', id);
  return !error;
}
