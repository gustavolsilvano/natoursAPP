import * as ImagePicker from 'expo-image-picker';

// Image picker
export default async () => {
  const permission = await ImagePicker.requestCameraRollPermissionsAsync();
  if (permission.granted === 'false') return 'denied';
  const result = ImagePicker.launchImageLibraryAsync({ allowsEditing: true });
  return result;
};
