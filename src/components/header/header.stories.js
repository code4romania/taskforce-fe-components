import React from "react";
import { Header } from "./header";
import CMFSvg from "../../icons/cemafac.svg";

export default { title: "Header" };

const Logo = () => (
  <a href="/">
    <CMFSvg />
  </a>
);

const MenuItems = () => (
  <>
    <a href="/a">MenuItem 1</a>
    <a href="/b">MenuItem 2</a>
  </>
);

const ProfileItems = () => (
  <>
    <a href="/">Contul meu</a>
    <a href="/">Login</a>
  </>
);

export const withMenuItems = () => (
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

export const withBottomHeader = () => (
  <Header
    name="Ce ma fac"
    Logo={<Logo />}
    MenuItems={<MenuItems />}
    ProfileItems={<ProfileItems />}
    bottomHeader={true}
  />
);
