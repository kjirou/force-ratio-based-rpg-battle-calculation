// @flow

type Damage = number;
type Force = number;
type ForceRatio = number;
type Initiative = number;
type MomentNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type PositionType = 'forward' | 'middle' | 'back';
type ReactionPower = number;
type RoundNumber = number;

type Battler = {
  calculateDamage: () => Damage,
  calculateForce: () => Force,
  calculateInitiative: () => Initiative,
  calculateReactionPower: () => ReactionPower,
  name: string,
  uid: string,
};

type Party = {
  battlers: Battler[],
  formation: {[PositionType]: $PropertyType<Battler, 'uid'>[]},
};
