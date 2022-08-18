import React from 'react';
import { useIntl } from 'react-intl';
import { createMarkup, breakWordAtSlash } from './textHandlerUtils';
import { INTL, TRANSLATE_REGEXP } from './constants';

const makeUppercaseText = (message, capped) => {
  return capped ? message.toUpperCase() : message;
};

export const useGetMessage = (id = '') => {
  const intl = useIntl();
  if (id) {
    const text = { id };
    const message = intl.formatMessage(text);
    return message;
  }
  return id;
};

export const useGetFormattedMessage = (className = '', id = INTL, capped = true, forceInner = false) => {
  const message = useGetMessage(id);
  const styledMessage = makeUppercaseText(message, capped);
  return (
    message === id && !forceInner ?
      <div className={className}>{styledMessage}</div> :
      className ?
        <div className={className} dangerouslySetInnerHTML={createMarkup(styledMessage)} /> :
        <div dangerouslySetInnerHTML={createMarkup(styledMessage)} />
  );
};

export const useGetFormattedBrokenMessage = (id = '') => {
  const message = useGetMessage(id);
  if (id) {
    const brokenMessage = breakWordAtSlash(message);
    return <div dangerouslySetInnerHTML={createMarkup(brokenMessage)} />;
  }
  return <div>{id}</div>;
};

export const useGetFormattedBoldMessage = (className = '', id = INTL) => {
  const message = useGetMessage(id);
  const styledMessage = makeUppercaseText(message, true);
  return (
    message === id ?
      <b className={className}>{styledMessage}</b> :
      className ?
        <b className={className} dangerouslySetInnerHTML={createMarkup(styledMessage)} /> :
        <b dangerouslySetInnerHTML={createMarkup(styledMessage)} />
  );
};

export const useMakeTranslationKeyObject = (page = '', showDesc2 = true, showDesc1 = true) => {
  return {
    name: `${page}.name`,
    description_1: showDesc1 ? `${page}.description_1` : '',
    description_2: showDesc2 ? `${page}.description_2` : '',
  };
};

export const getSysName = (category = {}, fallback = '') => {
  const field = category && category['sys_name'] ? category['sys_name'] : category[fallback] || '';
  return field.replace(TRANSLATE_REGEXP, '').toLowerCase() || '';
};
