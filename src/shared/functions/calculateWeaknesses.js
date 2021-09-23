const calculateWeaknesses = (damageRelations) => {
  let weaknesses = [];
  const doubleDamageFrom = [];
  const halfDamageFrom = [];
  const noDamageFrom = [];

  damageRelations.forEach((relations) => {
    doubleDamageFrom.push(...relations.double_damage_from);
    halfDamageFrom.push(...relations.half_damage_from);
    noDamageFrom.push(...relations.no_damage_from);
  });

  doubleDamageFrom.forEach((type) => {
    if (!weaknesses.includes(type.name)) {
      weaknesses.push(type.name);
    }
  });

  halfDamageFrom.forEach((type) => {
    weaknesses = weaknesses.filter((weakness) => weakness !== type.name);
  });

  noDamageFrom.forEach((type) => {
    weaknesses = weaknesses.filter((weakness) => weakness !== type.name);
  });

  return weaknesses;
};

export default calculateWeaknesses;
