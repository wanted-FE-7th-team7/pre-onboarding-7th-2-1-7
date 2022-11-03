export const isNewCarItem = (createAt: Date) => {
  const now = new Date();
  const createTime = new Date(createAt);
  const diff = now.getTime() - createTime.getTime();
  return Math.abs(diff) < 86400000 ? true : false;
};
