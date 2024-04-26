export function callPeriodically(
  func: Function,
  interval: number,
  times: number
) {
  let count = 0;
  const id = setInterval(() => {
    func();
    count++;
    if (count >= times) {
      clearInterval(id);
    }
  }, interval);
}
