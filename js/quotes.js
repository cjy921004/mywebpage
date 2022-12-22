const quotes = [
  {
    quote: "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius"
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell"
  },
  {
    quote: "Youth isn’t always all it’s touted to be.",
    author: "Lawana Blackwell"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  }];

  const quote = document.querySelector("#quote .quote");
  const author = document.querySelector("#quote .author");
  const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
  quote.innerText = todayQuote.quote;
  author.innerText = '-'+todayQuote.author;