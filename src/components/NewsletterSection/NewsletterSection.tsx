import React, { useState } from 'react';

export interface NewsletterSectionProps {
  className?: string;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  className = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubscribed(true);
  };

  return (
    <section className={`relative z-10 w-full max-w-[1140px] mx-auto px-4 sm:px-6 mt-14 mb-0 sm:mt-20 lg:mt-28 ${className}`}>
      <div className="relative min-h-[500px] w-full bg-black px-5 pb-12 pt-10 sm:min-h-[500px] sm:px-10 sm:pb-16 sm:pt-14 md:min-h-[580px] lg:min-h-[630px] lg:px-14 lg:pb-8 lg:pt-7">
        <svg
          className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-auto w-[min(1024px,calc(100vw-32px))] max-w-none -translate-x-1/2 select-none sm:block"
          viewBox="0 0 1024 630"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M -8 416 C 54 264 165 139 270 100"
            stroke="#CCFF00"
            strokeWidth="30"
            strokeLinecap="butt"
          />
          <path
            d="M 846 162 C 924 218 988 301 1032 394"
            stroke="#CCFF00"
            strokeWidth="30"
            strokeLinecap="butt"
          />
        </svg>
        <svg
          className="pointer-events-none absolute left-1/2 top-0 z-0 block h-auto w-[min(1024px,calc(100vw-32px))] max-w-none -translate-x-1/2 select-none sm:hidden"
          viewBox="0 0 1024 630"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M -8 416 C 32 345 92 270 170 232"
            stroke="#CCFF00"
            strokeWidth="30"
            strokeLinecap="butt"
          />
          <path
            d="M 930 290 C 972 320 1006 358 1032 394"
            stroke="#CCFF00"
            strokeWidth="30"
            strokeLinecap="butt"
          />
        </svg>

        <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col items-center">
          <div className="flex items-start justify-center gap-2 sm:gap-5">
            <h2 className="mt-2 m-0 w-[142px] shrink-0 text-left font-serif text-[29.55px] font-normal leading-[24.9px] text-white sm:mt-3 sm:w-auto sm:text-[40px] sm:leading-[0.98] lg:text-[46px]">
              Stay
              <br />
              connected
              <br />
              <span className="inline-flex items-center gap-2">
                with
                <span className="inline-block h-px w-8 bg-white/80 sm:w-14" aria-hidden="true" />
              </span>
            </h2>
            <div className="flex size-[78px] shrink-0 items-center justify-center rounded-full bg-[#CCFF00] sm:size-[150px] lg:size-[184px]">
              <span className="font-sans text-[24px] font-black leading-none tracking-tight text-black sm:text-[46px] lg:text-[54px]">
                GAP
              </span>
            </div>
          </div>

          <p
            className="mb-7 mt-8 max-w-[560px] select-none text-center font-serif text-white sm:mb-9 sm:mt-10 lg:mt-[88px]"
            style={{
              fontSize: 'clamp(15px, 1.25vw, 18px)',
              lineHeight: 'clamp(21px, 1.7vw, 24px)',
            }}
          >
            Get GAP updates on market access, international opportunities and the places and people shaping beauty, fragrance and personal care
          </p>

          {subscribed ? (
            <div className="w-full border border-[#CCFF00]/40 rounded-2xl p-6 sm:p-8 text-center bg-[#0d0f12]/80 backdrop-blur-sm">
              <span className="text-[#CCFF00] font-bold text-lg block mb-2">You're subscribed</span>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Thank you for subscribing to GAP updates. We'll be in touch with the latest international opportunities.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubscribed(false);
                  setName('');
                  setEmail('');
                  setAgreed(false);
                }}
                className="text-xs uppercase tracking-wider text-white/60 hover:text-[#CCFF00] transition-colors cursor-pointer"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-[500px] flex flex-col items-center md:max-w-[795.35px]">
              <div className="grid w-full min-w-0 grid-cols-2 gap-2 lg:gap-5">
                <div className="flex min-w-0 flex-col text-left">
                  <label
                    htmlFor="newsletter-first-name"
                    className="block text-[9px] font-sans font-semibold tracking-[1.5px] uppercase text-white/50 mb-1.5"
                  >
                    FIRST NAME
                  </label>
                  <input
                    id="newsletter-first-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-[20.3px] w-[167.93px] max-w-full rounded-none border-[0.32px] border-[rgba(248,246,241,0.18)] bg-[#0a0a0a] px-[7.16px] py-[5.57px] text-[7px] text-white placeholder-white/30 focus:border-[#CCFF00] focus:outline-none transition-colors sm:h-[46.85px] sm:w-full sm:rounded-[6px] sm:border-[0.73px] sm:px-[16.54px] sm:py-[12.86px] sm:text-[12px] lg:w-[387.6727px] lg:rounded-none"
                  />
                </div>
                <div className="flex min-w-0 flex-col text-left">
                  <label
                    htmlFor="newsletter-email"
                    className="block text-[9px] font-sans font-semibold tracking-[1.5px] uppercase text-white/50 mb-1.5"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="you@brand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[20.3px] w-[167.93px] max-w-full rounded-none border-[0.32px] border-[rgba(248,246,241,0.18)] bg-[#0a0a0a] px-[7.16px] py-[5.57px] text-[7px] text-white placeholder-white/30 focus:border-[#CCFF00] focus:outline-none transition-colors sm:h-[46.85px] sm:w-full sm:rounded-[6px] sm:border-[0.73px] sm:px-[16.54px] sm:py-[12.86px] sm:text-[12px] lg:w-[387.6727px] lg:rounded-none"
                  />
                </div>
              </div>

              <div className="w-full h-px bg-white/20 my-6 sm:my-7" aria-hidden="true" />

              <div className="w-full flex flex-row items-center justify-between gap-3">
                <label className="flex h-[19px] w-[201.3016px] max-w-none shrink-0 cursor-pointer select-none items-start gap-[3.98px] text-left sm:h-auto sm:w-auto sm:max-w-[450px] sm:gap-3 lg:w-[450px] lg:flex-none">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-[4.3168px] w-[4.3168px] shrink-0 cursor-pointer appearance-none rounded-[0.66px] border-[0.33px] border-[rgba(248,246,241,0.18)] bg-transparent checked:border-[#CCFF00] checked:bg-[#CCFF00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CCFF00] sm:mt-1 sm:h-[13px] sm:w-[13px] sm:rounded-[2px]"
                  />
                  <span
                    className="h-[19px] w-[193px] shrink-0 overflow-hidden text-[6.65px] font-normal leading-[9.5px] tracking-[0] text-[rgba(248,246,241,0.5)] sm:h-auto sm:w-[193px] sm:overflow-visible sm:text-[14px] sm:leading-[19.5px] lg:h-auto lg:w-[410px]"
                    style={{ fontFamily: "'Geist', 'Plus Jakarta Sans', sans-serif" }}
                  >
                    Yes, I would like to receive email updates from Global Access Partners. I understand I can unsubscribe at any time.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!agreed}
                  className="h-[13.2825px] w-[81.626px] shrink-0 rounded-full bg-[#CCFF00] px-0 py-0 text-[5px] font-bold leading-none text-[#0a0a0a] transition-all duration-200 hover:scale-[1.02] hover:bg-[#d8ff33] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer sm:h-8 sm:w-auto sm:px-5 sm:text-[12px]"
                >
                  Sign up for updates
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
