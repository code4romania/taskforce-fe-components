import React from "react";
import "./../../styles.scss";
import { Footer } from "./footer";
import { FooterLinkHeader, FooterLinks, FooterLinkItem } from "./footer-links";

export default { title: "Footer" };

export const Default = () => (
  <Footer>
    <FooterLinks>
      <FooterLinkHeader>Linkuri utile</FooterLinkHeader>
      <FooterLinkItem>
        <a href="/termeni-si-conditii"> Termeni și condiții</a>
      </FooterLinkItem>
      <FooterLinkItem>
        <a href="/politica-confidentialitate"> Politică de confidențialitate</a>
      </FooterLinkItem>
      <FooterLinkItem>
        <a
          href="https://code4.ro/ro/codul-de-conduita/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Codul de Conduită
        </a>
      </FooterLinkItem>
      <FooterLinkItem>
        <a
          href="https://code4.ro/ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Code for Romania
        </a>
      </FooterLinkItem>
      <FooterLinkItem>
        <a href="mailto:contact@code4.ro"> Contact</a>
      </FooterLinkItem>
    </FooterLinks>
  </Footer>
);
