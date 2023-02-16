import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _increase = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;

    Dwarf.instanceOf();
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