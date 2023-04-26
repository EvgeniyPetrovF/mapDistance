import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {MAPBOX_DOWNLOADS_TOKEN} from 'react-native-dotenv';
import MapboxGL from '@rnmapbox/maps';
import {getAndroidPermissions} from '../../../utils';

const useMapboxInit = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        await getAndroidPermissions([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);

        await MapboxGL.setAccessToken(MAPBOX_DOWNLOADS_TOKEN);
      } catch (e) {
        console.log((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {isLoading};
};

export default useMapboxInit;
