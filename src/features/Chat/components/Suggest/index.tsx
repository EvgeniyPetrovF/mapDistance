import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useDebounce from '../../../../common/hooks/useDebounce';
import TextInputWrapper from '../../../../components/TextInputWrapper';
import TextWrapper from '../../../../components/TextWrapper';
import {Suggestion} from '../../../../models/types';
import MapBoxAPI from '../../../../services/API/Chat';

export default function SuggestInput() {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const requestAddress = async (text: string) => {
    if (text) {
      const response = await MapBoxAPI.getStreetName(text);
      setSuggestions(response);
    }
  };

  const debouncedOnAddressChange = useDebounce(requestAddress, 500);

  const onAddressChange = async (text: string) => {
    setAddress(text);
    if (!text) {
      setSuggestions([]);
    }
    await debouncedOnAddressChange(text);
  };

  const renderSuggestion: ListRenderItem<Suggestion> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setAddress(item.context[0].name);
          setSuggestions([]);
        }}>
        <Text>{item.context[0].name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <TextWrapper>Address</TextWrapper>
      <TextInputWrapper
        placeholder="Start typing your address, e.g. 123 Main..."
        autoComplete="street-address"
        value={address}
        onChangeText={onAddressChange}
      />

      <FlatList
        data={suggestions}
        renderItem={renderSuggestion}
        contentContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 10,
          position: 'absolute',
          top: 0,
          left: 0,
          elevation: 5,
          zIndex: 1000,
          width: '100%',
        }}
      />
    </View>
  );
}
