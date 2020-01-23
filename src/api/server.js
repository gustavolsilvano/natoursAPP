import axios from 'axios';
import { baseURL } from '../constant/constant';

export default axios.create({
  timeout: 3000,
  baseURL
});
