import { Dimensions } from 'react-native';

const windowDimension = prop => {
  const { width, height } = Dimensions.get('window');

  switch (prop) {
    case 'width':
      return width;

    case 'height':
      return height;

    default:
      break;
  }
};

const loginPicture = require('../../assets/loginPicture.jpg');

const width = windowDimension('width');
const height = windowDimension('height');

const logo = require('../../assets/icon_natour.png');
const logoStye = { width: 80, height: 80 };

const delay = 3 * 60 * 1000;

const borderRadiusConf = 20;

const backgroundColor = '#fff';
const backgroundColor_2 = '#F7F7F7';

const cardColorConf = '#f4511e';

const firstColor = '#55C57A';
const firstColor_minor = '#d2f5ea';

const strongColor = 'rgb(119,204,113)';

const textColor = 'black';
const textColor_2 = 'white';

const cardTextColor = '#B4B4B4';
const cardTextColor_2 = '#969696';

// const profilePlaceHolder = require('../../resource/profilePlaceholder.jpg');
const baseURL = 'https://natours-mab.herokuapp.com';
const imageTourURL = `${baseURL}/img/tours`;
const imageUserURL = `${baseURL}/img/users`;

export {
  delay,
  borderRadiusConf,
  width,
  height,
  backgroundColor,
  backgroundColor_2,
  cardColorConf,
  logo,
  logoStye,
  textColor,
  textColor_2,
  //   profilePlaceHolder,
  imageTourURL,
  imageUserURL,
  loginPicture,
  firstColor,
  firstColor_minor,
  baseURL,
  cardTextColor,
  cardTextColor_2,
  strongColor
};
