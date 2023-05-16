function walkTime(steps, footM, kmH) {
  let mToUni = steps * footM;
  let mInMin = (kmH * 1000.0) / 60.0;
  let breaks = Math.floor(mToUni / 500);
  let minsToUni = mToUni / mInMin + breaks;

  const hours = Math.floor(minsToUni / 60);
  const mins = Math.floor(minsToUni);
  const seconds = Math.round((minsToUni - mins) * 60);

  console.log(
    `${String(hours).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`
  );
}

walkTime(2564, 0.7, 5.5);
