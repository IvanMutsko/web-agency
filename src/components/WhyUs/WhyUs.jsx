import React from 'react';

import data from '../../assets/data/whyus.json';

import Card from './Card';

import { Section, Title, List } from './WhyUs.styled';

const WhyUs = () => {
  return (
    <Section>
      <Title>Why Us</Title>
      <List>
        {data.map(el => (
          <Card key={el.id} el={el} />
        ))}
      </List>
    </Section>
  );
};

export default WhyUs;
