import React from "react";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">
          Why Start a Gratitude Journal?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
          <div className="p-4 border rounded shadow-lg">
            <h4 className="text-xl font-bold mb-2">Write Your Gratitude</h4>
            <p>
              Take a moment each day to write down three things you are grateful
              for.
            </p>
          </div>
          <div className="p-4 border rounded shadow-lg">
            <h4 className="text-xl font-bold mb-2">Reflect on Your Journey</h4>
            <p>
              Look back at your past entries and reflect on the joy you have
              cultivated.
            </p>
          </div>
          <div className="p-4 border rounded shadow-lg">
            <h4 className="text-xl font-bold mb-2">Simple and Intuitive</h4>
            <p>
              Our clean design makes it easy to focus on what matters: your
              gratitude.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
