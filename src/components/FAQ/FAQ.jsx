import React from 'react';
import { Section, Title, List } from './FAQ.styled';

import Button from '../Button/Button';
import Card from './Card';

import data from '../../assets/data/faq.json';

const FAQ = () => {
  return (
    <Section>
      <Title>FAQ</Title>
      <List>
        {data.map(el => (
          <Card key={el.id} el={el} />
        ))}
      </List>
      <Button text="Ask a question" />
    </Section>
  );
};

export default FAQ;
