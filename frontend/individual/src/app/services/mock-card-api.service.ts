import { Injectable } from '@angular/core';
import { CardApiService } from './card-api.service';
import { Observable, of } from 'rxjs';
import { BattleOutcome, PlayerResult } from '../models/BattleOutcome';
import { CardOutcomes } from '../models/CardOutcomes';

@Injectable()
export class MockCardApiService implements CardApiService {
  getCards(): Observable<string[]> {
    return of([
      'Air',
      'Airplane',
      'Alien',
      'Axe',
      'Baby',
      'Beer',
      'Bicycle',
      'Bird',
      'Blood',
      'Book',
      'Bowl',
      'Brain',
      'Butter',
      'Cage',
      'Camera',
      'Car',
      'Castle',
      'Cat',
      'Chain',
      'Chainsaw',
      'Church',
      'Cloud',
      'Cockroach',
      'Community',
      'Computer',
      'Cross',
      'Cup',
      'Death',
      'Devil',
      'Diamond',
      'Dragon',
      'Duck',
      'Dynamite',
      'Electricity',
      'Fence',
      'Film',
      'Fire',
      'Fish',
      'Gold',
      'Grass',
      'Guitar',
      'Gun',
      'Heart',
      'Helicopter',
      'Home',
      'King',
      'Laser',
      'Law',
      'Lightning',
      'Man',
      'Math',
      'Medusa',
      'Money',
      'Monkey',
      'Moon',
      'Mountain',
      'Noise',
      'Nuke',
      'Paper',
      'Peace',
      'Pit',
      'Planet',
      'Platimum',
      'Poison',
      'Police',
      'Porcupine',
      'Power',
      'Prayer',
      'Prince',
      'Princess',
      'Queen',
      'Quicksand',
      'Rain',
      'Rainbow',
      'Robot',
      'Rock',
      'Satan',
      'School',
      'Scissors',
      'Sky',
      'Snake',
      'Spider',
      'Sponge',
      'Sun',
      'Sword',
      'T.V.',
      'Tank',
      'Toilet',
      'Tornado',
      'Train',
      'Tree',
      'Turnip',
      'U.F.O.',
      'Vampire',
      'Video Game',
      'Vulture',
      'Wall',
      'Water',
      'Whip',
      'Wolf',
      'Woman',
    ]);
  }

  getCardOutcomes(cardName: string): Observable<CardOutcomes> {
    return of({
      card: cardName,
      winningOutcomes: [
        { outcome: 'poisons', losingCard: 'Sky' },
        { outcome: 'incinerates', losingCard: 'Tank' },
        { outcome: 'incinerates', losingCard: 'Helicopter' },
        { outcome: 'outclasses', losingCard: 'Dynamite' },
        { outcome: 'outclasses', losingCard: 'Tornado' },
        { outcome: 'incinerates', losingCard: 'Quicksand' },
        { outcome: 'emerges from', losingCard: 'Pit' },
        { outcome: 'starts reaction', losingCard: 'Chain' },
        { outcome: 'outclasses', losingCard: 'Gun' },
        { outcome: 'breaks', losingCard: 'Law' },
        { outcome: 'incinerates', losingCard: 'Whip' },
        { outcome: 'incinerates', losingCard: 'Sword' },
        { outcome: 'incinerates', losingCard: 'Rock' },
        { outcome: 'causes', losingCard: 'Death' },
        { outcome: 'incinerates', losingCard: 'Wall' },
        { outcome: 'has power of', losingCard: 'Sun' },
      ],
    });
  }

  getBattleResult(card1: string, card2: string): Observable<BattleOutcome> {
    if (Math.random() >= 0.5) {
      return of({
        winner: card1,
        loser: card2,
        outcome: 'starts reaction',
        playerResult: PlayerResult.WIN,
      });
    } else {
      return of({
        winner: card2,
        loser: card1,
        outcome: 'starts reaction',
        playerResult: PlayerResult.LOSE,
      });
    }
  }
}