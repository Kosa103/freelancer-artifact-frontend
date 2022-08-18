const bolderRegex = new RegExp(/([a-zA-ZäæåøöåÄÖÅÆÅØ]+)\s*:/g);
const reverseBolderRegex = new RegExp(/\s*:([a-zA-ZäæåøöåÄÖÅÆÅØ]+)/g);

export const createMarkup = (text = '') => {
  return text ? {
    __html: text
  } : text;
};

export const createMarkupNoFallback = (text = '') => {
  return { __html: text };
};

export const breakWordAtSlash = (text = '') => {
  if (text) {
    const slashPosition = text.indexOf('/') + 1;
    const breakedText = `${text.slice(0, slashPosition)}<br/>${text.slice(slashPosition)}`;
    return slashPosition > 0 ? breakedText : text;
  }
  return '';
}

export const getBoldedText = (text = '') => {
  return text.replaceAll(bolderRegex, (match) => {
    return `<b className='small-bold'>${match}</b>`;
  });
};

export const getReverseBoldedText = (text = '') => {
  return text.replaceAll(reverseBolderRegex, (match) => {
    const word = match.replace(':', '') || '';
    return `<b className='small-bold'>${word}</b>`;
  });
};
