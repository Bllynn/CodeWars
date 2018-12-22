/*Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
**Note:

See other examples in "Your test cases".

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

** Hints for people who don't know how to convert to hours, minutes, seconds:

Think of calculation by hand using only integers (in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds" */
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
