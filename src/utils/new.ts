export const isNewCar = (createdDate: Date) => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() - 1)) < createdDate;
};
