import axios from 'axios';
import { baseURLTransaction } from '../constant/constant';

export default axios.create({
  baseURL: baseURLTransaction
});
