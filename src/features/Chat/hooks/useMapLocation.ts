import {useEffect, useState} from 'react';
import {getPreciseDistance} from 'geolib';
import {
  GeolibAltitudeInputValue,
  GeolibLongitudeInputValue,
} from 'geolib/es/types';

const useMapLocation = (coordinates: [number, number]) => {
  const [latitude, setLatitude] = useState<GeolibAltitudeInputValue>();
  const [longitude, setLongitude] = useState<GeolibLongitudeInputValue>();

  const onUserLocationUpdate = async location => {
    const {latitude, longitude} = location.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  useEffect(() => {
    if (!latitude || !longitude) {
      return;
    }
    const [pointLatitude, pointLongitude] = coordinates;

    const distance = getPreciseDistance(
      {latitude, longitude},
      {latitude: pointLongitude, longitude: pointLatitude},
    );

    console.log(distance);
    if (distance > 100) {
      // do smth
    }
  }, [coordinates, latitude, longitude]);

  return {onUserLocationUpdate};
};

export default useMapLocation;
