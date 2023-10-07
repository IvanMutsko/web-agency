import React, { useEffect, useRef, useState } from 'react';
import { ListItem, Wrap, ItemTitle, SubWrap, Text } from './Card.styled';

const Card = ({ el }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    setIsShowAnswer(true);
  };

  const handleMouseLeave = () => {
    setIsShowAnswer(false);
  };

  return (
    <ListItem
      ref={cardRef}
      className={
        isVisible ? 'animate__animated animate__fadeInRight visible' : ''
      }
    >
      <Wrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ItemTitle>{el.question}</ItemTitle>
        <SubWrap className={isShowAnswer ? 'show' : ''}>
          {isShowAnswer && (
            <>
              <Text className="answer">{el.answer}</Text>
              <Text>{el.description}</Text>
            </>
          )}
        </SubWrap>
      </Wrap>
    </ListItem>
  );
};

export default Card;
