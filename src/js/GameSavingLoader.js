import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve, reject) => {
      read()
        .then(data => json(data))
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
}
