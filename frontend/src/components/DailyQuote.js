import React, { useState, useEffect } from "react";
import axios from "axios";

const DailyQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [reflectionPrompt, setReflectionPrompt] = useState("");

  useEffect(() => {
    //Fetch daily quote from an api
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        const quotes = response.data;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote.text);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setQuote(
          "Every day may not be good, but there is something good in every day."
        ); // Default quote in case of error
      });

    // Set a daily reflection prompt
    const prompts = [
      "What made you smile today?",
      "What are you thankful for right now?",
      "How can you show more gratitude in your daily life?",
      "What did you learn from today?",
    ];
    setReflectionPrompt(prompts[new Date().getDate() % prompts.length]);
  }, []);

  return (
    <section className="bg-yellow-100 dark:bg-gray-700 p-6 rounded-md shadow-md my-8">
      <h3 className="text-2xl font-bold text-center mb-4">Daily Inspiration</h3>
      <p className="text-xl italic text-center mb-6">
        {quote ? `"${quote}"` : "Loading..."}
      </p>
      <h4 className="text-lg font-semibold text-center">Reflection Prompt:</h4>
      <p className="text-lg text-center">{reflectionPrompt}</p>
    </section>
  );
};

export default DailyQuote;
// kpih7245LtG6JgRZXAmRqQ == jxgleYpa5d9ChNeB;
