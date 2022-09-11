import React from 'react';
import * as classnames from 'classnames';
import './index.scss';

const Button = (props) => {
	const {
		label = '',
    icon,
    iconHtml,
		type = 'button',
		className = '',
		handleClick = () => { },
		disabled = false,
	} = props;

	return (
		<button
			type={type}
			className={classnames(
        'button',
        className && className,
        disabled && '-disabled',
      )}
			onClick={handleClick}
			disabled={disabled}
		>
      {icon && (
        <img
          className="button__icon"
          src={icon}
          alt="icon"
        />
      )}
      {iconHtml && iconHtml}
			{label}
		</button>
	)
}

export default Button;
