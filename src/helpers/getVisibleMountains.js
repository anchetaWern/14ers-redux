const getVisibleMountains = (mountains, query, filters) => {

  let filtered_mountains = mountains.filter((mt) => {
    let name = mt.properties.name.toLowerCase();
    let range = mt.properties.range.toLowerCase();
    if(((query !== '' && name.indexOf(query) !== -1) || (range.indexOf(query) !== -1))
      && (filters.elevation_height >= mt.properties.elevation[0]
        && filters.elevation_distance >= mt.properties.elevation[1]
        && filters.prominence_height >= mt.properties.prominence[0]
        && filters.prominence_distance >= mt.properties.prominence[1]
        && filters.isolation_height >= mt.properties.isolation[0]
        && filters.isolation_distance >= mt.properties.isolation[1]
        )) {
      return mt;
    }
    return false;
  });

  return filtered_mountains;

}

export default getVisibleMountains;