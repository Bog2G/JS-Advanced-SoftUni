function Worker(obj) {
  obj.dizziness
    ? ((obj.levelOfHydrated = 0.1 * obj.weight * obj.experience),
      (obj.dizziness = false))
    : null;

  return obj;
}

console.log(
  Worker({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })
);
