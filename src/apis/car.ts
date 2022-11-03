import axios from 'axios';

const GET_URL = 'https://preonboarding.platdev.net/api/cars';

export default function getCars(setCars: any) {
  axios.get(GET_URL, {}).then(res => {
    setCars(res.data.payload);
  });
}
