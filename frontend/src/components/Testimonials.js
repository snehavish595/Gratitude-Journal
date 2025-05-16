// components/Testimonials.js
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Amit K.",
    quote:
      "Keeping a gratitude journal has transformed how I see everyday life. It brings me peace and happiness!",
  },
  {
    id: 2,
    name: "Neha S.",
    quote:
      "Writing down what I'm thankful for each day helped me overcome stress and stay positive.",
  },
  {
    id: 3,
    name: "Raj P.",
    quote:
      "This platform made it easy for me to build a daily habit of gratitude. I feel more mindful and joyful now.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-800 py-16 px-6 rounded-lg max-w-7xl mx-auto my-16">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        What Our Users Say
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, quote }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-gray-800 dark:text-gray-200"
          >
            <p className="italic mb-4">"{quote}"</p>
            <p className="font-semibold text-right">- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
