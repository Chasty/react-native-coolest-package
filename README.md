# React Native Cool Image Picker

A React Native module that allows you to select a photo/video from your camera based on react-native-image-picker.
from https://github.com/react-native-image-picker/react-native-image-picker

This project aims to learn how to create native modules and upload to npmjs

- No permission required for default `options` on Android.
- Removed and updated some values in `options`, so please check them carefully.

# Install

```
yarn add react-native-image-cool-picker

# RN >= 0.60
cd ios && pod install

# RN < 0.60
react-native link react-native-image-cool-picker
```

## Post-install Steps

### iOS

Add the appropriate keys to your Info.plist,

```
<key>NSPhotoLibraryUsageDescription</key>
<string>This app requires access to the photo library.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app does not require access to the microphone.</string>
<key>NSCameraUsageDescription</key>
<string>This app requires access to the camera.</string>
```

### Android

No permissions required (`saveToPhotos` requires permission [check](#note-on-file-storage)).

Note: This library does not require Manifest.permission.CAMERA, if your app declares as using this permission in manifest then you have to obtain the permission before using `launchCamera`.

# API Reference

## Methods

```js
import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-cool-picker';
```

### `launchCamera()`

Launch camera to take photo or video.

```js
launchCamera(options?, callback);
```

See [Options](#options) for further information on `options`.

The `callback` will be called with a response object, refer to [The Response Object](#the-response-object).

### `launchImageLibrary`

Launch gallery to pick image or video.

```js
launchImageLibrary(options?, callback)
```

See [Options](#options) for further information on `options`.

The `callback` will be called with a response object, refer to [The Response Object](#the-response-object).

## Options

| Option        | iOS | Android | Description                                                                                           |
| ------------- | --- | ------- | ----------------------------------------------------------------------------------------------------- |
| mediaType     | OK  | OK      | 'photo' or 'video' or 'mixed'(mixed supported only for launchImageLibrary, to pick an photo or video) |
| maxWidth      | OK  | OK      | To resize the image                                                                                   |
| maxHeight     | OK  | OK      | To resize the image                                                                                   |
| videoQuality  | OK  | OK      | 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android                                         |
| durationLimit | OK  | OK      | Video max duration in seconds                                                                         |
| quality       | OK  | OK      | 0 to 1, photos                                                                                        |
| cameraType    | OK  | OK      | 'back' or 'front'. May not be supported in few android devices                                        |
| includeBase64 | OK  | OK      | If true, creates base64 string of the image (Avoid using on large image files due to performance)     |
| saveToPhotos  | OK  | OK      | (Boolean) Only for launchCamera, saves the image/video file captured to public photo                  |

## The Response Object

| key          | iOS | Android | Description                                                                                                                                                                                                                                |
| ------------ | --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| didCancel    | OK  | OK      | `true` if the user cancelled the process                                                                                                                                                                                                   |
| errorCode    | OK  | OK      | Check [ErrorCode](#ErrorCode) for all error codes                                                                                                                                                                                          |
| errorMessage | OK  | OK      | Description of the error, use it for debug purpose only                                                                                                                                                                                    |
| base64       | OK  | OK      | The base64 string of the image (photos only)                                                                                                                                                                                               |
| uri          | OK  | OK      | The file uri in app specific cache storage. Except when picking **video from Android gallery** where you will get read only content uri, to get file uri in this case copy the file to app specific storage using any react-native library |
| width        | OK  | OK      | Image dimensions (photos only)                                                                                                                                                                                                             |
| height       | OK  | OK      | Image dimensions (photos only)                                                                                                                                                                                                             |
| fileSize     | OK  | OK      | The file size (photos only)                                                                                                                                                                                                                |
| type         | OK  | OK      | The file type (photos only)                                                                                                                                                                                                                |
| fileName     | OK  | OK      | The file name                                                                                                                                                                                                                              |
| duration     | OK  | OK      | The selected video duration in seconds                                                                                                                                                                                                     |

## Note on file storage

Image/video captured via camera will be stored in temporary folder so will be deleted any time, so don't expect it to persist. Use `saveToPhotos: true` (default is false) to save the file in the public photos. `saveToPhotos` requires WRITE_EXTERNAL_STORAGE permission on Android 28 and below (You have to obtain the permission, the library does not).

## ErrorCode

| Code               | Description                                       |
| ------------------ | ------------------------------------------------- |
| camera_unavailable | camera not available on device                    |
| permission         | Permission not satisfied                          |
| others             | other errors (check errorMessage for description) |

## License

[MIT](LICENSE.md)
