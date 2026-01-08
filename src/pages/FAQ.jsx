import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is group real estate ownership?",
    answer:
      "Group real estate ownership allows multiple investors to collectively own a property. Each investor owns a percentage based on their contribution and earns returns accordingly.",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "You can start investing from ₦500,000 depending on the property. Each listing clearly shows the required minimum.",
  },
  {
    question: "How are decisions made?",
    answer:
      "Major decisions are made through secure group voting, requiring a 75–85% consensus before execution.",
  },
  {
    question: "How do investors earn returns?",
    answer:
      "Returns come from rental income and property appreciation. Rental income is shared periodically, while appreciation is realized at resale.",
  },
  {
    question: "Are the properties verified?",
    answer:
      "Yes. All properties are legally verified, professionally valued, and vetted before being listed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT IMAGE CARD */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-blue-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
            <img
              src="/img/faq3.jpeg"
              alt="Real Estate Investment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <p className="mt-4 text-xs text-slate-400 text-center">
            Trusted • Secure • Transparent
          </p>
        </div>

        {/* RIGHT FAQ CONTENT */}
        <div>
          {/* Header */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              FAQs
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl">
              Clear answers to common questions about co-owning real estate and
              building wealth together.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                  >
                    <h3 className="text-base md:text-lg font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-500 ${
                        isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
