export default (imageToUpload, appends) => {
  if (imageToUpload && imageToUpload.type === null) {
    imageToUpload.type = `image/${imageToUpload.fileName.split('.')[1]}`;
  }
  const data = new FormData();
  if (appends) {
    for (let prop in appends) {
      data.append(prop, appends[prop]);
    }
  }
  if (imageToUpload) {
    data.append('photo', {
      uri: imageToUpload.uri,
      type: 'image/jpeg',
      name: 'teste'
    });
  }
  return data;
};
