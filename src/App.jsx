import { useState } from "react";
import { getTodaysQuote } from '../utils/get.quote';

function App() {

  const [quote, setQuote] = useState("");
  const [by, setBy] = useState("");

  const populateQuote = () => {
    let quotesResponse = getTodaysQuote();
    setQuote(quotesResponse.body);
    setBy(quotesResponse.by);
  };

  return (
    <>
      <div className="w-max-[1000px] h-screen mt-200 px-10 flex flex-col justify-between items-center bg-black">

        <div className="md:p-0 px-10 fixed top-10 flex flex-col">
          <h1 className="py-2 border-b-2 border-pink-500 text-white text-center font-bold md:text-6xl text-xl">Welcome to Quotinator</h1>
          <button className="md:w-full md:p-4 p-1 my-4 rounded-3xl hover:bg-white bg-pink-500 text-black-500 md:text-4xl text-xl" onClick={populateQuote}>Generate a quote</button>
        </div>
        {quote ?
          <div className="my-52 md:my-80">
            <button onClick={copyQuoteToClipboard} className="bg-white px-2 py-2 mb-4 rounded-full right-0 top-0 self-end"><img src="copy-icon.png" alt="copy-icon" className="h-4" /></button>
            {hasCopied ? <button onClick={copyQuoteToClipboard} className="pl-2 text-white font-bold text-xl animate-bounce">✓</button> : ""}
            <h4 className="max-w-[800px] p-10 border-2 rounded-2xl text-white md:text-4xl text-xl">{quote}<br /><br />- {by}</h4>
          </div> : ""
        }
      </div>
    </>
  );
}

export default App;
