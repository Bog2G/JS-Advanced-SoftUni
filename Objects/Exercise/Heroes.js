function createHeroFactory() {
  return {
    fighter(name) {
      const state = {
        name: name,
        health: 100,
        stamina: 100,
      };

      return {
        ...state,
        fight() {
          if (state.stamina > 0) {
            state.stamina--;
            console.log(`${state.name} slashes at the foe!`);
          } else {
            console.log(`${state.name} is too exhausted to fight.`);
          }
        },
      };
    },

    mage(name) {
      const state = {
        name: name,
        health: 100,
        mana: 100,
      };

      return {
        ...state,
        cast(spell) {
          if (state.mana > 0) {
            state.mana--;
            console.log(`${state.name} casts ${spell}`);
          } else {
            console.log(`${state.name} is out of mana.`);
          }
        },
      };
    },
  };
}
