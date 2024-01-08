import React from 'react';

// Separate Komponente für einzelne Blöcke
const BenefitBlock = ({ title, description, link, linkText }) => {
  return (
    <div className="flex flex-col px-8 py-6   ">
      <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">
        {title}
      </h2>
      <p className="flex-1 mb-4 text-base   ">{description}</p>
      <a className="inline-flex items-center gap-2 text-sm " href={link}>
        <span>{linkText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

const Benefits = () => {
  // Daten für jeden Block
  const benefitData = [
    {
      title: 'Components',
      description:
        'Individual components that can be re-used multiple times...',
      link: '/components',
      linkText: 'Learn More',
    },
    {
      title: 'Components',
      description:
        'Individual components that can be re-used multiple times...',
      link: '/components',
      linkText: 'Learn More',
    },
    {
      title: 'Components',
      description:
        'Individual components that can be re-used multiple times...',
      link: '/components',
      linkText: 'Learn More',
    },
    // Weitere Blöcke hier hinzufügen
  ];

  return (
    <section className="m-4 md:m-8  flex flex-col justify-center items-center p-10 translate-y-[-250px]">
      <span className="text-xs font-semibold tracki uppercase ">
        Sorglos Reisen mit{' '}
      </span>
      <h2 className="pb-3 text-3xl font-bold md:text-4xl text-primary">
        Medikamentenüberprüfung{' '}
      </h2>
      <p>
        Reisen Sie sicher und informiert mit Ihrer notwendigen Medikation
        weltweit!
      </p>
      <div className="container   grid  gap-4 place-items-center  lg:grid-cols-2 xl:grid-cols-4 mt-10 ">
        {benefitData.map((benefit, index) => (
          <BenefitBlock key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
