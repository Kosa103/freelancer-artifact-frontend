import React from 'react';
import * as classnames from 'classnames';
import './index.scss';
import StarInput from '../StarInput';

const RatingSelector = props => {
  const { className, name, value, onChange } = props;
  const [starsToHighlight, setStarsToHighlight] = React.useState(0);

  return (
    <div
      className={classnames(
        'rating-selector',
        className && className,
      )}
      name={name}
    >
      {[1, 2, 3, 4, 5].map(star => (
        <StarInput
          key={star}
          className="rating-selector__star"
          isActive={star <= value}
          isHighlighted={star <= starsToHighlight}
          onClick={() => onChange(star)}
          onMouseEnter={() => setStarsToHighlight(star)}
          onMouseLeave={() => setStarsToHighlight(0)}
        />
      ))}
    </div>
  );
};

export default RatingSelector;
