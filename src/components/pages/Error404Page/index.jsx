import React from 'react';
import { useIntl } from 'react-intl';
import Button from '../../common/ui/Buttons/Button';
import './index.scss';

const Error404Page = () => {
  const intl = useIntl();

  return (
    <div className="error-404-page">
      <div className="error-404-page__container">
        <h2 className="error-404-page__title">
          {intl.messages.error?.['404'].title}
        </h2>
        <p className="error-404-page__description">
          {intl.messages.error?.['404'].description}
        </p>
        <Button
          className="error-404-page__button"
          label={intl.messages.common?.back}
          handleClick={() => window.history.go(-1)}
        />
      </div>
    </div>
  );
};

export default Error404Page;
