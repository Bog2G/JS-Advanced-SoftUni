function distance(...args) {
  for (let i = 0; i < 3; i += 2) {
    let distance = Math.sqrt(
      Math.pow(args[i] - 0, 2) + Math.pow(args[i + 1] - 0, 2)
    );

    if (Number.isInteger(distance)) {
      console.log(`{${args[i]}, ${args[i + 1]}} to {0, 0} is valid`);
    } else {
      console.log(`{${args[i]}, ${args[i + 1]}} to {0, 0} is invalid`);
    }
  }

  let distance = Math.sqrt(
    Math.pow(args[2] - args[0], 2) + Math.pow(args[3] - args[1], 2)
  );

  if (Number.isInteger(distance)) {
    console.log(
      `{${args[0]}, ${args[1]}} to {${args[2]}, ${args[3]}} is valid`
    );
  } else {
    console.log(
      `{${args[0]}, ${args[1]}} to {${args[2]}, ${args[3]}} is invalid`
    );
  }
}

distance(2, 1, 1, 1);
