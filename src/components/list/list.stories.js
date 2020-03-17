import React from 'react';
import './../../styles.scss';
import { List } from './list';
import { ListItem } from '../list-item/list-item';

export default { title: 'List' };

export const oneColumnList = () => (
  <div style={{ width: '673px' }}>
    <List>
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
    </List>
  </div>
);

export const twoColumnList = () => (
  <div style={{ width: '705px' }}>
    <List columns={2}>
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
    </List>
  </div>
);

export const threeColumnList = () => (
  <div style={{ width: '705px' }}>
    <List columns={3}>
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
      <ListItem title={'Simptome și tratament'} />
    </List>
  </div>
);
