import React from 'react';
import Card from './Card';

const CardList = ({mountains}) => (
  <div id="search-results" className="flex three">
    {mountains.map((row, key) =>
    	<Card data={row} key={key} />
    )}
  </div>
)

export default CardList;