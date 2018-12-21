function race(v1, v2, g) {
  console.log(v1, v2, g);
  const v1FPM = Number(v1) / 60;

  const v1FPS = Number(v1FPM) / 60;

  const v2FPM = Number(v2 / 60);

  const v2FPS = Number(v2FPM) / 60;

  console.log(v1FPS);
  console.log(v2FPS);
  let v1DT = Number(g);

  let v2DT = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  if (v1 >= v2) {
    return null;
  } else {
    do {
      v1DT += v1FPS;
      v2DT += v2FPS;
      seconds++;
      if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
          hours++;
          minutes = 0;
          seconds = 0;
        }
      }
    } while (v2DT < v1DT);
    if (v1 > 50 && seconds != 0) {
      return [hours, minutes, seconds - 1];
    } else return [hours, minutes, seconds];
  }
}
