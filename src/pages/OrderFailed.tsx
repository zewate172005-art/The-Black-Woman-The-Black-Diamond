import { useLocation, Link } from 'react-router-dom';
import { XCircle, RefreshCcw, ArrowLeft, Shield, Phone, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';

const REASONS: Record<string, string> = {
  'Payment declined by issuer': 'Your card was declined by the issuing bank. Please check your card details or try a different payment method.',
  'Invalid gift code': 'The gift code you entered is not valid or has already been used. Please check the code and try again.',
  'default': 'Your payment could not be processed at this time. Please try again or use a different payment method.',
};

export default function OrderFailed() {
  const location = useLocation();
  const { order, reason } = location.state || {};

  const reasonText = reason ? (REASONS[reason] || REASONS.default) : REASONS.default;

  return (
    <div className="bg-onyx-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-20 max-w-xl mx-auto px-4 sm:px-6 py-16">
        {/* Failed Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-red-900/20 border border-red-700/30 flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-400" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Payment Failed
          </h1>
          <p className="text-gray-400 text-base">
            {order?.full_name ? `Sorry, ${order.full_name.split(' ')[0]}.` : 'Sorry,'} We were unable to process your payment.
          </p>
        </div>

        {/* Reason Box */}
        <div className="bg-red-900/10 border border-red-700/30 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-red-900/30 border border-red-700/40 flex items-center justify-center shrink-0">
              <XCircle className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <p className="text-red-400 font-semibold text-sm mb-2">
                {reason || 'Payment Unsuccessful'}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{reasonText}</p>
            </div>
          </div>
        </div>

        {/* Order Reference if available */}
        {order?.order_number && (
          <div className="bg-onyx-900 border border-onyx-700/50 rounded-xl p-5 mb-8 text-sm">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Reference</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Order Ref</span>
                <span className="text-gray-300 font-mono">#{String(order.order_number).padStart(4, '0')}</span>
              </div>
              {order.email && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Email</span>
                  <span className="text-gray-300">{order.email}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="text-red-400 font-semibold">Failed</span>
              </div>
            </div>
          </div>
        )}

        {/* What to do */}
        <div className="bg-onyx-900/60 border border-onyx-700/40 rounded-xl p-5 mb-8">
          <h3 className="text-white font-semibold text-sm mb-4">What can you do?</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">•</span>
              <span>Check your card details and ensure you have sufficient funds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">•</span>
              <span>Try a different payment method (Card, Mpesa, or Gift Code)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">•</span>
              <span>For gift codes, verify the code is typed correctly — they are case-insensitive</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">•</span>
              <span>Contact your bank if using a card that keeps declining</span>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-onyx-900/60 border border-onyx-700/40 rounded-xl p-4 flex items-center gap-2">
            <Mail className="w-4 h-4 text-gold-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="text-xs text-gray-300">info@blackdiamondbooks.com</p>
            </div>
          </div>
          <div className="bg-onyx-900/60 border border-onyx-700/40 rounded-xl p-4 flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold-600 shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Call Us</p>
              <p className="text-xs text-gray-300">+258 84 000 0000</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/checkout"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold rounded-xl transition-all duration-200 group"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </Link>
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-onyx-800 hover:bg-onyx-700 border border-onyx-600 text-white font-semibold rounded-xl transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mt-6 flex items-center justify-center gap-2 text-xs text-gray-600">
          <Shield className="w-3.5 h-3.5 text-green-600" />
          Your payment details are never stored on our servers
        </div>
      </div>
    </div>
  );
}
