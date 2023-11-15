import axios from 'axios';
import { baseURL } from './path';

function httpClientBuilder() {
  const client = axios.create({ baseURL })

  return client;
}

const http = httpClientBuilder()

export { http };
