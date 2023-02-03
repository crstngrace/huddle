import { StyledCard } from './styles/Card.styled';

const Card = ({ item: { title, description, img }, index }) => {
  return (
    <StyledCard direction={index % 2 != 0 ? 'reverse' : ''}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div>
        <img src={`./assets/images/${img}`} alt={title} />
      </div>
    </StyledCard>
  );
};

export default Card;
