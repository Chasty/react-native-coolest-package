import { NativeModules } from 'react-native';

type ImageCoolPickerType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ImageCoolPicker } = NativeModules;

export default ImageCoolPicker as ImageCoolPickerType;
