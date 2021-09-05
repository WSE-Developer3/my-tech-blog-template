export const dateFormat = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
};
