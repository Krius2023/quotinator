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
          <div className="my-40 md:my-64">
            <h4 className="max-w-[800px] p-10 border-2 rounded-2xl text-white md:text-4xl text-xl">{quote}<br /><br />- {by}</h4>
          </div> : ""
        }
      </div>
    </>
  );
}

export default App;
