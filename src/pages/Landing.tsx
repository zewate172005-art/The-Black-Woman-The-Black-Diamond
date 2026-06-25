import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Star, Users, GraduationCap, Globe, Briefcase, Target } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import BookCover from '../components/BookCover';

const TEN_SELVES = [
  { title: 'Self-Love', desc: 'African girls are encouraged to embrace their identity, their skin color, and their image with pride and tenderness. Self-love challenges internalized discrimination and teaches women to define love on their own terms. It\'s a radical act of reclaiming worth in a world that often undermines it.' },
  { title: 'Self-Value', desc: 'Girls must recognize their inherent worth and dignity, defining their value from within — not through external judgment. Self-value empowers them to aim high, overcome setbacks, and protect their identity. It creates a culture where women uplift each other\'s dignity as a collective force for change.' },
  { title: 'Self-Aspiration', desc: 'Girls are inspired to dream boldly and follow their own vision, not one shaped by others or by hardship. The model reminds them that their dreams are valid and powerful. Through mutual inspiration, women and girls envision a world through their own eyes — and shape it.' },
  { title: 'Self-Fulfilment', desc: 'Despite adversity, girls are reminded that fulfilment is possible through hope, purpose, and action. This self is about rebuilding broken dreams and finding wholeness. Women support one another on the journey from despair to a sense of meaning and personal completeness.' },
  { title: 'Self-Belief', desc: 'Believing in oneself is the starting point of self-trust and success. Girls are taught to recognize their abilities and resist dependency, especially on male validation. With strong self-belief, they become confident changemakers in their families, communities, and nations.' },
  { title: 'Self-Power', desc: 'Girls discover inner strength by identifying their talents and taking control of their life choices. Even in hardship, they\'re encouraged to see opportunity and define their path. Through storytelling and support, women help one another claim their power back.' },
  { title: 'Self-Victory', desc: 'This self promotes a mindset of winning, even in adversity. One woman\'s victory becomes fuel for many others to believe they too can rise. Through shared stories of triumph, the model builds a culture of unstoppable resilience and confidence.' },
  { title: 'Self-Reliance', desc: 'Girls are equipped to become financially independent and resilient, breaking cycles of poverty and dependency. Through skills, entrepreneurship, and peer inspiration, they learn to thrive on their own terms. Economic empowerment becomes a gateway to freedom and dignity.' },
  { title: 'Self-Enlightenment', desc: 'By sharing real stories of success, women light the way for others, transforming despair into hope. This self is about seeing new possibilities, shifting from darkness to purpose. It enables girls to envision a brighter future and take concrete steps toward it.' },
  { title: 'Self-Determination', desc: 'Girls are empowered to lead their lives with focus and courage, making choices aligned with their dreams. They value their own efforts, accept support, but never lose ownership of their direction. Self-determination fuels long-term commitment to personal and collective transformation.' },
];

const AUDIENCES = [
  {
    icon: Users,
    title: 'Women Leaders',
    desc: 'Training Women leaders to build inspiration and vision for girls and young people to achieve life goals using their true and real life experiences that transforms the lives of girls and young people.',
  },
  {
    icon: Heart,
    title: 'Mentors',
    desc: 'Promoting strong afro-educational and motivational approaches ensuring African girls and youth achieve success, learning from local experiences which corresponds to their needs.',
  },
  {
    icon: GraduationCap,
    title: 'Educators & Teachers',
    desc: 'Training teachers and educators to support life planning and goal orientation, and motivate girls and young people about their vision for the future.',
  },
  {
    icon: Briefcase,
    title: 'Government/International and local NGOs/Structures, including community groups',
    desc: 'They should adapt the BWBD approach to increase impact in the gender equality and girls development programs.',
  },
  {
    icon: Globe,
    title: 'Girls & Boys',
    desc: 'We are training them on the BWBD full package philosophy with the major focus on the 10 Selves. We also support them on life planning and orientation, and link them to various support systems for their various life plans.',
  },
  {
    icon: Target,
    title: 'Community Leaders',
    desc: 'Equipping community leaders to create trusted spaces where real stories of triumph are shared and passed on.',
  },
];

export default function Landing() {
  return (
    <div className="bg-onyx-950 min-h-screen text-white">
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Diamond Dreams — Central Message */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">The Black Woman, The Black Diamond (BWBD)</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
              <span className="text-gold-400">Diamond Dreams</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The Black Woman, The Black Diamond inspires African girls to rise from invisibility, like the black diamond. In an artistic approach, The Black Woman, The Black Diamond philosophy is founded and inspired on a vivid parallel between the black woman and the black diamond. All in black colour, both the black woman and the black diamond go through a difficult journey to achieve success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book"
                className="flex items-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-600/30 group"
              >
                <BookOpen className="w-5 h-5" />
                Get the Book
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 px-8 py-4 border border-gold-700/50 hover:border-gold-500 text-gold-400 hover:text-gold-300 font-semibold rounded-lg transition-all duration-200"
              >
                Explore the Philosophy
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-64 sm:w-72">
              <div className="absolute inset-0 bg-gold-500/20 rounded-2xl blur-2xl transform scale-110" />
              <BookCover className="relative shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-onyx-900 border border-gold-700/40 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 font-medium">By Daina Mutindi</p>
                <p className="text-xs text-gold-500">Maputo, Mozambique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difficult Circumstances — the central issue */}
      <section className="relative py-20 overflow-hidden border-y border-gold-800/20 bg-onyx-900/30">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <BlackDiamond size={32} className="mx-auto mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl text-gold-400 font-bold uppercase tracking-wide mb-6">
            Building Inspiration and Vision to Succeed
          </h2>
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-medium">
            "The life experiences of a woman who fought to succeed is not just a story to tell
            and be forgotten. It is a burning inspiration to spread across the world like veld fire."
          </blockquote>
          <footer className="mt-6 text-gold-500 text-sm uppercase tracking-widest">— Daina Mutindi</footer>
          <p className="mt-8 text-gray-400 text-base max-w-2xl mx-auto">
            Building inspiration to succeed in difficult circumstances is central to the philosophy of The Black Woman, The Black Diamond for powering and empowering girls and young people.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-onyx-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <BlackDiamond size={24} className="mx-auto" />
              <p className="text-2xl font-bold text-white font-serif">10</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">The Ten Selves</p>
            </div>
            <div className="space-y-2">
              <Users className="w-6 h-6 text-gold-500 mx-auto" />
              <p className="text-2xl font-bold text-white font-serif">Girls & Boys</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">The Primary Audience</p>
            </div>
            <div className="space-y-2">
              <GraduationCap className="w-6 h-6 text-gold-500 mx-auto" />
              <p className="text-2xl font-bold text-white font-serif">Leaders</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Educators & Mentors</p>
            </div>
            <div className="space-y-2">
              <Globe className="w-6 h-6 text-gold-500 mx-auto" />
              <p className="text-2xl font-bold text-white font-serif">Africa</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Afrocentric Movement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Girls Are Our Future */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-onyx-900 border border-onyx-700/40 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 sm:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gold-500" />
                <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">The Vision</span>
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-8">
                GIRLS<br />
                ARE<br />
                OUR<br />
                <span className="text-gold-400">FUTURE</span>
              </h2>
            </div>
            <div className="bg-onyx-800/50 border-l border-onyx-700/40 p-10 sm:p-14 flex flex-col justify-center">
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Women and girls are the heartbeat of tomorrow, the voice in the silence, the strength in the struggle. When they rise, whole communities rise. When they succeed, they break chains — not just for themselves, but for generations.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-5 text-gray-400 text-base leading-relaxed italic">
                "Your dreams is a diamond, achieve it no matter what challenges you face."
              </blockquote>
              <p className="mt-3 text-gold-600/80 text-xs uppercase tracking-widest">— The Black Woman, The Black Diamond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who BWBD Trains */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">Who BWBD Trains and Qualifies</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            The Philosophy in Action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            BWBD trains and builds the capacity of the people and inspirational leaders, mentors and educators who inspires and transforms the lives of girls and young people.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-onyx-900/60 hover:bg-onyx-800/80 border border-onyx-700/50 hover:border-gold-700/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center mb-4 group-hover:bg-gold-700/30 transition-colors">
                <Icon className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-gold-400 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Ten Selves */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-onyx-900/20 rounded-3xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">The Framework</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">The Transformative Ten Selves</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ten interconnected principles developed from an Afrocentric perspective, placing girls and women
            at the centre of their own development — giving them the tools to never give up their Diamond dreams.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TEN_SELVES.map((self, i) => (
            <div
              key={self.title}
              className="group bg-onyx-900/60 hover:bg-onyx-800/80 border border-onyx-700/50 hover:border-gold-700/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center shrink-0 group-hover:bg-gold-700/30 transition-colors">
                  <span className="text-gold-400 text-xs font-bold">{i + 1}</span>
                </div>
                <h3 className="font-serif font-semibold text-gold-400 text-base">{self.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{self.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-onyx-900 to-onyx-800 border border-gold-700/20 rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-600/5 rounded-full blur-2xl" />
          <div className="relative">
            <BlackDiamond size={40} className="mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Get Closer to Your Diamond Dream
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Get your copy of The Black Woman, The Black Diamond Philosophy — the book that inspires girls
              to succeed in difficult circumstances and shine like the rare diamonds they are.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold text-lg rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-gold-600/30 group"
            >
              Get the Book — $5.50
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-gray-600 text-sm">Pay via Mpesa</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
