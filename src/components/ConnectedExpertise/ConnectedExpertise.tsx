import React from 'react';
import './ConnectedExpertise.css';

export interface ConnectedExpertiseProps {
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  descriptionPara1?: string;
  descriptionPara2?: string;
  imageSrc?: string;
  ringSrc?: string;
  className?: string;
}

export const ConnectedExpertise: React.FC<ConnectedExpertiseProps> = ({
  titleLine1 = 'Connected expertise',
  titleLine2 = 'for international',
  titleLine3 = 'growth',
  descriptionPara1 = "Global Access Partners brings market access strategy and commercial support together through a network of specialists and partners. We shape the support around each brand's goals and target markets.",
  descriptionPara2 = 'GAP is backed by gcrs group, whose regulatory expertise helps brands understand and meet the requirements of their target markets.',
  imageSrc = '/connected-expertise.png',
  ringSrc = '/lime-brand-ring.svg',
  className = '',
}) => {
  return (
    <section className={`connected-expertise-section relative z-10 w-full max-w-[1236px] mx-auto px-4 sm:px-6 my-16 sm:my-20 lg:my-24 overflow-visible ${className}`}>
      <div className="connected-expertise-container relative w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 overflow-visible">
        <div className="connected-expertise-image-col relative z-10 w-full lg:w-auto flex items-center justify-center lg:justify-start overflow-visible shrink-0">
          <div className="connected-expertise-image-wrapper relative overflow-visible w-full max-w-[541px] lg:w-[541px] lg:h-[615px]">
            <img
              src={imageSrc}
              alt="Makeup artist swatching cosmetic product on hand with powder compacts"
              width={541}
              height={615}
              className="connected-expertise-img w-full max-w-[541px] aspect-[541/615] sm:w-[480px] lg:w-[541px] lg:h-[615px] object-cover block rounded-[66px] opacity-100 rotate-0"
              style={{
                borderRadius: '66px',
                opacity: 1,
                transform: 'rotate(0deg)',
              }}
              loading="lazy"
            />
            <div
              className="connected-expertise-ring pointer-events-none absolute z-20 origin-top-left scale-[0.55] sm:scale-[0.75] lg:scale-100 -top-6 -left-28 sm:-top-10 sm:-left-48"
              aria-hidden="true"
            >
              <img src={ringSrc} alt="" width={539} height={539} className="block max-w-none" />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full lg:w-[52%] flex flex-col items-start text-left lg:items-end lg:text-right justify-center py-2">
          <h2
            className="text-white select-none text-left lg:text-right font-serif font-normal max-w-[669px]"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 70.92px)',
              lineHeight: 'clamp(42px, 5.6vw, 75px)',
            }}
          >
            {titleLine1} <br />
            {titleLine2} <br />
            {titleLine3}
          </h2>

          <div className="w-[290px] h-px bg-white/80 my-6 sm:my-8 lg:ml-auto" aria-hidden="true" />

          <div className="connected-expertise-description canela-text w-full max-w-[405px] text-[13px] leading-[16px] text-white lg:ml-auto lg:max-w-[495px] lg:text-right lg:text-[22px] lg:leading-[29px]">
            <p>{descriptionPara1}{' '}</p>
            <p>{descriptionPara2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedExpertise;
