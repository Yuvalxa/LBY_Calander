import { useState, useEffect } from 'react';
import quotesData from './quotes.json';
import './CountdownTimer.css';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteType, setQuoteType] = useState('');

  useEffect(() => {
    // Calculate days remaining and get quote
    const calculateCountdown = () => {
      const targetDate = new Date('2026-03-05T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });

        // Get quote for current day (1-indexed from today)
        const daysFromStart = Math.max(1, 28 - days);
        const quote = quotesData.quotes.find((q) => q.day === daysFromStart);
        if (quote) {
          setCurrentQuote(quote.text);
          setQuoteType(quote.type);
        }
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setCurrentQuote("🎉 LBY HAS LEFT! 🎉 The legend has departed!");
        setQuoteType('final');
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="header">
        <h1>⏳ LBY's Last Days ⏳</h1>
        <p className="subtitle">Lior ben Yair Departure Countdown</p>
      </div>

      <div className="timer-display">
        <div className="time-unit">
          <span className="number">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="label">Days</span>
        </div>
        <span className="separator">:</span>
        <div className="time-unit">
          <span className="number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="label">Hours</span>
        </div>
        <span className="separator">:</span>
        <div className="time-unit">
          <span className="number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="label">Minutes</span>
        </div>
        <span className="separator">:</span>
        <div className="time-unit">
          <span className="number">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="label">Seconds</span>
        </div>
      </div>

      <div className={`quote-box ${quoteType}`}>
        <p className="quote-text">"{currentQuote}"</p>
        <p className="quote-author">— The LBY Chronicles</p>
      </div>

      <div className="footer">
        <p>Mark your calendars for March 5, 2026 🗓️</p>
      </div>
    </div>
  );
}
