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
      
      // Set to next week at midnight
      nextWeek.setDate(now.getDate() + 7);
      nextWeek.setHours(0, 0, 0, 0);
      
      const difference = nextWeek.getTime() - now.getTime();
      
      // Calculate time components
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    };

    // Calculate immediately and then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 px-4 sm:px-6">
      <Head>
        <title>DevStruct - Coming Soon</title>
        <meta name="description" content="DevStruct - Revolutionary Web Development Coming Soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-8 sm:py-12 md:py-20 relative min-h-screen flex items-center justify-center">
        {/* Glowing Orb Background Effect */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500 rounded-full filter blur-[80px] sm:blur-[96px] md:blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-cyan-500 rounded-full filter blur-[80px] sm:blur-[96px] md:blur-[128px] opacity-20 animate-pulse delay-1000"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              DevStruct
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
            is launching soon
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-sm md:max-w-2xl px-4">
            Revolutionizing web development for home service businesses with tech-driven design.
          </p>

          {/* Countdown Timer */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-blue-400/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Launching in</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{timeLeft.days}</div>
                <div className="text-xs sm:text-sm md:text-base text-blue-200">Days</div>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{timeLeft.hours}</div>
                <div className="text-xs sm:text-sm md:text-base text-blue-200">Hours</div>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{timeLeft.minutes}</div>
                <div className="text-xs sm:text-sm md:text-base text-blue-200">Minutes</div>
              </div>
              <div className="text-center p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{timeLeft.seconds}</div>
                <div className="text-xs sm:text-sm md:text-base text-blue-200">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 