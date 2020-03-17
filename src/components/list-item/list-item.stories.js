import React from 'react';
import './../../styles.scss';
import { ListItem } from './list-item';

export default { title: 'ListItem' };

function onClick(e) {
  console.log('onClick', e);
}

export const withInactiveState = () => (
  <ListItem title={'Simptome și tratament'} />
);

export const withActiveState = () => (
  <ListItem active={true} title={'Simptome și tratament'} />
);

export const withActiveStateAndArrow = () => (
  <ListItem active={true} hasNext={true} title={'Simptome și tratament'} />
);

export const withInactiveStateOnClick = () => (
  <ListItem title={'Simptome și tratament'} onClick={onClick} />
);
