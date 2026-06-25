import { useState, useEffect } from 'react';
import {
  Lock, BarChart3, Package, Quote, Plus, Trash2, Edit3,
  Check, X, Eye, EyeOff, TrendingUp, DollarSign, Users, AlertCircle,
  LogOut, Save, ArrowUp, ArrowDown,
} from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import {
  getAllOrders, getAllQuotes, upsertQuote, deleteQuote,
  Order, HeroQuote,
} from '../lib/supabase';

const ADMIN_PASSWORD = '#11332244*';

type Tab = 'overview' | 'orders' | 'quotes';

function StatCard({ icon: Icon, label, value, sub, color = 'text-gold-400' }: {
  icon: typeof BarChart3; label: string; value: string | number; sub?: string; color?: string;
}) {
  return (
    <div className="bg-onyx-900 border border-onyx-700/50 rounded-xl p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</p>
          <p className={`text-3xl font-bold font-serif ${color}`}>{value}</p>
          {sub && <p className="text-gray-600 text-xs mt-1">{sub}</p>}
        </div>
        <div className="w-10 h-10 rounded-xl bg-gold-700/15 border border-gold-700/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gold-500" />
        </div>
      </div>
    </div>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-onyx-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gold-700/15 border border-gold-700/30 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-gold-400" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-gray-500 text-sm">Black Diamond Books Control Panel</p>
        </div>

        <form onSubmit={handleLogin} className="bg-onyx-900 border border-onyx-700/50 rounded-2xl p-8 space-y-4">
          {error && (
            <div className="flex items-center gap-2 bg-red-900/20 border border-red-700/30 text-red-400 rounded-lg px-3 py-2 text-xs">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Admin Password</label>
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                className="w-full bg-onyx-800 border border-onyx-600 focus:border-gold-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors pr-12"
                placeholder="Enter admin password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                onClick={() => setShow(!show)}
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold rounded-xl transition-all duration-200"
          >
            Access Panel
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-6">
          <BlackDiamond size={16} />
          <p className="text-gray-700 text-xs">Black Diamond Books</p>
        </div>
      </div>
    </div>
  );
}

function OrdersTable({ orders }: { orders: Order[] }) {
  const [filter, setFilter] = useState<'all' | 'success' | 'failed'>('all');
  const filtered = filter === 'all' ? orders : orders.filter(o => o.payment_status === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="font-serif text-xl font-bold">Orders</h2>
        <div className="flex gap-2">
          {(['all', 'success', 'failed'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                filter === f ? 'bg-gold-600 text-onyx-900' : 'bg-onyx-800 text-gray-400 hover:bg-onyx-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-600">No orders found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-onyx-700/50">
                {['Order #', 'Customer', 'Email', 'Method', 'Status', 'Amount', 'Date'].map(h => (
                  <th key={h} className="text-left py-3 px-2 text-gray-500 text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-onyx-800/50">
              {filtered.map(order => (
                <tr key={order.id} className="hover:bg-onyx-900/40 transition-colors">
                  <td className="py-3 px-2">
                    <span className="text-gold-400 font-mono font-bold">#{String(order.order_number).padStart(4, '0')}</span>
                  </td>
                  <td className="py-3 px-2 text-white">{order.full_name}</td>
                  <td className="py-3 px-2 text-gray-400">{order.email}</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-0.5 bg-onyx-800 border border-onyx-600 rounded text-xs text-gray-300 uppercase">{order.payment_method}</span>
                  </td>
                  <td className="py-3 px-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      order.payment_status === 'success'
                        ? 'bg-green-900/30 border border-green-700/30 text-green-400'
                        : 'bg-red-900/20 border border-red-700/20 text-red-400'
                    }`}>
                      {order.payment_status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-gold-400 font-medium">${order.amount.toFixed(2)}</td>
                  <td className="py-3 px-2 text-gray-500 text-xs">
                    {new Date(order.created_at || '').toLocaleDateString('en-GB')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function QuoteManager({ quotes, onRefresh }: { quotes: HeroQuote[]; onRefresh: () => void }) {
  const [editing, setEditing] = useState<Partial<HeroQuote> | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!editing || !editing.quote_text?.trim()) return;
    setSaving(true);
    await upsertQuote({
      ...editing,
      active: editing.active ?? true,
      sort_order: editing.sort_order ?? quotes.length + 1,
    });
    setSaving(false);
    setEditing(null);
    onRefresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this quote?')) return;
    await deleteQuote(id);
    onRefresh();
  };

  const handleToggle = async (quote: HeroQuote) => {
    await upsertQuote({ ...quote, active: !quote.active });
    onRefresh();
  };

  const moveOrder = async (quote: HeroQuote, direction: 'up' | 'down') => {
    const idx = quotes.findIndex(q => q.id === quote.id);
    const swapWith = direction === 'up' ? quotes[idx - 1] : quotes[idx + 1];
    if (!swapWith) return;
    await Promise.all([
      upsertQuote({ ...quote, sort_order: swapWith.sort_order }),
      upsertQuote({ ...swapWith, sort_order: quote.sort_order }),
    ]);
    onRefresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl font-bold">Hero Quotes</h2>
        <button
          onClick={() => setEditing({ quote_text: '', attribution: '', active: true, sort_order: quotes.length + 1 })}
          className="flex items-center gap-2 px-4 py-2 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold text-sm rounded-xl transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Quote
        </button>
      </div>

      {/* Edit/Add Form */}
      {editing && (
        <div className="bg-onyx-900 border border-gold-700/30 rounded-xl p-5 mb-6 space-y-4">
          <h3 className="text-gold-400 font-semibold text-sm">{editing.id ? 'Edit Quote' : 'New Quote'}</h3>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Quote Text *</label>
            <textarea
              rows={3}
              className="w-full bg-onyx-800 border border-onyx-600 focus:border-gold-600 rounded-lg px-3 py-2 text-white text-sm outline-none transition-colors resize-none"
              value={editing.quote_text || ''}
              onChange={e => setEditing(p => ({ ...p!, quote_text: e.target.value }))}
              placeholder="Enter the inspirational quote..."
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Attribution</label>
              <input
                className="w-full bg-onyx-800 border border-onyx-600 focus:border-gold-600 rounded-lg px-3 py-2 text-white text-sm outline-none transition-colors"
                value={editing.attribution || ''}
                onChange={e => setEditing(p => ({ ...p!, attribution: e.target.value }))}
                placeholder="Daina Mutindi"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Image URL (optional)</label>
              <input
                className="w-full bg-onyx-800 border border-onyx-600 focus:border-gold-600 rounded-lg px-3 py-2 text-white text-sm outline-none transition-colors"
                value={editing.image_url || ''}
                onChange={e => setEditing(p => ({ ...p!, image_url: e.target.value }))}
                placeholder="https://..."
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={editing.active ?? true}
                onChange={e => setEditing(p => ({ ...p!, active: e.target.checked }))}
                className="accent-gold-500"
              />
              Active (visible in slider)
            </label>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={() => setEditing(null)} className="px-4 py-2 bg-onyx-700 hover:bg-onyx-600 text-gray-300 text-sm rounded-lg transition-colors flex items-center gap-1">
              <X className="w-4 h-4" /> Cancel
            </button>
            <button onClick={handleSave} disabled={saving || !editing.quote_text?.trim()} className="px-4 py-2 bg-gold-600 hover:bg-gold-500 disabled:bg-onyx-700 disabled:cursor-not-allowed text-onyx-900 disabled:text-gray-500 font-bold text-sm rounded-lg transition-colors flex items-center gap-1">
              <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {quotes.map((quote, idx) => (
          <div key={quote.id} className={`bg-onyx-900 border rounded-xl p-4 transition-all ${quote.active ? 'border-onyx-700/50' : 'border-onyx-800/30 opacity-50'}`}>
            <div className="flex items-start gap-3">
              <div className="flex flex-col gap-1 mt-0.5">
                <button onClick={() => moveOrder(quote, 'up')} disabled={idx === 0} className="text-gray-600 hover:text-gray-400 disabled:opacity-20 transition-colors">
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => moveOrder(quote, 'down')} disabled={idx === quotes.length - 1} className="text-gray-600 hover:text-gray-400 disabled:opacity-20 transition-colors">
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm leading-relaxed font-serif italic">"{quote.quote_text}"</p>
                {quote.attribution && <p className="text-gold-600 text-xs mt-1">— {quote.attribution}</p>}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => handleToggle(quote)} title={quote.active ? 'Deactivate' : 'Activate'}
                  className={`p-1.5 rounded-lg transition-colors ${quote.active ? 'text-green-400 hover:bg-green-900/20' : 'text-gray-600 hover:bg-onyx-700'}`}>
                  {quote.active ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </button>
                <button onClick={() => setEditing(quote)} className="p-1.5 rounded-lg text-gray-500 hover:text-gold-400 hover:bg-onyx-800 transition-colors">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button onClick={() => quote.id && handleDelete(quote.id)} className="p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-900/10 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {quotes.length === 0 && (
          <div className="text-center py-8 text-gray-600 text-sm">No quotes yet. Add your first quote!</div>
        )}
      </div>
    </div>
  );
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState<Tab>('overview');
  const [orders, setOrders] = useState<Order[]>([]);
  const [quotes, setQuotes] = useState<HeroQuote[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const [o, q] = await Promise.all([getAllOrders(), getAllQuotes()]);
    setOrders(o);
    setQuotes(q);
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) loadData();
  }, [authenticated]);

  if (!authenticated) return <LoginScreen onLogin={() => setAuthenticated(true)} />;

  const successOrders = orders.filter(o => o.payment_status === 'success');
  const totalRevenue = successOrders.reduce((sum, o) => sum + Number(o.amount), 0);
  const todayOrders = orders.filter(o => {
    const d = new Date(o.created_at || '');
    const today = new Date();
    return d.toDateString() === today.toDateString();
  });

  const TABS: { id: Tab; icon: typeof BarChart3; label: string }[] = [
    { id: 'overview', icon: BarChart3, label: 'Overview' },
    { id: 'orders', icon: Package, label: `Orders (${orders.length})` },
    { id: 'quotes', icon: Quote, label: `Quotes (${quotes.length})` },
  ];

  return (
    <div className="min-h-screen bg-onyx-950 text-white">
      {/* Admin Header */}
      <header className="bg-onyx-900/95 backdrop-blur-md border-b border-gold-700/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BlackDiamond size={20} />
            <span className="font-serif font-bold text-white">Admin Panel</span>
            <span className="text-gray-600 text-xs hidden sm:inline">Black Diamond Books</span>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="flex items-center gap-1.5 text-gray-500 hover:text-red-400 text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-onyx-800/50 pb-0">
          {TABS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
                tab === id
                  ? 'text-gold-400 border-gold-500'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full" />
          </div>
        ) : (
          <>
            {tab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard icon={Package} label="Total Orders" value={orders.length} sub="All time" />
                  <StatCard icon={TrendingUp} label="Successful" value={successOrders.length} sub={`${orders.length > 0 ? Math.round(successOrders.length / orders.length * 100) : 0}% success rate`} color="text-green-400" />
                  <StatCard icon={DollarSign} label="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} sub="From successful orders" />
                  <StatCard icon={Users} label="Today's Orders" value={todayOrders.length} sub={new Date().toLocaleDateString('en-GB')} />
                </div>

                {/* Payment Method breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(['card', 'mpesa', 'gift'] as const).map(method => {
                    const count = successOrders.filter(o => o.payment_method === method).length;
                    const pct = successOrders.length > 0 ? Math.round(count / successOrders.length * 100) : 0;
                    return (
                      <div key={method} className="bg-onyx-900 border border-onyx-700/50 rounded-xl p-5">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{method.toUpperCase()}</p>
                        <p className="text-2xl font-bold font-serif text-white">{count}</p>
                        <div className="mt-3 h-1.5 bg-onyx-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gold-600 rounded-full transition-all" style={{ width: `${pct}%` }} />
                        </div>
                        <p className="text-gray-600 text-xs mt-1">{pct}% of successful orders</p>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Orders */}
                <div>
                  <h3 className="font-serif text-lg font-bold mb-4">Recent Orders</h3>
                  <div className="space-y-2">
                    {orders.slice(-5).reverse().map(order => (
                      <div key={order.id} className="flex items-center gap-4 bg-onyx-900 border border-onyx-700/40 rounded-xl px-5 py-3">
                        <span className="text-gold-400 font-mono text-sm font-bold w-16">
                          #{String(order.order_number).padStart(4, '0')}
                        </span>
                        <span className="text-white text-sm flex-1 truncate">{order.full_name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${order.payment_status === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
                          {order.payment_status}
                        </span>
                        <span className="text-gold-400 text-sm font-semibold">${order.amount.toFixed(2)}</span>
                      </div>
                    ))}
                    {orders.length === 0 && <p className="text-gray-600 text-sm">No orders yet.</p>}
                  </div>
                </div>
              </div>
            )}

            {tab === 'orders' && <OrdersTable orders={orders} />}
            {tab === 'quotes' && <QuoteManager quotes={quotes} onRefresh={loadData} />}
          </>
        )}
      </div>
    </div>
  );
}
