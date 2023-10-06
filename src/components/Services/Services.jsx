import React, { useState } from 'react';

import Button from '../Button/Button';
import data from '../../assets/data/services.json';

import {
  Section,
  Title,
  ServicesWrap,
  ContentWrap,
  ButtonList,
  Btn,
  ContentTitle,
  ContentList,
  ContentListItem,
  ContentDescription,
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
              <Btn
                type="button"
                onClick={() => handleButtonClick(id)}
                className={currentData.id === id ? 'current' : ''}
              >
                {title}
              </Btn>
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
          <Button text={'I want'} />
        </ContentWrap>
      </ServicesWrap>
    </Section>
  );
};

export default Services;
