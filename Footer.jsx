import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * Props:
 *  - logo (string): Brand name
 *  - tagline (string): Short tagline
 *  - links (array): [{ label, href }]
 *  - socials (array): [{ name, href, icon }]
 *  - copyright (string)
 */
const Footer = ({
  logo = 'Brand',
  tagline = 'Building great web experiences.',
  links = [
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  socials = [
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
  ],
  copyright = `© ${new Date().getFullYear()} Brand. All rights reserved.`,
}) => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">{logo}<span>.</span></div>
          <p className="footer__tagline">{tagline}</p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.name} href={s.href} className="footer__social" title={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__links">
          <h4 className="footer__links-title">Navigation</h4>
          <ul>
            {links.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
