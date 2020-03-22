import React from "react";
import { Header } from "./header";
import LogoSvg from "../../icons/cemafac.svg";

export default { title: "Header" };

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

export const withMenuItems = () => (
  <Header Logo={<Logo />} MenuItems={<MenuItems />} />
);

export const withName = () => (
  <Header name="Ce ma fac" Logo={<Logo />} MenuItems={<MenuItems />} />
);

export const withProfileItems = () => (
  <Header
    name="Ce ma fac"
    Logo={<Logo />}
    MenuItems={<MenuItems />}
    ProfileItems={<ProfileItems />}
  />
);
