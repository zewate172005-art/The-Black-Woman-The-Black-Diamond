import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import BlackDiamond from './BlackDiamond';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const BOT_RESPONSES: Record<string, string> = {
  default: "Thank you for reaching out! I'm here to help with anything about The Black Woman, The Black Diamond Philosophy — the book, the author, training, payment, delivery, or the BWBD mission. What would you like to know?",

  price: "The Black Woman, The Black Diamond Philosophy book is priced at $5.50. Payment is made via M-Pesa to 844511285 (Daina Mutindi). After paying, send your confirmation to 878998955 or theblackwomantheblackdiamond@gmail.com to receive your copy.",

  buy: "To purchase the book: visit the Book page and click 'Buy Now'. Fill in your delivery details, then send $5.50 via M-Pesa to 844511285 (Daina Mutindi). After payment, send your M-Pesa confirmation to 878998955 or theblackwomantheblackdiamond@gmail.com and you will receive your copy.",

  payment: "Payment is via M-Pesa only. Send $5.50 to M-Pesa number 844511285 — Daina Mutindi. Once paid, forward your M-Pesa confirmation SMS to 878998955 or theblackwomantheblackdiamond@gmail.com and your copy will be sent to you.",

  mpesa: "Send your payment to M-Pesa number 844511285 (Daina Mutindi). After completing the payment, send your confirmation to 878998955 or email theblackwomantheblackdiamond@gmail.com. You will then receive your copy of the book.",

  delivery: "We deliver worldwide. Delivery times vary by location — typically 7–14 business days internationally. After you send your M-Pesa confirmation to 878998955 or theblackwomantheblackdiamond@gmail.com, the team will arrange your copy.",

  author: "The book was written by Daina Mutindi — a seasoned woman leader and advocate based in Maputo, Mozambique. She is passionate about education, gender equality, inclusion, and social justice. She was the first among eighteen siblings from a polygamous family to complete high school and graduate from university. Her lived experience is the foundation of the BWBD Philosophy.",

  philosophy: "The Black Woman, The Black Diamond (BWBD) Philosophy is an Afrocentric philosophy that inspires African girls to rise from invisibility — like the black diamond. Both the black woman and the black diamond go through difficult journeys to achieve success. The philosophy is built on the Ten Selves: Self-Love, Self-Value, Self-Aspiration, Self-Fulfilment, Self-Belief, Self-Power, Self-Victory, Self-Reliance, Self-Enlightenment, and Self-Determination.",

  tenselves: "The Ten Selves are the core of the BWBD framework: (1) Self-Love — embrace your identity with pride; (2) Self-Value — recognize your inherent worth; (3) Self-Aspiration — dream boldly; (4) Self-Fulfilment — find wholeness through purpose; (5) Self-Belief — trust yourself; (6) Self-Power — discover inner strength; (7) Self-Victory — build a winning mindset; (8) Self-Reliance — achieve financial and emotional independence; (9) Self-Enlightenment — turn despair into hope; (10) Self-Determination — lead your life with focus and courage.",

  diamond: "The Black Diamond analogy is central to the BWBD Philosophy. Like a diamond formed under extreme pressure underground — both the black woman and the black diamond are all-black, go through a difficult journey, and are long ignored. When unearthed and given opportunity, the black diamond reveals rare brilliance — just like the black woman. She is black, beautiful, bold, rare, radiant, and real.",

  training: "BWBD trains and builds the capacity of inspirational leaders, mentors, and educators who transform the lives of girls and young people. Those trained include: Women Leaders, Mentors, Educators and Teachers, Government/International and local NGOs/Structures (including community groups), Girls and Boys, and Community Leaders. Visit the Training page for more information — a full programme is coming soon.",

  pillars: "The Black Woman and Black Diamond are remarkable women who rose and succeeded from invisibility through courage, determination, and enlightenment. Their real-life stories of triumph inspire girls to believe in their Diamond dreams. Stories of great The Black Woman and Black Diamond Pillars are coming soon — visit the Pillars page on the website.",

  contact: "You can reach the BWBD team by phone at 841201146 or by email at theblackwomantheblackdiamond@gmail.com. For order confirmations after M-Pesa payment, send to 878998955 or theblackwomantheblackdiamond@gmail.com. We are based in Maputo, Mozambique.",

  order: "After making payment via M-Pesa (to 844511285 — Daina Mutindi), send your M-Pesa confirmation to 878998955 or theblackwomantheblackdiamond@gmail.com. The team will then send you your copy of the book. You will also receive an order reference number.",

  refund: "For any concerns about your order, please contact us at theblackwomantheblackdiamond@gmail.com or call 841201146 within 7 days of purchase.",

  girls: "BWBD is built for African girls living in difficult circumstances. Its message: do not give up on your Diamond dream. Girls are our future — they are a powerhouse for building resilience, focusing on their own development, and tapping into existing support and opportunities.",

  dieempty: "'Die Empty' is a core BWBD principle. It means women should share their real-life stories while they are still alive — to die liberated for life-changing impact. The grave is too silent to tell the beautiful story of women who fought and succeeded.",

  book: "The book is called 'The Black Woman, The Black Diamond Philosophy' by Daina Mutindi. It is a 23-page Afrocentric philosophy that inspires African girls to succeed and never give up their Diamond dreams. It includes the Ten Selves framework and real-life stories of women who triumphed. Price: $5.50. Buy via the Book page.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('5.50')) return BOT_RESPONSES.price;
  if (lower.includes('mpesa') || lower.includes('m-pesa') || lower.includes('mobile money') || lower.includes('844511285')) return BOT_RESPONSES.mpesa;
  if (lower.includes('buy') || lower.includes('purchase') || lower.includes('get') && lower.includes('book')) return BOT_RESPONSES.buy;
  if (lower.includes('pay')) return BOT_RESPONSES.payment;
  if (lower.includes('deliver') || lower.includes('shipping') || lower.includes('ship')) return BOT_RESPONSES.delivery;
  if (lower.includes('author') || lower.includes('daina') || lower.includes('who wrote') || lower.includes('mutindi')) return BOT_RESPONSES.author;
  if (lower.includes('ten selves') || lower.includes('self-love') || lower.includes('self love') || lower.includes('framework')) return BOT_RESPONSES.tenselves;
  if (lower.includes('diamond') && (lower.includes('analogy') || lower.includes('symbol') || lower.includes('mean') || lower.includes('parallel'))) return BOT_RESPONSES.diamond;
  if (lower.includes('philosophy') || lower.includes('about') || lower.includes('what is') || lower.includes('bwbd')) return BOT_RESPONSES.philosophy;
  if (lower.includes('train') || lower.includes('training') || lower.includes('capacity') || lower.includes('educator')) return BOT_RESPONSES.training;
  if (lower.includes('pillar')) return BOT_RESPONSES.pillars;
  if (lower.includes('order') || lower.includes('confirm') || lower.includes('receipt') || lower.includes('reference')) return BOT_RESPONSES.order;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) return BOT_RESPONSES.contact;
  if (lower.includes('refund') || lower.includes('return') || lower.includes('cancel')) return BOT_RESPONSES.refund;
  if (lower.includes('girl') || lower.includes('young') || lower.includes('future')) return BOT_RESPONSES.girls;
  if (lower.includes('die empty') || lower.includes('legacy') || lower.includes('story') || lower.includes('stories')) return BOT_RESPONSES.dieempty;
  if (lower.includes('book') || lower.includes('page') || lower.includes('read')) return BOT_RESPONSES.book;

  return BOT_RESPONSES.default;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hello! I'm your Black Diamond assistant. Ask me anything about the book, the BWBD Philosophy, payment, delivery, training, or the Pillars. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: getBotResponse(text) }]);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-80 sm:w-96 z-50 shadow-2xl rounded-2xl overflow-hidden border border-gold-700/30 animate-slide-up">
          <div className="bg-gradient-to-r from-onyx-900 to-onyx-800 px-4 py-3 flex items-center justify-between border-b border-gold-700/20">
            <div className="flex items-center gap-2">
              <BlackDiamond size={20} />
              <div>
                <p className="text-white font-semibold text-sm">Black Diamond Support</p>
                <p className="text-gold-500 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-onyx-950 h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gold-600 text-onyx-900 rounded-br-sm font-medium'
                    : 'bg-onyx-700 text-gray-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-onyx-700 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  {[0, 1, 2].map(i => (
                    <span key={i} className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="bg-onyx-900 border-t border-gold-700/20 p-3 flex gap-2">
            <input
              className="flex-1 bg-onyx-800 border border-onyx-600 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-600 transition-colors"
              placeholder="Ask something..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-gold-600 hover:bg-gold-500 text-onyx-900 p-2 rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 bg-gold-600 hover:bg-gold-500 text-onyx-900 rounded-full shadow-lg hover:shadow-gold-600/40 transition-all duration-200 flex items-center justify-center animate-pulse-gold"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
