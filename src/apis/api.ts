import axios from 'axios';

const instance = (baseURL: string) =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export { instance };
