import { GameSavingLoader } from '../app';

test('GameSavingLoader', async () => {
  await GameSavingLoader.load().then(saving => {
    expect(saving).toBe(
      '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    );
  });
});
