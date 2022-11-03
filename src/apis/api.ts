import axios from 'axios';

export interface ListRequest {
  id: number;
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  imageUrl: string;
}

export const ListItemRequest = (setListData: any) => {
  axios.get(`https://preonboarding.platdev.net/api/cars`).then(res => {
    setListData(res.data.payload).catch((err: any) => {});
  });
};
