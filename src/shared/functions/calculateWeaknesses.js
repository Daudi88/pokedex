const calculateWeaknesses = (damageRelations, types) => {
  const weaknesses = new Set();

  const doubleDamageFrom = [];
  const doubleDamageTo = [];
  const halfDamageFrom = [];
  const halfDamageTo = [];
  const noDamageFrom = [];
  const noDamageTo = [];

  //   for (let i = 0; i < damageRelations.length; i++) {
  //     doubleDamageFrom.push(...damageRelations[i].double_damage_from);
  //   }

  damageRelations.forEach((relations) => {
    doubleDamageFrom.push(...relations.double_damage_from);
  });

  //   console.log(damageRelations);
  console.log(doubleDamageFrom);
  return ["fire", "psychic", "flying", "ice"];
};

export default calculateWeaknesses;
