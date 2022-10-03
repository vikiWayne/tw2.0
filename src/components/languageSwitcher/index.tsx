import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { i18nConfig } from "config/app";
import { useLocalStorage } from "hooks";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const { CACHE, LANGUAGES } = i18nConfig;

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.EN);
  const [savedLang] = useLocalStorage(CACHE.LOCAL_STORAGE, LANGUAGES.EN);

  useEffect(() => {
    setCurrentLanguage(savedLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const supportedLanguages = useMemo<string[]>(
    () => Object.values(LANGUAGES),
    []
  );

  const changeLanguage = (event: SelectChangeEvent) => {
    const { value: lang } = event.target;
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <FormControl>
      <InputLabel id="language-switch">Langs</InputLabel>
      <Select
        labelId="language-switch"
        id="language-select"
        value={currentLanguage}
        label="Switch lang"
        onChange={changeLanguage}
      >
        {supportedLanguages.map((lang) => (
          <MenuItem key={lang} value={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguageSwitcher;
