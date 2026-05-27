import React, { useState } from 'react';
import './Card.css';

/**
 * Card Component
 * Props:
 *  - title (string)
 *  - description (string)
 *  - tag (string): category label
 *  - image (string): image URL or emoji placeholder
 *  - techStack (array of strings)
 *  - links (object): { demo, github }
 *  - featured (bool): makes card visually prominent
 */
const Card = ({
  title = 'Project Title',
  description = 'A short description of the project goes here.',
  tag = 'Full Stack',
  image = null,
  techStack = ['React', 'Node.js'],
  links = { demo: '#', github: '#' },
  featured = false,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={`card ${featured ? 'card--featured' : ''}`}>
      <div className="card__image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="card__image-placeholder">
            {title.charAt(0)}
          </div>
        )}
        <span className="card__tag">{tag}</span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>

        <div className="card__tech">
          {techStack.map((t) => (
            <span key={t} className="card__tech-badge">{t}</span>
          ))}
        </div>

        <div className="card__footer">
          <div className="card__links">
            {links.demo && <a href={links.demo} className="card__link">Live Demo →</a>}
            {links.github && <a href={links.github} className="card__link">GitHub →</a>}
          </div>
          <button
            className={`card__like ${liked ? 'card__like--active' : ''}`}
            onClick={() => setLiked(!liked)}
            title="Like this project"
          >
            {liked ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
