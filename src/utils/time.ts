export const Time = {
  days: ['일', '월', '화', '수', '목', '금', '토'],
  getMonth(startDate: string) {
    return startDate.slice(5, 7);
  },
  getDate(startDate: string) {
    return startDate.slice(8, 10);
  },
  getDay(startDate: string) {
    return this.days[new Date(startDate).getDay()];
  },
  parseStartDate(startDate: string) {
    const month = this.getMonth(startDate);
    const date = this.getDate(startDate);
    const day = this.getDay(startDate);

    return `${month}월 ${date}일 (${day}) 부터`;
  },
};
