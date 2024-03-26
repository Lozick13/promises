import { GameSavingLoader } from '../app';

test('GameSavingLoader', async () => {
  const gameSavingLoader = new GameSavingLoader();
  const result = await gameSavingLoader.load();

  expect(result).toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
  );
});
