import { connect } from 'react-redux';
import MarkerList from '../components/MarkerList';
import getVisibleMountains from '../helpers/getVisibleMountains';

import mountains from '../data/mountains';

const mapStateToProps = (state) => {
  return {
    mountains: getVisibleMountains(
      mountains,
      state.search.query,
      state.search.filters
    )
  }
}

const VisibleMarkers = connect(
  mapStateToProps
)(MarkerList);

export default VisibleMarkers;