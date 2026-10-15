import React from 'react';

export interface HeroProps {
  titleLine1?: string;
  titleLine2?: string;
  descriptionPara1?: string;
  descriptionPara2?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
  bgImageSrc?: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  titleLine1 = 'Your next market',
  titleLine2 = 'starts here',
  descriptionPara1 = 'Global Access Partners helps beauty, fragrance and personal care brands enter new markets and build the commercial relationships to grow in them.',
  descriptionPara2 = 'We bring market entry strategy, regulatory expertise, retail and distributor connections, and marketing support together around your goals.',
  ctaText = "Let's talk about your next market",
  onCtaClick,
  ctaHref = '#contact',
  bgImageSrc = '/hero-card-bg.png',
  className = '',
}) => {
  const handleCta = (e: React.MouseEvent) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <section className={`relative z-10 w-full ${className}`}>
      <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-black flex flex-col justify-between px-6 sm:px-10 lg:px-14 py-8 sm:py-12 lg:py-14 min-h-[520px] sm:min-h-[580px] lg:min-h-[660px]">
        {/* Full Hero Card Background Image directly from Figma */}
        <img
          src={bgImageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
        />

        <div className="relative z-10 max-w-[700px] mt-2 sm:mt-4 lg:mt-6">
          <h1
            className="font-serif font-normal text-white select-none tracking-[-0.01em]"
            style={{
              fontSize: 'clamp(42px, 6.2vw, 86px)',
              lineHeight: 'clamp(44px, 6.2vw, 84px)',
            }}
          >
            {titleLine1}
            <br />
            {titleLine2}
          </h1>
        </div>

        <div className="relative z-10 mt-10 sm:mt-14 lg:mt-16 flex flex-col items-start max-w-[495px]">
          <div className="w-[240px] sm:w-[270px] h-[1px] bg-white/70 mb-3.5 sm:mb-4" aria-hidden="true" />
          <p
            className="font-serif text-white/90 m-0"
            style={{
              fontSize: 'clamp(13.5px, 1.2vw, 15.5px)',
              lineHeight: 'clamp(18px, 1.5vw, 22px)',
            }}
          >
            {descriptionPara1} {descriptionPara2}
          </p>
          <a
            href={ctaHref}
            onClick={handleCta}
            className="mt-6 sm:mt-8 inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#CCFF00] hover:bg-[#d8ff33] text-[#0a0a0a] font-sans font-bold text-[14px] sm:text-[15px] leading-none transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(204,255,0,0.45)] active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
