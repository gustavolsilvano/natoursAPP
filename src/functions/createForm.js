export default (imageToUpload, name, email, user) => {
  if (imageToUpload && imageToUpload.type === null) {
    imageToUpload.type = `image/${imageToUpload.fileName.split('.')[1]}`;
  }
  const data = new FormData();
  if (user) data.append('userId', user._id);
  data.append('name', name);
  data.append('email', email);
  if (imageToUpload) {
    data.append('photo', {
      uri: imageToUpload.uri,
      type: 'image/jpeg',
      name: 'teste'
    });
  }
  return data;
};
