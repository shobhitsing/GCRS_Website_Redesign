import React, { useState } from 'react';
import './FourPillars.css';

export interface PillarCardItem {
  id: string;
  frontImage: string;
  mobileImage: string;
  title: string;
  isExactAsset?: boolean;
  hasBorder?: boolean;
  tagline: string;
  points: string[];
}

const PILLARS_LIST: PillarCardItem[] = [
  {
    id: 'market-entry',
    frontImage: '/Group 6.png',
    mobileImage: '/Group 6 (1).png',
    title: 'Market entry strategy:',
    isExactAsset: true,
    tagline: 'Strategic roadmap for seamless international expansion.',
    points: [
      'Market feasibility & competitive benchmarking',
      'Target consumer demographics & pricing positioning',
      'Omnichannel route: D2C, department stores & travel retail',
      'Financial modeling and multi-year revenue projections',
    ],
  },
  {
    id: 'compliance',
    frontImage: '/Group 5.png',
    mobileImage: '/Group 5 (1).png',
    title: 'Compliance and readiness:',
    isExactAsset: true,
    hasBorder: true,
    tagline: 'Flawless regulatory alignment for cosmetics & fragrance.',
    points: [
      'EU, UK, FDA and APAC cosmetic formulation review',
      'Safety assessments and Product Information Files (PIF)',
      'Responsible Person (RP) appointment & import registration',
      'Compliant packaging, ingredients listing & claims validation',
    ],
  },
  {
    id: 'retail',
    frontImage: '/Group 3.png',
    mobileImage: '/Group 3 (1).png',
    title: 'Retail & distributor connections:',
    isExactAsset: false,
    tagline: 'Access to premier retail buyers and trusted distributor networks.',
    points: [
      'Direct pitching to leading luxury & prestige retailers',
      'Established regional distributor vetting & commercial terms',
      'Margin architecture, sell-through tracking & supply planning',
      'Retail floor staff training & visual merchandising guidance',
    ],
  },
  {
    id: 'marketing',
    frontImage: '/Group 4.png',
    mobileImage: '/Group 4 (1).png',
    title: 'Marketing & growth support:',
    isExactAsset: false,
    tagline: 'Cultural resonance and sustained brand momentum.',
    points: [
      'Localized PR launch campaigns & editor introductions',
      'Targeted KOL, makeup artist & beauty influencer partnerships',
      'Co-op retail activations and event marketing',
      'Brand equity building and customer lifetime value optimization',
    ],
  },
];

export const FourPillars: React.FC = () => {
  // Default to slide 1 (shows Card 1 & Card 2 with Dot 2 active, exactly like screenshot)
  const [activeSlide, setActiveSlide] = useState(1);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  
  return (
    <section className="four-pillars-wrapper">
      <div className="four-pillars-container">
        
        <div className="four-pillars-header">
          <div className="four-pillars-line-1">
            <span className="four-text">FOUR</span>
            <div className="pillars-highlight-bar">
              <span className="pillars-text">PILLARS</span>
            </div>
          </div>

          <div className="four-pillars-line-2">
            <div className="what-we-can-highlight-bar">
              <span className="what-we-can-text">What we can</span>
            </div>
            <span className="help-you-with-text">help you with</span>
          </div>
        </div>

        <p className="four-pillars-desktop-intro">
          Choose where to focus and build a clear route in, from market insight and positioning to commercial planning and launch strategy
        </p>

        <div className="four-pillars-mobile-cards">
          {PILLARS_LIST.map((card) => (
            <img
              key={card.id}
              src={card.mobileImage}
              alt={card.title}
              className="four-pillars-mobile-card"
              loading="lazy"
            />
          ))}
        </div>

        <div className={`four-pillars-two-cards-grid ${activeSlide === 2 ? 'show-remaining-pillars' : ''}`}>
          {PILLARS_LIST.map((card, cardIndex) => {
            const isFlipped = !!flippedCards[card.id];
            const isVisibleCard = activeSlide === 2 ? cardIndex >= 2 : cardIndex < 2;
            const isActiveCard = activeSlide === 2
              ? cardIndex === 2
              : activeSlide === 1
                ? cardIndex === 1
                : cardIndex === 0;

            return (
              <div
                key={card.id}
                className={`pillar-two-card-item ${isVisibleCard ? 'is-visible' : ''} ${isActiveCard ? 'card-has-focus' : ''}`}
                onClick={() => toggleFlip(card.id)}
              >
                <div className={`pillar-flip-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  
                  <div className="pillar-flip-face pillar-flip-front">
                    {card.isExactAsset ? (
                      <img
                        src={card.frontImage}
                        alt={card.title}
                        className="pillar-card-full-img"
                      />
                    ) : (
                      <div className="pillar-custom-card-body">
                        <img
                          src={card.frontImage}
                          alt={card.title}
                          className="pillar-custom-bg"
                        />
                        <div className="pillar-custom-gradient" />
                        <span className="pillar-custom-flip-tag">Flip cards</span>
                        <div className="pillar-custom-bottom-capsule">
                          <h3 className="pillar-custom-title font-serif">{card.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pillar-flip-face pillar-flip-back">
                    <span className="pillar-back-category">Core Pillar</span>
                    <h3 className="pillar-back-title font-serif">{card.title}</h3>
                    <p className="pillar-back-tagline">{card.tagline}</p>

                    <ul className="pillar-back-bullets">
                      {card.points.map((pt, i) => (
                        <li key={i} className="pillar-bullet-row">
                          <span className="pillar-bullet-dot" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="pillar-return-btn"
                      onClick={(e) => toggleFlip(card.id, e)}
                    >
                      Flip back
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="four-pillars-pagination-dots">
          <button
            type="button"
            className={`pagination-dot ${activeSlide === 0 ? 'is-active' : ''}`}
            onClick={() => setActiveSlide(0)}
            aria-label="View first pillars"
          />
          <button
            type="button"
            className={`pagination-dot ${activeSlide === 1 ? 'is-active' : ''}`}
            onClick={() => setActiveSlide(1)}
            aria-label="View active pillars"
          />
          <button
            type="button"
            className={`pagination-dot ${activeSlide === 2 ? 'is-active' : ''}`}
            onClick={() => setActiveSlide(2)}
            aria-label="View remaining pillars"
          />
        </div>

      </div>
    </section>
  );
};

export default FourPillars;
