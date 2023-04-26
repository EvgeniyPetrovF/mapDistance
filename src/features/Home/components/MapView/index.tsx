import React, {FC} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapboxGL from '@rnmapbox/maps';
import {styles} from './styles';

type Props = {
  coordinates: [number, number];
  onUserLocationUpdate: (location: any) => void;
};

const MapView: FC<Props> = ({coordinates, onUserLocationUpdate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <MapboxGL.MapView
          logoEnabled={false}
          scaleBarEnabled={false}
          style={styles.map}
          styleURL={MapboxGL.StyleURL.TrafficNight}>
          <MapboxGL.Camera
            followUserLocation={true}
            zoomLevel={15}
            animationDuration={0}
          />
          <MapboxGL.UserLocation onUpdate={onUserLocationUpdate} />
          {!!coordinates && (
            <MapboxGL.PointAnnotation
              coordinate={coordinates}
              id="pointAnnotation">
              <LinearGradient
                colors={['#879CBE', '#46505C']}
                style={styles.pointAnnotation}
              />
            </MapboxGL.PointAnnotation>
          )}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default MapView;
