
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "When will NutriSnap be available?",
      answer: "We're currently in the final stages of development and testing. Join our waiting list to be notified as soon as NutriSnap launches and to receive priority access."
    },
    {
      question: "How accurate will NutriSnap's food recognition be?",
      answer: "NutriSnap's AI has been trained on millions of food images and can identify thousands of ingredients with high accuracy. The more you use it, the more it learns about your specific meals and preferences, continuously improving its accuracy."
    },
    {
      question: "Will I need a continuous glucose monitor (CGM) to use NutriSnap?",
      answer: "No! While NutriSnap is designed for future integration with CGMs, our core feature is providing estimated glucose response curves from meal photos alone, making vital metabolic health insights accessible without expensive devices."
    },
    {
      question: "How will my data be protected?",
      answer: "Your privacy is our priority. All data will be encrypted both in transit and at rest, and we never sell your personal information. You will maintain full ownership of your information."
    },
    {
      question: "Will NutriSnap be suitable for specific diets?",
      answer: "Yes! NutriSnap works with all dietary approaches, including keto, vegan, paleo, Mediterranean, and more. The app focuses on your body's unique responses rather than prescribing a specific diet."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Join the NutriSnap Waiting List Today
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to experience the future of metabolic health, one snap at a time.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Reserve My Spot
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
