// @flow

export type Damage = number;
export type Force = number;
export type ForceRatio = number;
export type Initiative = number;
export type MomentNumber = number;
export type PositionType = 'forward' | 'middle' | 'back';
export type ReactionPower = number;

type Battler = {
  calculateDamage: () => Damage,
  calculateForce: () => Force,
  calculateInitiative: () => Initiative,
  calculateReactionPower: () => ReactionPower,
  hitPoints: number,
  name: string,
  uid: string,
};

type ForceResult = {
  battlerUid: $PropertyType<Battler, 'uid'>,
  force: Force,
  momentNumber: MomentNumber,
};

type Party = {
  battlers: Battler[],
  formation: {[PositionType]: $PropertyType<Battler, 'uid'>[]},
};

type Battle = {
  forceResults: ForceResult[],
  momentNumber: MomentNumber,
  parties: [Party, Party],
};
