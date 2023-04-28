import {MAPBOX_DOWNLOADS_TOKEN} from 'react-native-dotenv';
import axios from 'axios';
import {MapboxResponse} from '../../../models/types';

class MapBoxAPI {
  static getStreetName = async (
    searchText: string,
    sessionToken = '1234567',
    language = 'ja',
  ) => {
    const response = await axios.get<MapboxResponse>(
      `https://api.mapbox.com/search/v1/suggest/${searchText}?access_token=${MAPBOX_DOWNLOADS_TOKEN}&language=${language}&session_token=${sessionToken}`,
    );

    return response.data.suggestions;
  };
}

export default MapBoxAPI;
