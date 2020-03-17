import React from 'react';
import { Hero } from './hero';
import ArrowSvg from '../../icons/arrow-right.svg';
const title = 'Ce pasi ai de urmat';
const subtitle = 'Pentru a te putea ajuta ...';

export default { title: 'Hero' };

export const withTitle = () => <Hero title={title} />;

export const withTitleSubtitle = () => (
  <Hero title={title} subtitle={subtitle} />
);

export const withTitleSubtitleIcon = () => (
  <Hero title={title} subtitle={subtitle}>
    <ArrowSvg />
  </Hero>
);

export const withDefaultIcon = () => (
  <Hero title={title} subtitle={subtitle} useFallbackIcon={true} />
);
