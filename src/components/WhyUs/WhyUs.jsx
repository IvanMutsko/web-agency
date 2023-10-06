import React from 'react';

import data from '../../assets/data/whyus.json';

const WhyUs = () => {
  return (
    <section>
      <h2>Why Us</h2>
      <ul>
        {data.map(el => (
          <li key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;

// 6 ячейок з текстом переваг та 1 анімованим елементом в кожній ячейці
// Кнопка: Замовити із анімованим елементом/анімацією
