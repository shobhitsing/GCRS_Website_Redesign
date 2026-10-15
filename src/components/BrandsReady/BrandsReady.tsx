import React from 'react';

export interface BrandsReadyProps {
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  descriptionPara1?: string;
  descriptionPara2?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
  bgImageSrc?: string;
  className?: string;
}

export const BrandsReady: React.FC<BrandsReadyProps> = ({
  titleLine1 = 'For brands ready to',
  titleLine2 = 'grow beyond their',
  titleLine3 = 'home market',
  descriptionPara1 = 'We work with beauty, fragrance and personal care brands at different stages of international growth. You may be choosing your next market, preparing products for launch, looking for retail or distribution partners, or bringing separate plans together into one clear strategy.',
  descriptionPara2 = 'We start by understanding your brand, your ambitions and what you need to move forward.',
  ctaText = 'Tell us about your plans',
  onCtaClick,
  ctaHref = '#contact',
  bgImageSrc = '/brands-ready-bg.jpg',
  className = '',
}) => {
  const handleCta = (e: React.MouseEvent) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <section className={`relative z-10 w-full max-w-[1235px] mx-auto px-[19px] sm:px-6 lg:px-0 ${className}`}>
      <div className="relative flex w-full min-h-[624px] flex-col justify-start overflow-hidden rounded-[20px] border border-white/5 bg-[#000000] p-4 shadow-2xl sm:min-h-[580px] sm:justify-between sm:rounded-[24px] sm:p-10 lg:min-h-[768px] lg:rounded-[30px] lg:p-14">
        
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <picture className="block h-full w-full">
            <source
              media="(max-width: 639px)"
              srcSet="/Image%20(Editorial%20beauty%20photography).png"
            />
            <img
              src={bgImageSrc}
              alt=""
              className="w-full h-full object-cover object-center select-none block"
            />
          </picture>
          <img
            src="/brands-ready-mobile-bg.png"
            alt=""
            className="pointer-events-none absolute right-0 top-0 z-[1] block h-auto w-full object-contain sm:hidden"
            aria-hidden="true"
          />
          <div 
            className="absolute inset-0 hidden bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none sm:block" 
            aria-hidden="true" 
          />
        </div>

        <div className="relative z-10 mt-[70px] max-w-[348px] sm:mt-0 sm:max-w-2xl">
          <h2 className="font-serif text-[42.17px] sm:text-5xl lg:text-[58px] font-normal leading-[44.59px] sm:leading-[1.08] tracking-normal text-white select-none">
            {titleLine1} <br />
            {titleLine2} <br />
            {titleLine3}
          </h2>
        </div>

        <div className="relative z-10 mt-[145px] flex max-w-[345px] flex-col items-start sm:mt-16 sm:max-w-2xl lg:max-w-3xl">
          <div className="w-36 sm:w-48 h-[1px] bg-white/25 mb-6 sm:mb-7" aria-hidden="true" />

          <div 
            className="max-w-[720px] space-y-0 text-[13.46px] leading-[16.6px] text-white/90 sm:space-y-4 sm:text-[26px] sm:leading-[33px]"
            style={{
              fontFamily: "Canela, 'Canela Text', 'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            <p>{descriptionPara1}</p>
            <p>{descriptionPara2}</p>
          </div>

          <a
            href={ctaHref}
            onClick={handleCta}
            className="mt-8 inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#CCFF00] hover:bg-[#d8ff33] text-black font-bold text-[14px] sm:text-[15px] font-sans tracking-tight transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(204,255,0,0.45)] active:scale-[0.98] cursor-pointer"
          >
            {ctaText}
          </a>
        </div>

      </div>
    </section>
  );
};

export default BrandsReady;
