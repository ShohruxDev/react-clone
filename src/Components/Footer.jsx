
import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="foot">
        <p>{t("footer.text")}</p>
        <p>{t("footer.text1")}</p>
        <p>{t("footer.text2")}</p>
        <p>{t("footer.text3")}</p>
        <p>{t("footer.text4")}</p>
      </div>
    </footer>
  );
}

export default Footer;

