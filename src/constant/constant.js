import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { manifest } = Constants;

const localHostUri = `http://192.168.0.104:3000`;

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

// const env = 'dev';
const env = 'prod';

const loginPicture = require('../../assets/loginPicture.jpg');
const loadingPicture = require('../../assets/loadingScreen.jpeg');
const defaultUserPhotoURL = 'default.jpg';

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
const firstColor_major = '#349956';
const firstColorTransparent = '	rgba(85, 197, 122,.6)';

const blackColorTransparent = '	rgba(0, 0, 0,.6)';

const strongColor = '#77CC71';

const textColor = '#B4B4B4';
const textColor_2 = 'white';

const cardTextColor = '#B4B4B4';
const cardTextColor_2 = '#969696';

const warningColor = '#EA6172';

// const profilePlaceHolder = require('../../resource/profilePlaceholder.jpg');
const baseURL =
  env === 'dev' ? 'http://10.0.2.2:3000' : 'https://natours-mab.herokuapp.com';
const imageTourURL = `${baseURL}/img/tours`;
const imageUserURL = `${baseURL}/img/users`;
console.log(baseURL);

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
  blackColorTransparent,
  //   profilePlaceHolder,
  imageTourURL,
  imageUserURL,
  loginPicture,
  loadingPicture,
  firstColor,
  firstColor_minor,
  firstColor_major,
  firstColorTransparent,
  baseURL,
  cardTextColor,
  cardTextColor_2,
  strongColor,
  defaultUserPhotoURL,
  warningColor
};
