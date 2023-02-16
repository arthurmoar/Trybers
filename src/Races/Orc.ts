import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _increase = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;

    Orc.instanceOf();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static instanceOf(): void {
    this._increase += 1;
  }

  static createdRacesInstances(): number {
    return this._increase;
  }
}