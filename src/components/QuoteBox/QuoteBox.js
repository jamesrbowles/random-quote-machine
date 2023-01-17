//css
import "./QuoteBox.css";

//quotes data
import quotes from "../../quotes";

//icons
import { FaQuoteLeft } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const QuoteBox = ({ randomQuote, quoteIndex }) => {
  const { author, text } = quotes[quoteIndex];
  return (
    <div id="quote-box">
      <div className="quote">
        <FaQuoteLeft className="quote-icon" />
        <h1 id="text"> {text}</h1>
      </div>
      <h4 id="author">- {author}</h4>
      <div className="buttons">
        <div className="social-icon">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <BsTwitter />
          </a>
        </div>
        <button id="new-quote" onClick={randomQuote}>
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
