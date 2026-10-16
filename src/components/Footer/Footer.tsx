import React from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`relative z-10 mx-auto mb-12 w-[min(443px,calc(100%-36px))] max-w-[1240px] sm:mb-16 sm:w-full ${className}`}>
      <div className="relative flex h-[110px] w-full items-center justify-between gap-2 overflow-hidden rounded-[20px] border border-black bg-[#1e1e1e] px-3 py-3 sm:h-auto sm:min-h-[256px] sm:items-start sm:gap-8 sm:rounded-[30px] sm:border-white/5 sm:px-12 sm:py-12 md:items-center lg:px-24">
        <div className="flex w-[57%] min-w-0 flex-col items-start gap-1 sm:w-auto sm:gap-3 lg:gap-0">
          <img
            src="/gap-logo-footer.png"
            alt="Global Access Partners"
            width={360}
            height={89}
            className="block h-auto w-[150px] max-sm:-translate-x-[6%] sm:w-[220px] lg:w-[360px] lg:-translate-x-[6%]"
          />
          <p className="m-0 max-w-[437px] text-[8px] leading-[11px] text-white sm:text-[15px] sm:leading-[29px] lg:leading-[22px]">
            Market access for beauty, fragrance and personal care brands
          </p>
        </div>

        <div className="flex w-[43%] min-w-0 flex-col items-end gap-1 sm:w-auto sm:gap-2">
          <div className="flex items-center gap-1 sm:gap-2.5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative size-5 shrink-0 sm:size-10"
              aria-label="Global Access Partners on LinkedIn"
            >
              <img src="/linkedin-circle.svg" alt="" width={40} height={40} className="absolute inset-0 block" />
              <span className="relative z-10 flex size-5 items-center justify-center text-[8px] font-extrabold leading-none text-black sm:size-10 sm:text-[15px]">
                in
              </span>
            </a>
            <p className="whitespace-nowrap text-[8px] leading-[12px] text-white sm:text-[15px] sm:leading-[29px]">
              <a href="#contact" className="hover:text-[#CCFF00] transition-colors">Contact</a>
              {' | '}
              <a href="#privacy" className="hover:text-[#CCFF00] transition-colors">Privacy notice</a>
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="whitespace-nowrap text-[7px] leading-[11px] text-white sm:text-[13px] sm:leading-[29px]">Backed by</span>
            <img
              src="/gcrs-group-logo.png"
              alt="gcrs group"
              width={109}
              height={17}
              className="block h-[12px] w-[76px] object-contain sm:h-[17px] sm:w-[109px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
