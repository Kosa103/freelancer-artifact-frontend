import React from 'react';
import { IntlProvider } from 'react-intl';
import { AppContext } from '../../../storage/context';
import { LANGUAGES } from '../../../utils/constants';
import { STORAGE_KEYS } from '../../../storage/storageHandlers/config';
import { getLocalStorage, setLocalStorage } from '../../../storage/storageHandlers/operations';
import en from '../../../i18n/en.json';
import se from '../../../i18n/se.json';

const Internationalization = ({ children }) => {
  const [{ selectedLanguage = getLocalStorage(STORAGE_KEYS.LANGUAGE) }, dispatch] = React.useContext(AppContext);

  const [messages, setMessages] = React.useState({ key: LANGUAGES.EN });

  const createMessages = React.useCallback(() => {
    let messages;

    switch(selectedLanguage) {
      case LANGUAGES.EN:
        messages = en;
        break;
      case LANGUAGES.SE:
        messages = se;
        break;
      default:
        messages = en;
        dispatch({
          type: 'setSelectedLanguage',
          selectedLanguage: LANGUAGES.EN,
        });
        setLocalStorage(STORAGE_KEYS.LANGUAGE, LANGUAGES.EN);
        break;
    };
    setMessages(messages);
  }, [selectedLanguage, dispatch]);

  React.useEffect(() => {
    createMessages();
  }, [createMessages]);

  return (
    <IntlProvider locale={selectedLanguage} messages={messages} onError={() => { }}>
      {children}
    </IntlProvider>
  );
};

export default Internationalization;
