import React, { useState, useEffect } from 'react';

const StatCard = ({ number, label, suffix = "" }: { number: string, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(number);
    if (isNaN(end)) return;
    if (start === end) return;
    
    let totalMiliseconds = 2000;
    let incrementTime = (totalMiliseconds / end);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
      <div className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
