const storage = window.localStorage;
export const getItem = (key: string) => {
  const item = storage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItem = <T>(key: string, value: T) => {
  storage.setItem(key, JSON.stringify(value));
};
