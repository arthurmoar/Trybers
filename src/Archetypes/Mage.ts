import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energy: EnergyType;
  private static _instance = 0;

  constructor(name: string) {
    super(name);

    this._energy = 'mana';

    Mage.instanceOf();
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static instanceOf(): void {
    this._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }
}