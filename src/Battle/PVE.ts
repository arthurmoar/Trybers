import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type Challenge = (Fighter | SimpleFighter)[];

export default class PVE extends Battle {
  constructor(protected player: Fighter, protected enemies: Challenge) {
    super(player);
  }

  fight(): number {
    const standingEnemies = this.enemies;
    if (standingEnemies.length > 0 && this.player.lifePoints !== -1) {
      this.player.attack(standingEnemies[0]);
      if (standingEnemies[0].lifePoints < 0) {
        standingEnemies.shift();
      }

      standingEnemies.forEach((enemie) => enemie.attack(this.player));
    }

    return super.fight();
  }
}