export const debounce = (fn: Function, ms: number) => {
  let timer: NodeJS.Timer;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer)
      fn(...args);
    }, ms);
  };
}