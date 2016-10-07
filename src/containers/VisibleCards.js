import { connect } from 'react-redux';
import CardList from '../components/CardList';

import getVisibleMountains from '../helpers/getVisibleMountains';
import mountains from '../data/mountains';

const mapStateToProps = (state) => {
  return {
    mountains: getVisibleMountains(
      mountains,
      state.searchReducer.query,
      state.searchReducer.filters
    )
  }
}

const VisibleCards = connect(
  mapStateToProps
)(CardList);

export default VisibleCards;