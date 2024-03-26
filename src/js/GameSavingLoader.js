import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load(value) {
    return new Promise((resolve, reject) => {
      read(value)
        .then(data => json(data))
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
}
