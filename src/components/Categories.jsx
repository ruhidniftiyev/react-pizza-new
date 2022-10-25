import React, { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoriesArr = ['Все', 'Мясные', 'Вегетeрианские', 'Гриль', 'Острые', 'Закрытые'];

  const selectCategory = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((value, index) => (
          <li
            onClick={() => selectCategory(index)}
            className={activeIndex === index ? 'active' : ''} key={index}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
