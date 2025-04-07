import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextWeek = new Date(now);
      nextWeek.setDate(now.getDate() + 7);
      nextWeek.setHours(0, 0, 0, 0); // Set to midnight for a clean countdown
      
      const difference = nextWeek.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      <Head>
        <title>DevStruct - Coming Soon</title>
        <meta name="description" content="DevStruct - Revolutionary Web Development Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-20 relative">
        {/* Glowing Orb Background Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              DevStruct
            </span>
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            is launching soon
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl">
            Revolutionizing web development for home service businesses with tech-driven design.
          </p>

          {/* Countdown Timer */}
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-6">Launching in</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.days}</div>
                <div className="text-blue-200">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.hours}</div>
                <div className="text-blue-200">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.minutes}</div>
                <div className="text-blue-200">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.seconds}</div>
                <div className="text-blue-200">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 