import React, { useState } from 'react';
import './Header.css';

/**
 * Header Component
 * Props:
 *  - logo (string): Brand/logo text
 *  - navLinks (array): [{ label, href }]
 *  - ctaText (string): CTA button text
 *  - onCtaClick (func): CTA button handler
 */
const Header = ({
  logo = 'Brand',
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  ctaText = 'Hire Me',
  onCtaClick = () => alert('CTA clicked!'),
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0]?.label || '');

  return (
    <header className="header">
      <div className="header__logo">{logo}<span className="header__dot">.</span></div>

      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`header__link ${activeLink === link.label ? 'header__link--active' : ''}`}
            onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header__actions">
        <button className="header__cta" onClick={onCtaClick}>{ctaText}</button>
        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;
