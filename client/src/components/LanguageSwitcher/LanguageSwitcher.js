import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const getCurrentLanguageLabel = () => {
    return i18n.language === 'te' ? 'తెలుగు' : 'English';
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle 
        caret 
        className="btn btn-outline-primary btn-sm"
        style={{ 
          border: '1px solid #007bff',
          color: '#007bff',
          fontSize: '12px',
          padding: '5px 10px'
        }}
      >
        <i className="fa fa-globe" style={{ marginRight: '5px' }}></i>
        {getCurrentLanguageLabel()}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem 
          onClick={() => changeLanguage('en')}
          active={i18n.language === 'en'}
        >
          🇺🇸 English
        </DropdownItem>
        <DropdownItem 
          onClick={() => changeLanguage('te')}
          active={i18n.language === 'te'}
        >
          🇮🇳 తెలుగు
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
