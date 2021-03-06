import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Button } from './Button';

import * as ImagePicker from '../../src';
import type { ImagePickerResponse } from '../../src';

export default function App() {
  const [responseInfo, setResponse] =
    React.useState<ImagePickerResponse | null>(null);

  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="Take image"
          onPress={() =>
            ImagePicker.launchCamera(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              }
            )
          }
        />

        <Button
          title="Select image"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              }
            )
          }
        />

        <Button
          title="Take video"
          onPress={() =>
            ImagePicker.launchCamera({ mediaType: 'video' }, (response) => {
              setResponse(response);
            })
          }
        />

        <Button
          title="Select video"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              { mediaType: 'video' },
              (response) => {
                setResponse(response);
              }
            )
          }
        />

        <Button
          title="Select image or video (mixed)"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'mixed',
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              }
            )
          }
        />

        <View style={styles.response}>
          <Text>Res: {JSON.stringify(responseInfo)}</Text>
        </View>

        {responseInfo && (
          <View style={styles.image}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: responseInfo.uri }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
