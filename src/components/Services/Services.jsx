import React, { useState } from 'react';

import data from '../../assets/data/services.json';

import {
  Section,
  Title,
  ServicesWrap,
  ContentWrap,
  ButtonList,
  Button,
  ContentTitle,
  ContentList,
  ContentListItem,
  ContentDescription,
  ButtonWant,
} from './Services.styled';

const Services = () => {
  const [currentData, setCurrentData] = useState(data[0]);

  const handleButtonClick = idElement => {
    const newCurrentData = data.find(el => el.id === idElement);

    setCurrentData(newCurrentData);
  };

  return (
    <Section id="services">
      <Title>Services</Title>
      <ServicesWrap>
        <ButtonList>
          {data.map(({ title, id }) => (
            <li key={id}>
              <Button
                type="button"
                onClick={() => handleButtonClick(id)}
                className={currentData.id === id ? 'current' : ''}
              >
                {title}
              </Button>
            </li>
          ))}
        </ButtonList>
        <ContentWrap>
          <ContentTitle>{currentData.title}</ContentTitle>
          <ContentList>
            {currentData.points.map(point => (
              <ContentListItem key={point}>{point}</ContentListItem>
            ))}
          </ContentList>
          <ContentDescription>{currentData.description}</ContentDescription>
          <ButtonWant>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            I want
          </ButtonWant>
        </ContentWrap>
      </ServicesWrap>
    </Section>
  );
};

export default Services;
