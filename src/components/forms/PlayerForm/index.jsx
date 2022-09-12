import React from 'react';
import { useIntl } from 'react-intl';
import { Formik } from 'formik';
import { playerSchema } from '../../../utils/validationSchemas';
import InputTextField from '../../common/ui/InputTextField';
import Button from '../../common/ui/Buttons/Button';
import './index.scss';

const PlayerForm = (props) => {
  const {
    initialValues, 
    onSubmit,
  } = props;

  const intl = useIntl();

  const initialValuesDefault = {
    id: 0,
    name: '',
    updatedAtDate: '',
    level: 0,
    description: '',
  };

  const updateDefaultValues = (values) => {
    values.level = values.level || 0;
    values.description = values.description || '';

    return values;
  }

  return (
    <Formik
      initialValues={updateDefaultValues(initialValues) || initialValuesDefault}
      validationSchema={playerSchema(intl)}
      onSubmit={(values, formikBag) => onSubmit(values, formikBag)}
    >
      {({ values, touched, errors, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
        <form className="player-form" onSubmit={handleSubmit}>
          <InputTextField
            className="player-form__input"
            placeholder={intl.messages.common?.id}
            name="id"
            label={intl.messages.common?.id}
            type="number"
            value={values.id}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.id && errors.id}
            disabled
          />
          <InputTextField
            className="player-form__input"
            placeholder={intl.messages.common?.name}
            name="name"
            label={intl.messages.common?.name}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
            disabled
          />
          <InputTextField
            className="player-form__input"
            placeholder={intl.messages.pages?.player.updatedAt}
            name="updatedAtDate"
            label={intl.messages.pages?.player.updatedAt}
            value={values.updatedAtDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.updatedAtDate && errors.updatedAtDate}
            disabled
          />
          <InputTextField
            className="player-form__input"
            placeholder={intl.messages.pages?.player.level}
            name="level"
            label={intl.messages.pages?.player.level}
            type="number"
            value={values.level}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.level && errors.level}
          />
          <InputTextField
            className="player-form__input"
            placeholder={intl.messages.pages?.player.description}
            name="description"
            label={intl.messages.pages?.player.description}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && errors.description}
          />

          <div className="player-form__button-container">
            <Button
              className='player-form__button'
              label={intl.messages.common?.save}
              type='submit'
              onSubmit={handleSubmit}
              disabled={true} //{isSubmitting || Object.keys(errors).length}
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default PlayerForm;
