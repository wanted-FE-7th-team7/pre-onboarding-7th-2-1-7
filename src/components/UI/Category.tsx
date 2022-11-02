import React from 'react';
import Tag from './Tag';

interface Props {
  selectedCategory: React.Dispatch<string>;
}

function Category({ selectedCategory }: Props) {
  const CATEGORY_MENU = ['전체', '대형', '중형', '소형'];

  return (
    <div>
      {CATEGORY_MENU.map((e, i) => (
        <Tag tagName={e} onClick={() => selectedCategory(e)} key={i} />
      ))}
    </div>
  );
}

export default Category;
