import React from "react";

type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  //8 - Enum
  category: Category
};

export enum Category {
  JS = 'JAVASCRIPT',
  TS = 'TYPESCRIPT',
  P = 'PYThon'
}

const Destructuring = ({ title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      {tags.map((tag) => (
        <span>#{tag}</span>
      ))}
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Destructuring;
