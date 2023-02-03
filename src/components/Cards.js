import Card from './Card';

const Cards = ({ items }) => {
  return items.map((item, index) => {
    return <Card key={index} item={item} index={index} />;
  });
};

export default Cards;
