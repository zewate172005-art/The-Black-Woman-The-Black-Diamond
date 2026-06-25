import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CheckCircle, Download, Mail, Package, ArrowRight } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import { getOrderByNumber, Order } from '../lib/supabase';
import Navbar from '../components/Navbar';

function generatePDF(order: Order) {
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Order Confirmation #${order.order_number}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Georgia, serif; background: #0a0a0a; color: #fff; padding: 40px; }
        .container { max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #D4AF37; border-radius: 12px; padding: 48px; }
        .header { text-align: center; margin-bottom: 32px; border-bottom: 1px solid #333; padding-bottom: 32px; }
        .diamond { font-size: 48px; margin-bottom: 12px; }
        h1 { color: #D4AF37; font-size: 24px; margin-bottom: 8px; }
        .subtitle { color: #888; font-size: 14px; }
        .order-number { text-align: center; margin: 24px 0; padding: 20px; background: #1a1a1a; border-radius: 8px; border: 1px solid #D4AF37; }
        .order-number .label { color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; }
        .order-number .value { color: #D4AF37; font-size: 48px; font-weight: bold; }
        .section { margin: 24px 0; }
        .section h3 { color: #D4AF37; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #1a1a1a; }
        .row .label { color: #888; font-size: 14px; }
        .row .value { color: #fff; font-size: 14px; font-weight: bold; }
        .total { padding: 16px 0; border-top: 2px solid #D4AF37; margin-top: 8px; }
        .total .label { color: #fff; font-weight: bold; }
        .total .value { color: #D4AF37; font-size: 20px; font-weight: bold; }
        .footer { text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #333; color: #555; font-size: 12px; }
        .success-badge { display: inline-block; background: #052e16; color: #22c55e; border: 1px solid #16a34a; padding: 6px 16px; border-radius: 20px; font-size: 12px; margin-bottom: 16px; }
        .book-item { display: flex; align-items: center; gap: 12px; padding: 16px; background: #1a1a1a; border-radius: 8px; margin: 12px 0; }
        .book-icon { font-size: 32px; }
        .book-info h4 { color: #D4AF37; font-size: 15px; }
        .book-info p { color: #888; font-size: 12px; margin-top: 2px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="diamond">◆</div>
          <h1>Black Diamond Books</h1>
          <p class="subtitle">Order Confirmation Receipt</p>
          <div class="success-badge">✓ Payment Successful</div>
        </div>

        <div class="order-number">
          <div class="label">Your Order Number</div>
          <div class="value">#${String(order.order_number).padStart(4, '0')}</div>
        </div>

        <div class="book-item">
          <div class="book-icon">◆</div>
          <div class="book-info">
            <h4>${order.book_title}</h4>
            <p>By Daina Mutindi — Philosophy</p>
          </div>
        </div>

        <div class="section">
          <h3>Customer Details</h3>
          <div class="row"><span class="label">Full Name</span><span class="value">${order.full_name}</span></div>
          <div class="row"><span class="label">Email</span><span class="value">${order.email}</span></div>
          <div class="row"><span class="label">Phone</span><span class="value">${order.phone}</span></div>
          <div class="row"><span class="label">Delivery Address</span><span class="value">${order.address}</span></div>
        </div>

        <div class="section">
          <h3>Payment Details</h3>
          <div class="row"><span class="label">Payment Method</span><span class="value">${order.payment_method.toUpperCase()}</span></div>
          <div class="row"><span class="label">Status</span><span class="value" style="color: #22c55e;">SUCCESSFUL</span></div>
          <div class="row"><span class="label">Date</span><span class="value">${new Date(order.created_at || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
          ${order.card_last4 ? `<div class="row"><span class="label">Card</span><span class="value">**** **** **** ${order.card_last4}</span></div>` : ''}
          <div class="row total"><span class="label">Total Paid</span><span class="value">$${order.amount.toFixed(2)}</span></div>
        </div>

        <div class="footer">
          <p>Thank you for your order! You will receive a confirmation email shortly.</p>
          <p style="margin-top: 8px;">Questions? Contact us at theblackwomantheblackdiamond@gmail.com</p>
          <p style="margin-top: 16px; color: #333;">"When she rises, families, communities and nations rise." — Daina Mutindi</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([printContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `BlackDiamond-Order-${String(order.order_number).padStart(4, '0')}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function OrderSuccess() {
  const { orderNumber } = useParams<{ orderNumber: string }>();
  const location = useLocation();
  const [order, setOrder] = useState<Order | null>(location.state?.order || null);

  useEffect(() => {
    if (!order && orderNumber) {
      getOrderByNumber(Number(orderNumber)).then(setOrder);
    }
  }, [orderNumber, order]);

  if (!order) {
    return (
      <div className="bg-onyx-950 min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="bg-onyx-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-20 max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {/* Success Header */}
        <div className="text-center mb-10">
          <div className="relative inline-flex mb-6">
            <div className="w-20 h-20 rounded-full bg-green-900/30 border border-green-700/40 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
              <BlackDiamond size={12} />
            </div>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Payment Successful!
          </h1>
          <p className="text-gray-400 text-lg">Thank you for your order, {order.full_name.split(' ')[0]}!</p>
          <p className="text-gray-500 text-sm mt-2">A confirmation email has been sent to {order.email}</p>
        </div>

        {/* Order Number Highlight */}
        <div className="bg-gradient-to-r from-onyx-900 via-onyx-800 to-onyx-900 border border-gold-500/30 rounded-2xl p-8 text-center mb-6 animate-pulse-gold">
          <p className="text-gold-500 text-xs uppercase tracking-widest mb-3 font-medium">Your Order Number</p>
          <p className="font-serif text-6xl font-bold text-gold-400">
            #{String(order.order_number).padStart(4, '0')}
          </p>
          <p className="text-gray-500 text-xs mt-3">Keep this number for tracking your order</p>
        </div>

        {/* Order Details */}
        <div className="bg-onyx-900 border border-onyx-700/50 rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-gold-400 text-sm uppercase tracking-wider mb-5 pb-3 border-b border-onyx-700/50">
            Order Details
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 pb-3 border-b border-onyx-800">
              <BlackDiamond size={16} className="mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">{order.book_title}</p>
                <p className="text-gray-500">By Daina Mutindi</p>
              </div>
              <span className="ml-auto text-gold-400 font-bold">${order.amount.toFixed(2)}</span>
            </div>
            {[
              { label: 'Payment Method', value: order.payment_method.toUpperCase() },
              { label: 'Status', value: 'PAID', color: 'text-green-400' },
              { label: 'Delivery to', value: order.address },
              { label: 'Contact', value: order.email },
            ].map(({ label, value, color }) => (
              <div key={label} className="flex justify-between py-1">
                <span className="text-gray-500">{label}</span>
                <span className={`${color || 'text-gray-300'} font-medium text-right max-w-xs`}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What's next */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-onyx-900/60 border border-onyx-700/40 rounded-xl p-4 flex items-start gap-3">
            <Mail className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-white text-sm font-medium">Confirmation Email</p>
              <p className="text-gray-500 text-xs mt-1">Check your inbox at {order.email} for your order confirmation.</p>
            </div>
          </div>
          <div className="bg-onyx-900/60 border border-onyx-700/40 rounded-xl p-4 flex items-start gap-3">
            <Package className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-white text-sm font-medium">Delivery Info</p>
              <p className="text-gray-500 text-xs mt-1">Your book will be delivered within 7–14 business days.</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => generatePDF(order)}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-onyx-800 hover:bg-onyx-700 border border-onyx-600 hover:border-gold-700/50 text-white font-semibold rounded-xl transition-all duration-200"
          >
            <Download className="w-4 h-4 text-gold-500" />
            Download Receipt
          </button>
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold rounded-xl transition-all duration-200 group"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6 italic font-serif">
          "When she rises, families, communities and nations rise." — Daina Mutindi
        </p>
      </div>
    </div>
  );
}
