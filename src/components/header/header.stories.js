import React from "react";
import { Header } from "./header";
import { ReactComponent as LogoSvg } from "../../images/cemafac.svg";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Header",
  decorators: [withKnobs]
};

const Logo = () => (
  <a href="/">
    <LogoSvg />
  </a>
);

const MenuItems = () => (
  <>
    <a href="/a">Despre</a>
    <a href="/b">Ecosistemul Covid-19</a>
    <a href="/b">Sprijina proiectul</a>
  </>
);

const ProfileItems = () => (
  <>
    <a href="/">Contul meu</a>
    <a href="/">Login</a>
  </>
);

export const header = () => (
  <Header
    Logo={<Logo />}
    MenuItems={boolean("With Menu Items", true) && <MenuItems />}
    name={boolean("With Name", false) && text("Name", "Ce ma fac")}
    ProfileItems={boolean("With Profile Items", false) && <ProfileItems />}
  />
);
