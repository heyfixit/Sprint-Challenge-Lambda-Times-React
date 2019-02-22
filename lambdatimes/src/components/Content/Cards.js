import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = ({ cards }) => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
      {cards.map(c => (
        <Card card={c} key={c.headline} />
      ))}
    </CardsContainer>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;
