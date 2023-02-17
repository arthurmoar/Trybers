import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }

  fight(): number {
    if (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      const random = getRandomInt(1, 100);

      if (random % 2 === 0) {
        this._player2.receiveDamage(this._player1.strength * 2);
      } else {
        this._player1.receiveDamage(this._player2.strength * 2);
      }
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return super.fight();
  }
}