import React from "react";
import "./../../styles.scss";
import { Footer } from "./footer";
import { FooterLinkHeader, FooterLinks, FooterLinkItem } from "./footer-links";

export default { title: "Footer" };

export const WithOneColumn = () => (
  <Footer>
    <FooterLinks>
      <FooterLinkHeader>Link-uri utile</FooterLinkHeader>
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

export const WithMoreColumns = () => (
  <Footer>
    <FooterLinks>
      <FooterLinkHeader>Link-uri utile</FooterLinkHeader>
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
    <FooterLinks>
      <FooterLinkHeader>Link-uri utile</FooterLinkHeader>
      <FooterLinkItem>
        <a href="/date-la-zi">Date la zi</a>
      </FooterLinkItem>
      <FooterLinkItem>
        <a href="/stiri-oficiale">Stiri oficiale</a>
      </FooterLinkItem>
      <FooterLinkItem>
        <a href="/stam-acasa">Stam acasa</a>
      </FooterLinkItem>
      <FooterLinkItem>
        <a href="/diaspora-hub">Diaspora Hub</a>
      </FooterLinkItem>
    </FooterLinks>
  </Footer>
);
