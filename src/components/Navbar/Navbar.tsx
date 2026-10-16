import React, { useState } from 'react';
import './Navbar.css';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavbarProps {
  logoTitle?: string;
  logoSubtitle?: string;
  navItems?: NavItem[];
  activeId?: string;
  onNavItemClick?: (item: NavItem) => void;
  ctaLabel?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
  className?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: 'what-we-do', label: 'What We Do', href: '#what-we-do' },
  { id: 'who-we-help', label: 'Who We Help', href: '#who-we-help' },
  { id: 'about-gap', label: 'About GAP', href: '#about-gap' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  logoTitle = 'GLOBAL ACCESS',
  logoSubtitle = 'PARTNERS',
  navItems = DEFAULT_NAV_ITEMS,
  activeId: controlledActiveId,
  onNavItemClick,
  ctaLabel = "Let's Talk",
  onCtaClick,
  ctaHref = '#contact',
  className = '',
}) => {
  const [internalActiveId, setInternalActiveId] = useState<string>(
    controlledActiveId || (navItems[0]?.id ?? 'what-we-do')
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentActiveId = controlledActiveId !== undefined ? controlledActiveId : internalActiveId;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    if (controlledActiveId === undefined) {
      setInternalActiveId(item.id);
    }
    setIsMobileMenuOpen(false);
    onNavItemClick?.(item);

    if (!onNavItemClick && item.href.startsWith('#')) {
      const targetEl = document.querySelector(item.href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`gap-nav-header ${className}`}>
      <nav
        className="gap-nav-container"
        id="main-nav"
        aria-label="Main Navigation"
      >
        <a href="/" className="gap-nav-brand" aria-label="Global Access Partners Home">
          <span className="gap-nav-logo-icon" aria-hidden="true">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="gap-logo-svg"
            >
              <path
                d="M 37.2 27.5 A 16 16 0 1 0 25.2 37.8"
                stroke="#CCFF00"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="32.8" cy="34.2" r="2.4" fill="#CCFF00" />
            </svg>
          </span>

          <div className="gap-nav-brand-text">
            <span className="gap-nav-title">{logoTitle}</span>
            <span className="gap-nav-subtitle">{logoSubtitle}</span>
          </div>
        </a>

        <ul className="gap-nav-links" role="menubar">
          {navItems.map((item) => {
            const isActive = item.id === currentActiveId;
            return (
              <li key={item.id} role="none" className="gap-nav-item">
                <a
                  href={item.href}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  className={`gap-nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  <span className="gap-nav-link-text">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="gap-nav-actions">
          <a
            href={ctaHref}
            className="gap-nav-cta-btn"
            id="nav-cta-btn"
            onClick={handleCtaClick}
          >
            {ctaLabel}
          </a>

          <button
            type="button"
            className={`gap-nav-mobile-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="gap-toggle-bar"></span>
            <span className="gap-toggle-bar"></span>
            <span className="gap-toggle-bar"></span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-drawer"
        className={`gap-mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="gap-mobile-links">
          {navItems.map((item) => {
            const isActive = item.id === currentActiveId;
            return (
              <li key={item.id} className="gap-mobile-item">
                <a
                  href={item.href}
                  className={`gap-mobile-link ${isActive ? 'is-active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="gap-mobile-cta-wrapper">
          <a
            href={ctaHref}
            className="gap-nav-cta-btn gap-nav-cta-btn-mobile"
            onClick={handleCtaClick}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
