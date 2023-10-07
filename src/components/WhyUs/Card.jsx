import React, { useEffect, useRef, useState } from 'react';
import { ListItem, Wrap, ItemTitle, Description, Button } from './Card.styled';

const Card = ({ el }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <ListItem
      ref={cardRef}
      className={
        isVisible ? 'animate__animated animate__fadeInLeft visible' : ''
      }
    >
      <Wrap>
        <ItemTitle>{el.title}</ItemTitle>
        <Description>{el.description}</Description>
      </Wrap>
      <Button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Order now</span>
      </Button>
    </ListItem>
  );
};

export default Card;
