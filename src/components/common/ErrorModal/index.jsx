import React from 'react';
import { useIntl } from 'react-intl';
import * as classnames from 'classnames';
import { AppContext } from '../../../storage/context';
import Button from '../ui/Buttons/Button';
import './index.scss';
import { REDUCER_TYPES } from '../../../storage/reducers/utils';

const ErrorModal = () => {
  const [{ errorModal }, dispatch] = React.useContext(AppContext);

  const intl = useIntl();

  const closeModal = () => {
    dispatch({
      type: REDUCER_TYPES.NULL_ERROR_MODAL,
    });
  };

  return (
    <div className={classnames(
      'error-modal',
      !errorModal?.title && !errorModal?.message && '-hidden',
    )}>
      <div className="error-modal__container">
        <div className="error-modal__backdrop"></div>
        <div className="error-modal__content">
          <h2 className="error-modal__title">{errorModal?.title || intl.messages.apiErrors?.titleDefault}</h2>
          <div className="error-modal__message-container">
            <p className="error-modal__message">{errorModal?.message || intl.messages.apiErrors?.messageDefault}</p>
          </div>
          <div className="error-modal__button-container">
            <Button
              className="error-modal__button -red"
              label={intl.messages.common?.ok}
              handleClick={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
