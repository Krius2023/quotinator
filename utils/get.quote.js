import quotes from '../src/public/quotes.json';

export const getTodaysQuote = () => {
    const number = Math.floor(Math.random() * quotes.length);
    return quotes[number];
};