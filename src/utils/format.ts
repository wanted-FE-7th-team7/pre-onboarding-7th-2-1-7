export const formatStartDate = (startDate: Date) => {
  const DAY = ['일', '월', '화', '수', '목', '금', '토'];
  const month = startDate.getMonth() + 1;
  const date = startDate.getDate();
  const day = startDate.getDay();
  return `${month}월 ${date}일 (${DAY[day]}) 부터`;
};
