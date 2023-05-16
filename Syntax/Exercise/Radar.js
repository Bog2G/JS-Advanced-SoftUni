function limit(speed, area) {
  const limits = { motorway: 130, interstate: 90, city: 50, residential: 20 };

  if (area in limits) {
    if (limits[area] >= speed) {
      console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
      return;
    } else {
      let type;
      if (speed - limits[area] <= 20) {
        type = "speeding";
      } else if (speed - limits[area] <= 40) {
        type = "excessive speeding";
      } else {
        type = "reckless driving";
      }
      console.log(
        `The speed is ${
          speed - limits[area]
        } km/h faster than the allowed speed of ${limits[area]} - ${type}`
      );
    }
  }
}

limit(120, "interstate");
