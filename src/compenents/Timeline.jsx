import React, { useState, useEffect } from 'react';

export default function Timeline() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg px-6 py-4 min-w-[80px] border border-gray-100">
        <div className="text-4xl md:text-5xl font-bold text-gray-900 font-mono">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-gray-600 text-sm font-medium mt-3">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          العرض القادم قريبًا
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          لا تفوت خصومات حصرية تصل إلى 20%
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-6 mb-10">
          <TimeUnit value={timeLeft.days} label="يوم" />
          <TimeUnit value={timeLeft.hours} label="ساعة" />
          <TimeUnit value={timeLeft.minutes} label="دقيقة" />
          <TimeUnit value={timeLeft.seconds} label="ثانية" />
        </div>

        {/* CTA Button */}
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
          أخبرني عند بدء العرض
        </button>
      </div>
    </div>
  );
}