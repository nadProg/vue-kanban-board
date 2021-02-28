export default () => {
  const date = Date.now();
  return date.toString(32) + Math.random().toString(32).slice(2, 4);
};