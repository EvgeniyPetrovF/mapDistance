import React, {FC, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ListRenderItem,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import FastImage from 'react-native-fast-image';
import MapViewCustom from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import Animated from 'react-native-reanimated';
import {WebView} from 'react-native-webview';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  formatDuration,
  intervalToDuration,
  secondsToHours,
  secondsToMinutes,
} from 'date-fns';
import DatePicker from '../../../../components/DatePicker';
import Loader from '../../../../components/Loader';
import RangeSlider from '../../../../components/RangeSlider';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import MapView from '../../components/MapView';
import SuggestInput from '../../components/Suggest';
import useAnimatedList from '../../hooks/useAnimatedList';
import useMapboxInit from '../../hooks/useMapboxInit';
import useMapLocation from '../../hooks/useMapLocation';
import {styles} from './styles';
type Props = NativeStackScreenProps<StackParamList, 'Home'>;

// const pointCoordinates: [number, number][] = [
//   [-122.0, 37.4219983],
//   [-122.3, 37.4219983],
//   [-122.1, 37.4219983],
//   [-122.2, 37.4219983],
// ];

// const carImage = require('../../../../assets/images/car.png');

// const booksSeeds = [
//   {id: 0, title: 'Book0', author: 'Apold', bookingTime: null},
//   {
//     id: 1,
//     title: 'Book1',
//     author: 'Qwe',
//     bookingTime: '2023-05-03T14:04:49.855Z',
//   },
//   {
//     id: 2,
//     title: 'Book2',
//     author: 'Rty',
//     bookingTime: '2023-05-03T15:21:49.855Z',
//   },
//   {
//     id: 3,
//     title: 'Book3',
//     author: 'Yui',
//     bookingTime: '2023-05-03T15:23:49.855Z',
//   },
//   {
//     id: 4,
//     title: 'Book4',
//     author: 'Asd',
//     bookingTime: '2023-05-03T15:44:49.855Z',
//   },
//   {id: 5, title: 'Book5', author: 'Zxc', bookingTime: null},
//   {
//     id: 6,
//     title: 'Book6',
//     author: 'Vbn',
//     bookingTime: '2023-05-03T15:15:49.855Z',
//   },
//   {id: 7, title: 'Book7', author: 'Ghj', bookingTime: null},
//   {id: 8, title: 'Book8', author: 'Jkl', bookingTime: null},
// ];

const youtubeVideos = [
  {videoId: 'yEPukn2rS28'},
  {videoId: 'COudsR6ybqw'},
  {videoId: 'l6WDSN-_HSI'},
  {videoId: 'VBpmbqTi86Y'},
  {videoId: 'c3JGBdxfYcU'},
  {videoId: 'X85soC5evw0'},
  {videoId: '-6DWwR_R4Xk'},
  {videoId: 'MzO-0IYkZMU'},
  {videoId: 'fN25fMQZ2v0'},
  {videoId: 'yEPukn2rS28'},
];

const Item = ({
  videoSource,
  imageSource,
}: {
  videoSource: string;
  imageSource: string;
}) => {
  const [isPlayed, setIsPlayed] = useState(false);

  return (
    <View style={styles.bookWrapper}>
      {isPlayed ? (
        <WebView source={{uri: videoSource}} startInLoadingState />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setIsPlayed(true);
          }}>
          <FastImage source={{uri: imageSource}} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const HomeScreen: FC<Props> = ({navigation}) => {
  const {isLoading} = useMapboxInit();
  // const {onUserLocationUpdate} = useMapLocation(pointCoordinates[0]);
  const {animatedOpacityStyle} = useAnimatedList({isLoading});
  // const [books, setBooks] = useState(booksSeeds);

  // const renderItem: ListRenderItem<(typeof books)[0]> = ({item}) => {
  //   const {bookingTime, title, author} = item;

  //   const time = bookingTime
  //     ? Math.trunc(
  //         (new Date(bookingTime).getTime() - new Date().getTime()) / 1000,
  //       )
  //     : 0;

  //   const bookItem = updatedBookingTime => {
  //     setBooks(prev => {
  //       return prev.map(book =>
  //         book.id === item.id
  //           ? {...book, bookingTime: updatedBookingTime}
  //           : book,
  //       );
  //     });
  //   };

  //   const deleteTimer = () => {
  //     bookItem(null);
  //   };

  //   const navigateToDetails = () => {
  //     if (bookingTime) {
  //       deleteTimer();
  //       return;
  //     }
  //     navigation.navigate('Details', {
  //       ...item,
  //       bookItem,
  //     });
  //   };

  //   return (
  //     <TouchableOpacity
  //       style={styles.bookContainer}
  //       onPress={navigateToDetails}>
  //       <View style={styles.bookWrapper}>
  //         <TextWrapper>Title: {title}</TextWrapper>
  //         <TextWrapper>Author: {author}</TextWrapper>
  //         {!!bookingTime && (
  //           <CountdownCircleTimer
  //             isPlaying
  //             size={100}
  //             duration={time}
  //             onComplete={deleteTimer}
  //             colors={['#004777', '#F7B801', '#A30000', '#A30000']}
  //             colorsTime={[7, 5, 2, 0]}>
  //             {() => {
  //               const timeDuration = intervalToDuration({
  //                 start: new Date(bookingTime),
  //                 end: new Date(),
  //               });
  //               const {hours, minutes, seconds} = timeDuration;

  //               const time = hours
  //                 ? `${hours}h, ${minutes}m`
  //                 : `${minutes}m, ${seconds}s`;

  //               return <TextWrapper>{time}</TextWrapper>;
  //             }}
  //           </CountdownCircleTimer>
  //         )}
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  const renderItem: ListRenderItem<(typeof youtubeVideos)[0]> = ({item}) => {
    const videoSource = `https://www.youtube.com/embed/${item.videoId}?rel=0&autoplay=0&showinfo=0&controls=1`;
    const photoSource = `https://img.youtube.com/vi/${item.videoId}/0.jpg`;

    return <Item videoSource={videoSource} imageSource={photoSource} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.View style={[animatedOpacityStyle, styles.listContainer]}>
          {/* <MapView
            coordinates={pointCoordinates}
            onUserLocationUpdate={onUserLocationUpdate}
          /> */}
          <RangeSlider />
          <FlatList
            data={youtubeVideos}
            renderItem={renderItem}
            contentContainerStyle={styles.servicesContainer}
          />
          {/*
          <FlatList
            data={books}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={styles.servicesContainer}
            columnWrapperStyle={styles.columnWrapper}
          /> */}
          {/* <ImageBackground alt="" source={carImage} style={styles.carImage}>
            <View style={[styles.checkbox, {left: '46%', top: '10%'}]} />
            <View style={[styles.checkbox, {left: '1%', top: '20%'}]} />
            <View style={[styles.checkbox, {right: '1%', top: '20%'}]} />
            <View style={[styles.checkbox, {right: '3%', top: '38%'}]} />
            <View style={[styles.checkbox, {left: '4%', top: '38%'}]} />
            <View style={[styles.checkbox, {left: '46%', top: '40%'}]} />
            <View style={[styles.checkbox, {right: '3%', top: '65%'}]} />
            <View style={[styles.checkbox, {left: '4%', top: '65%'}]} />
            <View style={[styles.checkbox, {left: '46%', top: '65%'}]} />
          </ImageBackground> */}
          {/* <MapViewCustom
            style={{width: '100%', height: 500}}
            region={{
              latitude: 0,
              longitude: 0,
              latitudeDelta: 0,
              longitudeDelta: 0,
            }}
          /> */}
          {/* <SuggestInput /> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <TextWrapper>To another screen</TextWrapper>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
