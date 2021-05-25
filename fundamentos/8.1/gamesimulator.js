const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const dragonMinDmg = 15;

const dragonDmg = (dragon) => getRandomInt(dragonMinDmg, dragon.strength);

const warriorDmg = (warrior) => getRandomInt(warrior.strength, warrior.strength * warrior.weaponDmg);

const mageAction = (mage) => {
  const { mana, intelligence } = mage;
  const hasMana = mana >= 15;
  return {
    dmgDelt: hasMana ? getRandomInt(intelligence, intelligence * 2) : 'Não possui mana suficiente!',
    manaSpent: hasMana ? 15 : 0,
  }
};

const gameActions = {
  warriorTurn: (warrior, target, getDmg) => {
    const warriorDmg = getDmg(warrior);
    warrior.damage = warriorDmg;
    target.healthPoints -= warriorDmg;
  },
  mageTurn: (mage, target, getDmg) => {
    const { dmgDelt, manaSpent } = getDmg(mage);
    mage.damage = dmgDelt;
    mage.mana -= manaSpent;
    target.healthPoints -= typeof dmgDelt === 'number' ? dmgDelt : 0;
  },
  dragonTurn: (dragon, targets, getDmg) => {
    const dragonDmg = getDmg(dragon);
    dragon.damage = dragonDmg;
    targets.forEach((target) => target.healthPoints -= dragonDmg);
  },
  updateBattleMembers: () => {
    console.log(battleMembers);
    return battleMembers;
  },
};

let hasEnded = false;
let turnCounter = 0;

while (!hasEnded) {
  turnCounter += 1;
  if (battleMembers.warrior.healthPoints > 0)
    gameActions.warriorTurn(battleMembers.warrior, battleMembers.dragon, warriorDmg);

  if (battleMembers.mage.healthPoints > 0)
    gameActions.mageTurn(battleMembers.mage, battleMembers.dragon, mageAction);

  if (battleMembers.dragon.healthPoints > 0)
    gameActions.dragonTurn(battleMembers.dragon, [battleMembers.warrior, battleMembers.mage], dragonDmg);

  console.log(`Turn (${turnCounter}) result:`);
  gameActions.updateBattleMembers();

  if (battleMembers.warrior.healthPoints <= 0 && battleMembers.mage.healthPoints <= 0) {
    console.log('Defeat! Dragon wins!');
    hasEnded = true;
  }

  if (battleMembers.dragon.healthPoints <= 0) {
    console.log('Victory! The dragon has been slain!');
    hasEnded = true;
  }
}