export const getSimplifiedName = (name = '') => {
  return name
    //.replace(/\/|\,|\.|\%|\s+/g, '')
    .replace(/\/|,|\.|%|\s+/g, '')
    .toLowerCase() || '';
};

export const getSimplifiedEndpoint = (name = '') => {
  const [SimplifiedEndpoint] = name.split('-');
  return SimplifiedEndpoint;
};
