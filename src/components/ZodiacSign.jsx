import React, { useState } from "react";
import  "./style.css";

const zodiacSigns = [
    { sign: "Capricorn", start: "12-22", end: "01-19", symbol: "♑" },
    { sign: "Aquarius", start: "01-20", end: "02-18", symbol: "♒" },
    { sign: "Pisces", start: "02-19", end: "03-20", symbol: "♓" },
    { sign: "Aries", start: "03-21", end: "04-19", symbol: "♈" },
    { sign: "Taurus", start: "04-20", end: "05-20", symbol: "♉" },
    { sign: "Gemini", start: "05-21", end: "06-20", symbol: "♊" },
    { sign: "Cancer", start: "06-21", end: "07-22", symbol: "♋" },
    { sign: "Leo", start: "07-23", end: "08-22", symbol: "♌" },
    { sign: "Virgo", start: "08-23", end: "09-22", symbol: "♍" },
    { sign: "Libra", start: "09-23", end: "10-22", symbol: "♎" },
    { sign: "Scorpio", start: "10-23", end: "11-21", symbol: "♏" },
    { sign: "Sagittarius", start: "11-22", end: "12-21", symbol: "♐" },
  ];

function ZodiacSign() {

   

const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [zodiac, setZodiac] = useState(null);

  const calculateZodiac = () => {
    if (!month || !day) return;

    const birthDate = new Date(2023, parseInt(month) - 1, parseInt(day)); // Use a dummy year
    for (const { sign, start, end, symbol } of zodiacSigns) {
      const startDate = new Date(2023, parseInt(start.split("-")[0]) - 1, parseInt(start.split("-")[1]));
      const endDate = new Date(2023, parseInt(end.split("-")[0]) - 1, parseInt(end.split("-")[1]));

      if ((birthDate >= startDate && birthDate <= endDate) || (start === "12-22" && birthDate >= startDate)) {
        setZodiac({ sign, symbol });
        return;
      }
    }
    setZodiac(null);
  };

  return (
    <div class="main"> 
       <label >Zodiac Sign Calculator</label>
      <div class="center-form">
        <select
         
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i + 1}>
              {new Date(2023, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
        <select
         
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="">Select Day</option>
          {[...Array(31)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <button
       
        onClick={calculateZodiac}
      >
        Get Zodiac Sign
      </button>

      {zodiac && (
        <div >
          <h2 >{zodiac.sign} {zodiac.symbol}</h2>
        </div>
      )}
    </div>
  )

  }

  export default ZodiacSign
