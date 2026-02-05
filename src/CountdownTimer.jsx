import { useState, useEffect } from 'react';
import quotesData from './quotes.json';
import picturesData from './pictures.json';
import './CountdownTimer.css';

// Import all day images so Vite processes them
import day01 from './images/day-01.jpg';
import day02 from './images/day-02.svg';
import day03 from './images/day-03.svg';
import day04 from './images/day-04.svg';
import day05 from './images/day-05.svg';
import day06 from './images/day-06.svg';
import day07 from './images/day-07.svg';
import day08 from './images/day-08.svg';
import day09 from './images/day-09.svg';
import day10 from './images/day-10.svg';
import day11 from './images/day-11.svg';
import day12 from './images/day-12.svg';
import day13 from './images/day-13.svg';
import day14 from './images/day-14.svg';
import day15 from './images/day-15.svg';
import day16 from './images/day-16.svg';
import day17 from './images/day-17.svg';
import day18 from './images/day-18.svg';
import day19 from './images/day-19.svg';
import day20 from './images/day-20.svg';
import day21 from './images/day-21.svg';
import day22 from './images/day-22.svg';
import day23 from './images/day-23.svg';
import day24 from './images/day-24.svg';
import day25 from './images/day-25.svg';
import day26 from './images/day-26.svg';
import day27 from './images/day-27.svg';
import day28 from './images/day-28.svg';
import logoImage from './images/logo.png'; // or .jpg, .svg

// Map day numbers to imported images
const imageMap = {
  1: day01,
  2: day02,
  3: day03,
  4: day04,
  5: day05,
  6: day06,
  7: day07,
  8: day08,
  9: day09,
  10: day10,
  11: day11,
  12: day12,
  13: day13,
  14: day14,
  15: day15,
  16: day16,
  17: day17,
  18: day18,
  19: day19,
  20: day20,
  21: day21,
  22: day22,
  23: day23,
  24: day24,
  25: day25,
  26: day26,
  27: day27,
  28: day28,
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteType, setQuoteType] = useState('');
  const [currentPicture, setCurrentPicture] = useState('');
  const [pictureCaption, setPictureCaption] = useState('');

  // Slideshow effect - change image every 10 seconds
  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev % 28) + 1);
    }, 10000);

    return () => clearInterval(slideshowTimer);
  }, []);

  // Update displayed image when slideshow index changes
  useEffect(() => {
    if (imageMap[currentImageIndex]) {
      setCurrentPicture(imageMap[currentImageIndex]);
      setPictureCaption(`Slideshow - Image ${currentImageIndex} of 28`);
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
            <p className="subtitle">Lior ben Yair Departure Countdown</p>
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
          <img src={currentPicture} alt="Daily LBY Picture" className="daily-picture" />
          <p className="picture-caption">{pictureCaption}</p>
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
