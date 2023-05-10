import React, {FC, useRef} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapboxGL, {ShapeSource} from '@rnmapbox/maps';
import {styles} from './styles';

type Props = {
  coordinates: [number, number][];
  onUserLocationUpdate: (location: any) => void;
};

const MapView: FC<Props> = ({coordinates, onUserLocationUpdate}) => {
  const shapeSource = useRef(new ShapeSource());
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
            zoomLevel={6}
            animationDuration={0}
          />
          <MapboxGL.UserLocation onUpdate={onUserLocationUpdate} />

          <MapboxGL.ShapeSource
            ref={shapeSource}
            shape={geoJSON}
            id="symbolLocationSource"
            clusterRadius={50}
            clusterMaxZoom={14}
            cluster>
            <MapboxGL.SymbolLayer
              minZoomLevel={0}
              id="pointCount"
              style={mapStyles.clusterCount}
            />
            <MapboxGL.CircleLayer
              id="clusteredPoints"
              minZoomLevel={0}
              belowLayerID="pointCount"
              style={mapStyles.clusteredPoints}
            />
            <MapboxGL.SymbolLayer
              id="symbolLocationSymbols"
              minZoomLevel={0}
              filter={['!', ['has', 'point_count']]}
              style={mapStyles.icon}
            />
          </MapboxGL.ShapeSource>

          {coordinates.map((coordinate, index) => (
            <MapboxGL.PointAnnotation
              key={index}
              coordinate={coordinate}
              minZoomLevel={15}
              id="pointAnnotation">
              <LinearGradient
                colors={['#879CBE', '#46505C']}
                style={styles.pointAnnotation}
              />
            </MapboxGL.PointAnnotation>
          ))}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default MapView;

const mapStyles = {
  icon: {
    iconAllowOverlap: true,
    iconSize: 3,
  },
  clusteredPoints: {
    circleColor: '#004466',
    circleRadius: 15,
    circleOpacity: 0.84,
  },
  clusterCount: {
    textField: '{point_count}',
    textSize: 12,
    textColor: '#ffffff',
  },
};

const geoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.1, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.0, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.3, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.6, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.55, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.45, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.35, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.25, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.25, 37.5],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.5, 37.6],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.9, 37.8],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.25, 35.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.3, 35.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.25, 36.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-123.25, 39.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.25, 39.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.25, 40.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.25, 40.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.25, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-120.25, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-119.25, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-118.25, 37.4219983],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-119.66, 37.66],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.88, 37.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-110.88, 37.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-110.55, 37.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-110.22, 37.33],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-110.11, 33.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-55.55, 37.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-56.55, 38.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-57.55, 33.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-53.55, 35.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-34.34, 34.34],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-34.34, 35.35],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-36.36, 36.36],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [55.55, 37.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [54.54, 36.777],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [54.53, 35.36],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [55.33, 36.35],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [66.55, 66.578],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 1],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [1, 1],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5, 5],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6, 6],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7, 7],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6, 6.6],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5, 7],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4, 3],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4.5, 3.5],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.6, 5.6],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.5, 5.5],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.3, 6.2],
      },
      properties: {
        trackid: 'AA-1234',
        reported_dt: '12/31/2019 23:59:59',
      },
    },
  ],
};
