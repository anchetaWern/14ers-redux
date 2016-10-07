import filters from '../data/filters';

export default function searchReducer (state = filters, action) {
	if (action.type === 'UPDATE_QUERY') {
		return {
			query: action.query,
			show_filters: action.show_filters,
			filters: action.filters
		};
	}
	return state;
}