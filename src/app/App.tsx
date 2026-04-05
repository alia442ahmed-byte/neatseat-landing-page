import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  PlayCircle,
  Star,
  Package,
  Car,
  Briefcase,
  RefreshCw,
  AlertCircle,
  MapPin,
  Target,
  Smartphone,
  Gift,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// --- Components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 14,
    minutes: 32,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-lg p-4 flex gap-4 text-center border border-[#FFFFFF]/20">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-white">
            {timeLeft.days}
          </span>
          <span className="text-xs text-[#FFFFFF]/70 uppercase tracking-wider">
            Days
          </span>
        </div>
        <span className="text-2xl font-bold text-white/50">
          :
        </span>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-white">
            {timeLeft.hours}
          </span>
          <span className="text-xs text-[#FFFFFF]/70 uppercase tracking-wider">
            Hours
          </span>
        </div>
        <span className="text-2xl font-bold text-white/50">
          :
        </span>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-white">
            {timeLeft.minutes}
          </span>
          <span className="text-xs text-[#FFFFFF]/70 uppercase tracking-wider">
            Mins
          </span>
        </div>
        <span className="text-2xl font-bold text-white/50">
          :
        </span>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#DD6B20]">
            {timeLeft.seconds}
          </span>
          <span className="text-xs text-[#FFFFFF]/70 uppercase tracking-wider">
            Secs
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[#DD6B20] font-bold">
        <AlertCircle size={18} />
        <span>Only 27 Units Remaining!</span>
      </div>
    </div>
  );
};

const CTAButton = ({
  text,
  subtext,
}: {
  text: string;
  subtext?: string;
}) => (
  <button onClick={() => window.location.href = 'https://checkout.square.site/merchant/MLQ5J8FGGNN99/checkout/MG36UIXHJYIG63FVA4PHCVQO'} className="w-full max-w-md mx-auto flex flex-col items-center justify-center bg-[#DD6B20] hover:bg-[#c25a17] text-white py-4 px-8 rounded-xl font-bold text-lg shadow-[0_8px_0_#9a450e] hover:shadow-[0_4px_0_#9a450e] hover:translate-y-1 transition-all duration-200">
    <span className="text-xl uppercase tracking-wide">
      {text}
    </span>
    {subtext && (
      <span className="text-sm font-normal opacity-90 mt-1">
        {subtext}
      </span>
    )}
  </button>
);

const SectionHero = () => (
  <section className="bg-[#0A192F] text-white pt-20 pb-24 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <div className="inline-block bg-[#D69E2E]/20 text-[#D69E2E] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-[#D69E2E]/30">
        Special Launch Event
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Finally, a Car That Stays Clean:{" "}
        <br className="hidden md:block" />
        <span className="text-[#DD6B20]">
          End the Backseat Chaos with Neat Seat!
        </span>
      </h1>
      <p className="text-lg md:text-2xl text-[#FFFFFF]/80 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
        Pre-Order Your Neat Seat Today and Reclaim Your Car's
        Sanity —{" "}
        <strong className="text-white font-bold">
          Limited to Just 30 Units
        </strong>
        . Sale Ends{" "}
        <strong className="text-white font-bold">
          April 15th
        </strong>
        .
      </p>

      <CountdownTimer />

      <div className="mt-10">
        <CTAButton
          text="Secure Yours Now"
          subtext="Only 27 Units Left!"
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-[#FFFFFF]/60">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={16} /> 60-Day Guarantee
        </div>
        <div className="flex items-center gap-1.5">
          <RefreshCw size={16} /> Secure Checkout
        </div>
      </div>
    </div>
  </section>
);

const SectionVSL = () => (
  <section className="bg-white py-24 px-6 relative z-10 -mt-10 rounded-t-[3rem] shadow-2xl">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-12">
        See the Neat Seat in Action
      </h2>

      <div className="aspect-video bg-[#0A192F] rounded-2xl overflow-hidden relative shadow-2xl border-4 border-[#0A192F] group max-w-4xl mx-auto">
        <video className="w-full h-full object-cover" controls autoPlay muted loop>
          <source src="/video/Neat_Seat_Video_Generated.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <div className="bg-[#F7FAFC] p-8 rounded-2xl border border-gray-200">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
            <AlertCircle size={28} />
          </div>
          <h3 className="text-2xl font-bold text-[#0A192F] mb-4">
            The "Backseat Black Hole"
          </h3>
          <p className="text-[#2D3748] mb-6 leading-relaxed">
            Scattered toys, crumbs, spilled drinks, sliding
            phones, and a backseat that looks like a yard sale.
            For stressed parents, it's constant requests. For
            professionals, it's misplaced documents and
            uncharged devices.
          </p>
          <div className="aspect-[4/3] rounded-xl overflow-hidden grayscale contrast-125">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758315408229-7b791f54b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzeSUyMGNhciUyMGJhY2tzZWF0fGVufDF8fHx8MTc3NTM1MzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Messy car interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-[#0A192F] p-8 rounded-2xl text-white shadow-xl transform md:-translate-y-4">
          <div className="w-12 h-12 bg-[#DD6B20] text-white rounded-xl flex items-center justify-center mb-6">
            <CheckCircle size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            The 3-Step Plan to Calm
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center flex-shrink-0 font-bold text-[#DD6B20]">
                1
              </div>
              <div>
                <strong className="block text-lg mb-1">
                  Secure Your Neat Seat
                </strong>
                <p className="text-[#FFFFFF]/70 text-sm">
                  Universal design ensures a snug, stable fit in
                  under two minutes. No tools required.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center flex-shrink-0 font-bold text-[#DD6B20]">
                2
              </div>
              <div>
                <strong className="block text-lg mb-1">
                  Organize Your Essentials
                </strong>
                <p className="text-[#FFFFFF]/70 text-sm">
                  Load the compartments — tablet holder, phone
                  holder, water bottle, snacks, and trash void.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center flex-shrink-0 font-bold text-[#DD6B20]">
                3
              </div>
              <div>
                <strong className="block text-lg mb-1">
                  Enjoy the Calm
                </strong>
                <p className="text-[#FFFFFF]/70 text-sm">
                  Experience peaceful, mess-free car rides and
                  an efficient, clutter-free mobile office.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const SectionStory = () => (
  <section className="bg-[#F7FAFC] py-24 px-6 border-t border-gray-200">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-[#0A192F] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            The Student Founders
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-6 leading-tight">
            Built by High School Students, Solving Real World
            Chaos.
          </h2>
          <div className="space-y-6 text-[#2D3748] text-lg leading-relaxed">
            <p>
              We are a group of high school students in the
              Junior Achievement program. We aren't Silicon
              Valley engineers. But we saw a problem hiding in
              plain sight:{" "}
              <strong className="text-[#0A192F]">
                the backseats of every family car and
                professional's vehicle.
              </strong>
            </p>
            <p>
              We hit a wall fast. The market was full of cheap,
              flimsy organizers that fell off the seat and
              tipped over. We knew we had to design a{" "}
              <em>system</em>, not just a product.
            </p>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#D69E2E] shadow-sm italic">
              "When you buy a Neat Seat, you are not just buying
              a car organizer. You are investing in the next
              generation of problem-solvers. 10% of proceeds
              support local charities."
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-start">
              <Car className="text-[#DD6B20] w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0A192F] mb-1">
                  For Stressed Parents
                </h4>
                <p className="text-sm text-[#2D3748]/80">
                  Enjoy peaceful, organized family journeys and
                  reclaim sanity on the road.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-start">
              <Briefcase className="text-[#0A192F] w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0A192F] mb-1">
                  For Professionals
                </h4>
                <p className="text-sm text-[#2D3748]/80">
                  Transform your backseat into an efficient
                  mobile office on every commute.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <ImageWithFallback
              src="/image/team photo.jpeg"
              alt="High school students working"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-[#D69E2E] text-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
            <div className="flex gap-2 text-white mb-2">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <p className="font-medium">
              "These kids built something that actually works.
              Can't wait to get my order!!!"
            </p>
            <p className="text-sm mt-3 opacity-90">
              — Alia, Early customer
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionOfferStack = () => (
  <section className="bg-white py-24 px-6 relative">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A192F] mb-6">
          Here's Everything You're Getting Today When You
          Pre-Order Your Neat Seat:
        </h2>
        <p className="text-xl text-[#2D3748]">
          A complete car transformation system at a fraction of
          what it is worth.
        </p>
      </div>

      <div className="mb-16 flex justify-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-300 max-w-md">
          <ImageWithFallback
            src="/image/NeatSeat product.png"
            alt="Neat Seat Product"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="bg-[#0A192F] rounded-3xl overflow-hidden shadow-2xl border border-[#0A192F]/20">
        <div className="p-8 md:p-12 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-[#FFFFFF]/10 p-3 rounded-lg">
                <Package size={24} className="text-[#DD6B20]" />
              </div>
              <span className="text-xl font-bold">
                Neat Seat Premium Car Organizer
              </span>
            </div>
            <span className="text-xl text-[#FFFFFF]/50 font-medium">
              Retail Value: $49.99
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-[#FFFFFF]/10 p-3 rounded-lg">
                <Gift size={24} className="text-[#D69E2E]" />
              </div>
              <div>
                <span className="text-xl font-bold block">
                  BONUS #1: "Peaceful Passenger"
                </span>
                <span className="text-sm text-[#FFFFFF]/70">
                  Road Trip Game Pack (50+ pages)
                </span>
              </div>
            </div>
            <span className="text-xl text-[#FFFFFF]/50 font-medium">
              Value: $19.00
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-[#FFFFFF]/10 p-3 rounded-lg">
                <Gift size={24} className="text-[#D69E2E]" />
              </div>
              <div>
                <span className="text-xl font-bold block">
                  BONUS #2: "Mobile Executive"
                </span>
                <span className="text-sm text-[#FFFFFF]/70">
                  Packing & Organization Guide
                </span>
              </div>
            </div>
            <span className="text-xl text-[#FFFFFF]/50 font-medium">
              Value: $27.00
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-[#FFFFFF]/10 p-3 rounded-lg">
                <Gift size={24} className="text-[#D69E2E]" />
              </div>
              <div>
                <span className="text-xl font-bold block">
                  BONUS #3: "Zero-Mess"
                </span>
                <span className="text-sm text-[#FFFFFF]/70">
                  Car Cleaning & Maintenance Blueprint
                </span>
              </div>
            </div>
            <span className="text-xl text-[#FFFFFF]/50 font-medium">
              Value: $47.00
            </span>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 text-center">
          <p className="text-2xl text-[#2D3748] mb-2 font-medium">
            Total Value:{" "}
            <span className="line-through text-red-500 font-normal">
              $142.99
            </span>
          </p>
          <p className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-10">
            Your Pre-Order Price Today:{" "}
            <span className="text-[#DD6B20]">$29.99</span>
          </p>

          <CTAButton
            text="Yes! I Want My Neat Seat + All 3 Bonuses!"
            subtext="(Only 27 Left at This Price)"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-8 text-[#2D3748]/60 text-sm font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle
                size={16}
                className="text-green-500"
              />{" "}
              100% Proceeds to JA
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} className="text-[#DD6B20]" />{" "}
              Offer Ends April 15th
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionGuarantee = () => (
  <section className="bg-[#0A192F] text-white py-24 px-6 border-t-[12px] border-[#D69E2E]">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <div className="w-24 h-24 mx-auto bg-[#D69E2E] rounded-full flex items-center justify-center text-[#0A192F] mb-8">
        <ShieldCheck size={48} strokeWidth={2.5} />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
        THE "PRISTINE BACKSEAT OR WE PAY YOU" GUARANTEE
      </h2>
      <div className="text-lg md:text-xl text-[#FFFFFF]/80 leading-relaxed font-light space-y-6 text-left bg-[#FFFFFF]/5 p-8 md:p-10 rounded-2xl border border-[#FFFFFF]/10">
        <p>
          We are so absolutely, unconditionally confident that
          the Neat Seat will transform your chaotic car into a
          serene, organized sanctuary that we are offering a
          guarantee that goes far beyond any standard return
          policy.
        </p>
        <p>
          <strong>Here is our promise:</strong> Try the Neat
          Seat for a full <strong>60 days</strong>. Install it,
          load it up, and put it to the test. Use it every
          single day.
        </p>
        <p>
          If, after 60 days, your backseat isn't noticeably
          cleaner, more organized, and significantly less
          stressful to manage — we don't just want you to return
          it.
        </p>
        <div className="bg-[#DD6B20]/20 p-6 rounded-xl border border-[#DD6B20]/40 text-center">
          <p className="font-bold text-white text-xl">
            We will refund 100% of your $29.99 purchase price.
          </p>
        </div>
        <p className="text-center italic opacity-80 pt-4">
          Plus, you keep all three digital bonuses (the $93 in
          value) just for giving us a try. You have absolutely
          nothing to lose.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-[#FFFFFF]/50 py-12 px-6 text-center text-sm">
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-center gap-2 text-white font-bold text-xl tracking-widest uppercase mb-8">
        <Car className="text-[#DD6B20]" /> Neat Seat
      </div>
      <p>
        Built by Junior Achievement Students. 100% of proceeds
        support entrepreneurial education.
      </p>
      <p>© 2026 Neat Seat. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="#"
          className="hover:text-white transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans selection:bg-[#DD6B20] selection:text-white">
      <main>
        <SectionHero />
        <SectionVSL />
        <SectionStory />
        <SectionOfferStack />
        <SectionGuarantee />
      </main>
      <Footer />

      {/* Sticky Mobile CTA for high conversion */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:hidden z-50">
        <button onClick={() => window.location.href = 'https://checkout.square.site/merchant/MLQ5J8FGGNN99/checkout/MG36UIXHJYIG63FVA4PHCVQO'} className="w-full bg-[#DD6B20] text-white py-3 px-6 rounded-lg font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-2">
          Secure Yours Now{" "}
          <span className="text-sm font-normal bg-black/20 px-2 py-0.5 rounded-full">
            Only 27 Left
          </span>
        </button>
      </div>
    </div>
  );
}