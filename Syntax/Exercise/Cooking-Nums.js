function stuff(...args) {
  let number = Number(args[0]);
  const functions = {
    chop: function (num) {
      return num / 2;
    },
    dice: function (num) {
      return Math.sqrt(num);
    },
    spice: function (num) {
      return num + 1;
    },
    bake: function (num) {
      return num * 3;
    },
    fillet: function (num) {
      return num - num * 0.2;
    },
  };

  for (let i = 1; i < args.length; i++) {
    number = functions[args[i]](number);
    console.log(number);
  }
}

stuff("32", "chop", "chop", "chop", "chop", "chop");
