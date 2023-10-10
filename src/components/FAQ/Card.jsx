import React, { useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import {
  WrapForScroll,
  ListItem,
  Wrap,
  ItemTitle,
  SubWrap,
  Text,
} from './Card.styled';

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

  const renderThumb = () => {
    const thumbStyle = {
      backgroundColor: `#ffffff80`,
      borderRadius: '5px',
    };
    return <div style={{ ...thumbStyle }} />;
  };

  return (
    <ListItem
      ref={cardRef}
      className={
        isVisible ? 'animate__animated animate__fadeInRight visible' : ''
      }
    >
      <Wrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ItemTitle>
          {el.question}
          <span>Hover this</span>
        </ItemTitle>
        <SubWrap className={isShowAnswer ? 'show' : ''}>
          {isShowAnswer && (
            <Scrollbars
              autoHeight
              autoHeightMin={'100px'}
              renderThumbVertical={renderThumb}
            >
              <WrapForScroll>
                <Text className="answer">{el.answer}</Text>
                <Text>{el.description}</Text>
              </WrapForScroll>
            </Scrollbars>
          )}
        </SubWrap>
      </Wrap>
    </ListItem>
  );
};

export default Card;
