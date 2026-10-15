import React from 'react';
import './RouteSection.css';

export interface RouteSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  descriptionPara1?: string;
  descriptionPara2?: string;
  imageSrc?: string;
  limeDotSrc?: string;
  className?: string;
}

export const RouteSection: React.FC<RouteSectionProps> = ({
  titleLine1 = 'A clearer route',
  titleLine2 = 'into new markets',
  descriptionPara1 = 'Entering a new market involves connected decisions. Where should you focus? What does your product need before launch? Which commercial route is right for your brand?',
  descriptionPara2 = 'GAP helps you build a practical plan, prepare for your target market and explore the right retail, distribution and marketing opportunities.',
  imageSrc = '/Rectangle.png',
  limeDotSrc = '/route-lime-dot.svg',
  className = '',
}) => {
  return (
    <section className={`route-section relative z-10 w-full mt-6 sm:mt-8 lg:mt-10 ${className}`}>
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 px-1 sm:px-4 lg:px-[19px] py-2">
        <div className="route-section-content relative z-10 w-full lg:w-[48%] flex flex-col justify-center">
          <h2
            className="route-section-title font-serif font-normal text-white select-none max-w-[512px]"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 70.92px)',
              lineHeight: 'clamp(42px, 5.6vw, 75px)',
            }}
          >
            {titleLine1} <br />
            {titleLine2}
          </h2>

          <div className="route-section-divider w-[290px] h-px bg-white/80 my-6 sm:my-8" aria-hidden="true" />

          <div className="route-section-description canela-text text-white max-w-[485px] space-y-0">
            <p>{descriptionPara1}</p>
            <p>{descriptionPara2}</p>
          </div>
        </div>

        <div className="route-section-image relative z-10 w-full lg:w-[52%] flex items-center justify-center lg:justify-end">
          <div className="relative lg:mr-[38px] lg:shrink-0">
            <img
              src={imageSrc}
              alt="Cosmetics and fragrance bottles on glass prisms"
              className="block h-auto w-full rounded-[66px] object-cover sm:w-[480px] lg:h-[625px] lg:w-[541px]"
              loading="lazy"
            />
            <div
              className="route-section-accent pointer-events-none absolute z-20"
              aria-hidden="true"
            >
              <img src={limeDotSrc} alt="" width={178} height={178} className="block h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
