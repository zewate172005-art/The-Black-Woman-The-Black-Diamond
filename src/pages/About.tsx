import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Globe, Flame, GraduationCap, Briefcase, Target, BookOpen, Quote } from 'lucide-react';
import BlackDiamond from '../components/BlackDiamond';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TRAINING_AUDIENCES = [
  { icon: Users, title: 'Women Leaders', desc: 'Training Women leaders to build inspiration and vision for girls and young people to achieve life goals using their true and real life experiences that transforms the lives of girls and young people.' },
  { icon: Heart, title: 'Mentors', desc: 'Difficult circumstances, supporting them not to give up on their future due to life challenges.' },
  { icon: GraduationCap, title: 'Educators & Teachers', desc: 'Training teachers and educators to support life planning and goal orientation, and motivate girls and young people about their vision for the future.' },
  { icon: Briefcase, title: 'Government/International and local NGOs/Structures, including community groups', desc: 'They should adapt the BWBD approach to increase impact in the gender equality and girls development programs.' },
  { icon: Globe, title: 'Girls & Boys', desc: 'We are training them on the BWBD full package philosophy with the major focus on the 10 Selves. We also support them on life planning and orientation, and link them to various support systems for their various life plans.' },
  { icon: Target, title: 'Community Leaders', desc: 'Building trusted community spaces where real stories of triumph are shared, collected, and passed on.' },
];

export default function About() {
  return (
    <div className="bg-onyx-950 min-h-screen text-white">
      <Navbar />

      {/* Hero */}
      <div className="pt-20 lg:pt-24">
        <div
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f00 50%, #0a0a0a 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212,175,55,0.4) 0%, transparent 60%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <BlackDiamond size={48} className="mx-auto mb-6" />
            <p className="text-gold-600/80 text-xs uppercase tracking-widest mb-3">The Black Woman, The Black Diamond (BWBD)</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Black Diamond<br />
              <span className="text-gold-400">Philosophy</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
              An Afrocentric philosophy that inspires African girls to succeed in their life goals
              in difficult circumstances — never to give up their <span className="text-gold-400 font-semibold">Diamond dreams</span>.
            </p>
            <blockquote className="mt-8 text-gold-300 text-lg font-serif italic">
              "Your dreams is a diamond, achieve it no matter what challenges you face."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Rise Above Invisibility / Inspire Change */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[28rem]">
          <div className="bg-[#1a6b5a] p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">
              Rise Above<br />Invisibility.
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Despite their strength, women are systematically disadvantaged. Their achievements too often go
              unnoticed, their potential undermined and untapped. Cultural and political power imbalances
              greatly limit and imprison African women's dreams and hopes for a better future.
            </p>
          </div>
          <div className="bg-onyx-900 p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">
              Inspire<br />Change.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Behind every successful African woman is a story about her struggles to succeed. We want
              to collect and tell those stories. The life experiences of a woman is not just a story to tell
              and be forgotten. It is a burning inspiration to be spread across the world like veld fire.
            </p>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">The Philosophy Behind the Initiative</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Like the Black Diamond,<br />
              <span className="text-gold-400">She Reveals Rare Brilliance</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The Black Woman, The Black Diamond Philosophy draws a vivid parallel between the black woman
                and the black diamond — both hidden deep beneath the surface, both forged under pressure,
                both long ignored. In a world where the black woman stands last in line, her value is unseen,
                like a gem buried in the darkest earth. Yet she carries nations, heals families, and endures
                with silent power.
              </p>
              <p>
                Like the diamond formed in fire and silence, she bears the weight of generations —
                unrewarded, unrecognized, yet <span className="text-gold-400 font-semibold">unbreakable</span>. Her struggles are many: denied education,
                freedom, dignity — made invisible by race and gender alike. But she is not powerless;
                her strength lies in what she survives.
              </p>
              <p>
                When unearthed and allowed to shine, the black diamond reveals rare brilliance — just as
                the black woman, when uplifted, leads with vision, heals with wisdom, and transforms with grace.
                She is not asking to become something new — only to be seen for what she has always been:
                <span className="text-gold-400 font-semibold"> black, beautiful, bold, rare, radiant, and real.</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-onyx-900 border border-gold-700/30 rounded-2xl p-8">
              <BlackDiamond size={24} className="mb-4" />
              <blockquote className="font-serif text-xl text-white italic leading-relaxed mb-4">
                "Your dreams is a diamond, achieve it no matter what challenges you face."
              </blockquote>
              <p className="text-gold-500 text-xs uppercase tracking-widest">— The BWBD Philosophy</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'The Diamond', traits: ['Buried underground', 'Formed under extreme pressure', 'Long ignored', 'Reveals brilliance when unearthed'] },
                { label: 'The Black Woman', traits: ['Diamond dreams buried by barriers', 'Forged under hardship', 'Systematically excluded', 'Shines when given opportunity'] },
              ].map(col => (
                <div key={col.label} className="bg-onyx-900 border border-onyx-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <BlackDiamond size={14} />
                    <h3 className="text-gold-400 font-semibold text-xs">{col.label}</h3>
                  </div>
                  <ul className="space-y-2">
                    {col.traits.map(t => (
                      <li key={t} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="w-1 h-1 bg-gold-600 rounded-full mt-1.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Power of Storytelling */}
      <section className="py-20 bg-onyx-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-gold-500" />
                <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">The Power of Storytelling</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Pass on Experiences,<br />
                <span className="text-gold-400">Don't Bury Them.</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Telling real life stories and experiences to teach and inspire is deeply rooted in African traditions.
                  Therefore, storytelling is at the heart of The Black Woman, The Black Diamond. It allows women
                  and girls to reclaim their identity, rewrite narratives of pain, and turn struggles into strength.
                  When women share their stories, collective wisdom is born. Silence turns into voice, shame into pride.
                </p>
                <p>
                  The Black Woman the Black Diamond is here to inspire women to <strong className="text-white">"Die empty"</strong> —
                  promoting Women Africanism through sharing their real-life stories for building their legacy of
                  inspiring girls and women for greater success for a better Africa.
                </p>
                <p className="font-semibold text-yellow-400 text-lg mb-4">African Inspirational Figures</p>
                <p className="text-gray-300 leading-relaxed">
                  Through collecting stories of African women succeeding in difficult circumstances, The Black Woman the Black Diamond uses real life stories to create woman to woman networking mechanisms and promote educational programs for gender equality and for restoring hope in girls facing life challenges. This includes promoting networking of "Women Inspirational figures", supporting diverse interventions for promoting and upholding "African women's voices of Inspiration for girl's empowerment" from local context. This promotes women in leadership and women who succeeded in various life settings to share earnestly their experiences, disseminating lessons learnt, and huge life tips and advice motivating success.
                </p>
              </div>
            </div>
            <div className="bg-onyx-900 border border-gold-700/20 rounded-2xl p-8 lg:p-10">
              <Quote className="w-10 h-10 text-gold-500 mb-6" />
              <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed">
                "You are not alone. You are not the first one to face these challenges.
                Look, there are lots of other girls and women who succeeded regardless
                of all these challenges."
              </blockquote>
              <p className="mt-6 text-gold-500/80 text-xs uppercase tracking-widest">— The Black Woman, The Black Diamond</p>
            </div>
          </div>
        </div>
      </section>

      {/* African Voices & Inspirational Figures */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-500 text-sm uppercase tracking-widest font-medium"><span className="text-yellow-400">African Voices &amp; Inspirational Figures</span></span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Women That Achieved Success<br />
            <span className="text-gold-400">in Difficult Circumstances</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-onyx-900 border border-onyx-700/50 rounded-2xl p-8">
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Women that achieved success in difficult circumstances build their legacy and become the{' '}
              <span className="text-gold-400 font-semibold">"<span className="text-yellow-400">African voices &amp; inspirational figures</span>"</span>,
              inspiring girls and youth to achieve their life ambitions, through sharing real-life stories
              for social transformation, valuing their journeys of overcoming difficulties.
            </p>
            <div className="border-t border-onyx-700/50 pt-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                Women's and girls' stories of triumph promote resilience on girls and youth to believe in
                themselves, to dare to dream, and to pursue their ambitions and life dreams with determination.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { num: '01', text: 'Stories of success collected and preserved for generations' },
              { num: '02', text: 'Inspirational figures who became advocates for girls\' Diamond dreams' },
              { num: '03', text: 'Real-life proof that barriers can be overcome, passed on to the next generation' },
              { num: '04', text: 'Women sharing stories sending a strong message to all African girls' },
            ].map(({ num, text }) => (
              <div key={num} className="flex items-start gap-4 bg-onyx-900/60 border border-onyx-700/40 rounded-xl p-5">
                <span className="text-gold-600 font-bold text-sm font-serif shrink-0">{num}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect · Collect · Inspire */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-onyx-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">How It Works</span>
              <div className="h-px w-8 bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">Connect · Collect · Inspire</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
              The Black Woman, The Black Diamond is an afro-centric woman-to-woman inspiring girls'
              empowerment approach. Promoting local cultural practices and norms that support gender
              equality and girls' development, fostering community support, ownership and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'CONNECT',
                color: 'text-[#4dbfa0]',
                desc: 'We connect women from different generations to come together and create a trusted space where they can share their own stories of how they got to where they are today and support each other through experience sharing.',
              },
              {
                icon: Globe,
                title: 'COLLECT',
                color: 'text-[#4dbfa0]',
                desc: 'We collect real life success stories of women fighting for their future and succeeding in difficult circumstances, to be passed on to girls as testaments that other girls have faced similar obstacles and were able to overcome them.',
              },
              {
                icon: Flame,
                title: 'INSPIRE',
                color: 'text-[#4dbfa0]',
                desc: 'We inspire the next generation of girls by partnering with organizations already working with girls in their programs. Jointly, we help girls reflect on their life goals and guide them on working towards their Diamond dreams.',
              },
            ].map(({ icon: Icon, title, color, desc }) => (
              <div key={title} className="group bg-onyx-900 border border-onyx-700/50 hover:border-gold-700/40 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-[#1a6b5a]/20 border border-[#1a6b5a]/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a6b5a]/30 transition-colors">
                  <Icon className="w-5 h-5 text-[#4dbfa0]" />
                </div>
                <h3 className={`font-serif font-black text-lg mb-3 tracking-widest ${color}`}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who BWBD Trains */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">Who BWBD Trains and Qualifies</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-4">The Philosophy in Action</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            BWBD trains and builds the capacity of the people and inspirational leaders, mentors and educators who inspires and transforms the lives of girls and young people.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAINING_AUDIENCES.map(({ icon: Icon, title, desc }) => (
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

      {/* Die Empty */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-onyx-900 to-onyx-800 border border-gold-700/20 rounded-2xl p-10 sm:p-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-gold-500 text-sm uppercase tracking-widest font-medium">The Movement</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Die Empty — <span className="text-gold-400">Leave Your Legacy</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Most African women keep their stories and experiences to their graves. The Black Woman,
              the Black Diamond (BWBD) is here to inspire women to "Die Empty" — sharing their real-life
              stories while they are still alive, to die liberated for life-changing impact.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              The grave is too silent to tell that beautiful story of women's fighting and succeeding.
              When women share their stories, collective wisdom is born. Silence turns into voice,
              shame into pride. Struggles become strength. Diamond dreams are passed on.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-onyx-900 font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-600/30 group"
            >
              <BookOpen className="w-5 h-5" />
              Read the Philosophy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Original voice quote */}
      <section className="py-16 px-4 sm:px-6 text-center border-y border-gold-800/20">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-relaxed italic">
            "She seems the most powerless, yet full of power —<br />
            exploited working for others to be powerful."
          </p>
          <p className="mt-4 text-gold-500 text-sm uppercase tracking-widest">— The Black Diamond Philosophy</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
