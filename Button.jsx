import React, { useState } from 'react';
import './Button.css';

/**
 * Button Component
 * Props:
 *  - label (string): Button text
 *  - variant ('primary' | 'outline' | 'ghost' | 'danger'): visual style
 *  - size ('sm' | 'md' | 'lg')
 *  - disabled (bool)
 *  - loading (bool): shows spinner
 *  - icon (string): emoji or text icon (left)
 *  - iconRight (string): emoji or text icon (right)
 *  - onClick (func)
 */
const Button = ({
  label = 'Click Me',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon = null,
  iconRight = null,
  onClick = () => {},
}) => {
  const [ripple, setRipple] = useState(false);

  const handleClick = (e) => {
    if (disabled || loading) return;
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    onClick(e);
  };

  return (
    <button
      className={[
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        disabled || loading ? 'btn--disabled' : '',
        ripple ? 'btn--ripple' : '',
      ].join(' ')}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="btn__spinner" />
      ) : (
        <>
          {icon && <span className="btn__icon btn__icon--left">{icon}</span>}
          <span className="btn__label">{label}</span>
          {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
