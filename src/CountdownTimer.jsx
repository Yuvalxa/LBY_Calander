import { useState, useEffect } from 'react';
import quotesData from './quotes.json';
import './CountdownTimer.css';

// Import all day images so Vite processes them
import day01 from './images/day-01.jpg';
import day02 from './images/day-02.png';
import day03 from './images/day-03.png';
import day04 from './images/day-04.png';
import day05 from './images/day-05.png';
import day06 from './images/day-06.png';
import day07 from './images/day-07.png';
import day08 from './images/day-08.png';
import day09 from './images/day-09.png';
import day10 from './images/day-10.png';
import day11 from './images/day-11.png';
import day12 from './images/day-12.png';
import day13 from './images/day-13.png';
import logoImage from './images/logo/logo.png';

// Array of all images for slideshow
const images = [
  day01, day02, day03, day04, day05, day06, day07, day08,
  day09, day10, day11, day12, day13
];

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteType, setQuoteType] = useState('');
  const [currentPicture, setCurrentPicture] = useState('');

  // Slideshow effect - change image every 10 seconds
  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 28);
    }, 10000);

    return () => clearInterval(slideshowTimer);
  }, []);

  // Update displayed image when slideshow index changes
  useEffect(() => {
    if (images[currentImageIndex]) {
      setCurrentPicture(images[currentImageIndex]);
    }
  }, [currentImageIndex]);

  // Calculate countdown timer and get daily quote
  useEffect(() => {
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
        <div className="header-content">
          <div className="title-section">
            <h1>LBY's Last Days In <span className="operative-text">Operative</span></h1>
            <p className="subtitle">Lior Ben Yair Departure Countdown</p>
          </div>
        </div>
      </div>

      <div className="logo-section">
        <img src={logoImage} alt="Operative Logo" className="operative-logo" />
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

      {currentPicture && (
        <div className="picture-display">
          <img src={currentPicture} alt="Gallery" className="daily-picture" />
        </div>
      )}

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
