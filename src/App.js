import { useState, useEffect } from "react";
import "./App.css";

//components
import QuoteBox from "./components/QuoteBox/QuoteBox";

import quotes from "./quotes";

function App() {
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length - 1)
  );
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));
  console.log(hue);
  const noRepeat = (num) => {
    if (num > quotes.length - 1) {
      return 0;
    }
    return num;
  };

  const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomHue = Math.floor(Math.random() * 360);
    if (randomNumber === quoteIndex) {
      randomNumber = quoteIndex + 1;
    }
    setQuoteIndex(noRepeat(randomNumber));
    setHue(randomHue);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", hue);
  }, [hue]);

  console.log(hue);
  return (
    <div className="container">
      <QuoteBox randomQuote={randomQuote} quoteIndex={quoteIndex} />
    </div>
  );
}

export default App;
