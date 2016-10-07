export const updateSelection = (key, position, showInfoWindow) => {
  return {
    type: 'UPDATE_SELECTION',
    key,
    position,
    showInfoWindow
  }
}

export const updateQuery = (query, show_filters, filters) => {
  return {
    type: 'UPDATE_QUERY',
    query,
    show_filters,
    filters
  }
}