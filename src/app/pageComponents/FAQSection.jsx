import React from 'react';
import FAQItem from '../components/FAQItem';
import faqItems from '../data/faqItems';
const FAQSection = () => {
  return (
    <div className="" id="faq">
      <div className="mx-auto text-center mt-20">
        <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
          Haben Sie noch Fragen ?
        </h1>
        <p className="text-subline   ">
          Finden Sie schnell Klarheit zu unseren Services
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-[1080px] mx-auto mt-10 md:mt-20 p-10">
        {faqItems.map((item, index) => {
          return (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
