import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _increase = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;

    Elf.instanceOf();
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