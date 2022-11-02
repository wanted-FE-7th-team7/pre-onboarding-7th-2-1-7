export const formatToWon = (number: number) => {
  return number.toLocaleString('ko-KR');
};

export const formatWonPerMonth = (number: number) => {
  return `월 ${formatToWon(number)} 원`;
};

export const formatStartDate = (startDate: Date) => {
  const DAY = ['일', '월', '화', '수', '목', '금', '토'];
  const month = startDate.getMonth() + 1;
  const date = startDate.getDate();
  const day = startDate.getDay();
  return `${month}월 ${date}일 (${DAY[day]}) 부터`;
};
