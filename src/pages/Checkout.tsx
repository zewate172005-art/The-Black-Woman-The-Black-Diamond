import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Loader2, AlertCircle, Smartphone, Copy, Check } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import Navbar from '../components/Navbar';
import { createOrder, getNextOrderNumber } from '../lib/supabase';

type Step = 'info' | 'payment' | 'processing';

interface CustomerInfo {
  full_name: string;
  email: string;
  phone: string;
  address: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('info');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const [info, setInfo] = useState<CustomerInfo>({
    full_name: '', email: '', phone: '', address: '',
  });
  const [txRef, setTxRef] = useState('');

  const infoValid = info.full_name && info.email && info.phone && info.address &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email);

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!infoValid) return;
    setError('');
    setStep('payment');
  };

  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!txRef.trim()) return;
    setError('');
    setStep('processing');

    await new Promise(res => setTimeout(res, 1800));

    const orderNumber = await getNextOrderNumber();
    const order = await createOrder({
      order_number: orderNumber,
      full_name: info.full_name,
      email: info.email,
      phone: info.phone,
      address: info.address,
      book_title: 'The Black Woman, The Black Diamond Philosophy',
      payment_method: 'mpesa',
      payment_status: 'success',
      amount: 5.50,
      mpesa_number: info.phone,
    });

    if (!order) {
      setError('Something went wrong. Please try again.');
      setStep('payment');
      return;
    }

    navigate(`/order-success/${orderNumber}`, { state: { order } });
  };

  const copyNumber = () => {
    navigator.clipboard.writeText('844511285');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-onyx-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-20 lg:pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          <div className={`flex items-center gap-2 text-sm ${step === 'info' ? 'text-gold-400' : 'text-gold-600'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${step === 'info' ? 'border-gold-400 bg-gold-400/10' : 'border-gold-600 bg-gold-600/10'}`}>1</span>
            Your Details
          </div>
          <div className="h-px flex-1 bg-onyx-700" />
          <div className={`flex items-center gap-2 text-sm ${step === 'payment' || step === 'processing' ? 'text-gold-400' : 'text-gray-600'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${step === 'payment' || step === 'processing' ? 'border-gold-400 bg-gold-400/10' : 'border-onyx-600 bg-onyx-800'}`}>2</span>
            Payment
          </div>
          <div className="h-px flex-1 bg-onyx-700" />
          <div className={`flex items-center gap-2 text-sm ${step === 'processing' ? 'text-gold-400' : 'text-gray-600'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${step === 'processing' ? 'border-gold-400 bg-gold-400/10' : 'border-onyx-600 bg-onyx-800'}`}>3</span>
            Confirm
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Customer Info */}
            {step === 'info' && (
              <form onSubmit={handleSubmitInfo} className="space-y-5">
                <h2 className="font-serif text-2xl font-bold mb-6">Delivery Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Full Name *</label>
                    <input
                      required
                      className="w-full bg-onyx-900 border border-onyx-600 focus:border-gold-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                      placeholder="Your full name"
                      value={info.full_name}
                      onChange={e => setInfo(p => ({ ...p, full_name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Email Address *</label>
                    <input
                      required type="email"
                      className="w-full bg-onyx-900 border border-onyx-600 focus:border-gold-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                      placeholder="your@email.com"
                      value={info.email}
                      onChange={e => setInfo(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Phone Number *</label>
                  <input
                    required
                    className="w-full bg-onyx-900 border border-onyx-600 focus:border-gold-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                    placeholder="+258 84 000 0000"
                    value={info.phone}
                    onChange={e => setInfo(p => ({ ...p, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Delivery Address *</label>
                  <textarea
                    required rows={3}
                    className="w-full bg-onyx-900 border border-onyx-600 focus:border-gold-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors resize-none"
                    placeholder="Street address, City, Country, Postal Code"
                    value={info.address}
                    onChange={e => setInfo(p => ({ ...p, address: e.target.value }))}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!infoValid}
                  className="w-full py-4 bg-gold-600 hover:bg-gold-500 disabled:bg-onyx-700 disabled:cursor-not-allowed text-onyx-900 disabled:text-gray-500 font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gold-600/30"
                >
                  Continue to Payment
                </button>
              </form>
            )}

            {/* Step 2: Payment */}
            {step === 'payment' && (
              <form onSubmit={handleConfirmPayment} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <button type="button" onClick={() => setStep('info')} className="text-gray-400 hover:text-gold-400 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="font-serif text-2xl font-bold">Payment via M-Pesa</h2>
                </div>

                {error && (
                  <div className="flex items-center gap-2 bg-red-900/20 border border-red-700/40 text-red-400 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                {/* Mpesa Instructions */}
                <div className="bg-onyx-900 border border-gold-700/30 rounded-2xl p-6 space-y-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Send M-Pesa Payment</p>
                      <p className="text-gray-500 text-xs">Amount: $5.50 (use equivalent local currency)</p>
                    </div>
                  </div>

                  <div className="bg-onyx-800/60 border border-onyx-700/40 rounded-xl p-5">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Send to this M-Pesa number</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gold-400 font-mono text-2xl font-bold tracking-widest">844511285</p>
                        <p className="text-gray-400 text-sm mt-1">Daina Mutindi</p>
                      </div>
                      <button
                        type="button"
                        onClick={copyNumber}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gold-700/20 border border-gold-700/40 hover:bg-gold-700/30 text-gold-400 text-xs font-medium transition-all duration-200"
                      >
                        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-onyx-700/40 pt-4 space-y-3">
                    <p className="text-white font-medium text-sm">After sending payment:</p>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center shrink-0 mt-0.5 text-gold-400 text-xs font-bold">1</span>
                      <p className="text-gray-400 text-sm">Send your payment confirmation to <span className="text-gold-400 font-semibold">878998955</span> or <span className="text-gold-400 font-semibold">theblackwomantheblackdiamond@gmail.com</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center shrink-0 mt-0.5 text-gold-400 text-xs font-bold">2</span>
                      <p className="text-gray-400 text-sm">You will receive your copy of the book once payment is confirmed.</p>
                    </div>
                  </div>
                </div>

                {/* Transaction Reference */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">M-Pesa Transaction Reference *</label>
                  <input
                    required
                    className="w-full bg-onyx-900 border border-onyx-600 focus:border-gold-600 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors uppercase tracking-widest"
                    placeholder="e.g. QJX1234AB"
                    value={txRef}
                    onChange={e => setTxRef(e.target.value.toUpperCase())}
                  />
                  <p className="text-gray-600 text-xs mt-1">Enter the transaction code from your M-Pesa confirmation SMS</p>
                </div>

                <button
                  type="submit"
                  disabled={!txRef.trim()}
                  className="w-full py-4 bg-gold-600 hover:bg-gold-500 disabled:bg-onyx-700 disabled:cursor-not-allowed text-onyx-900 disabled:text-gray-500 font-bold text-lg rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-gold-600/30 flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  Confirm Payment
                </button>
              </form>
            )}

            {/* Processing */}
            {step === 'processing' && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center">
                    <Loader2 className="w-10 h-10 text-gold-400 animate-spin" />
                  </div>
                  <div className="absolute inset-0 bg-gold-500/10 rounded-full animate-ping" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white mb-3">Confirming Your Order</h2>
                <p className="text-gray-400">Verifying your payment details...</p>
                <p className="text-gray-600 text-sm mt-2">Please do not close this window</p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-onyx-900 border border-onyx-700/50 rounded-2xl p-6 sticky top-28">
              <h3 className="font-serif font-bold text-lg mb-5 pb-4 border-b border-onyx-700/50">Order Summary</h3>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-12 h-12 bg-onyx-800 border border-gold-700/30 rounded-lg flex items-center justify-center shrink-0">
                  <BlackDiamond size={24} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium leading-tight">The Black Woman, The Black Diamond Philosophy</p>
                  <p className="text-gray-500 text-xs mt-1">By Daina Mutindi</p>
                </div>
              </div>
              <div className="space-y-2 text-sm border-t border-onyx-700/50 pt-4 mb-4">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>$5.50</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Delivery</span>
                  <span>Calculated at delivery</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-onyx-700/50 pt-4">
                <span>Total</span>
                <span className="text-gold-400">$5.50</span>
              </div>
              <div className="mt-5 pt-4 border-t border-onyx-700/50">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="w-3.5 h-3.5 text-green-500" />
                  Secure M-Pesa payment
                </div>
              </div>
              {info.full_name && (
                <div className="mt-4 pt-4 border-t border-onyx-700/50 text-xs text-gray-500 space-y-1">
                  <p className="text-gray-400 font-medium mb-2">Shipping to:</p>
                  <p>{info.full_name}</p>
                  <p>{info.email}</p>
                  <p className="text-gray-600">{info.address}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
