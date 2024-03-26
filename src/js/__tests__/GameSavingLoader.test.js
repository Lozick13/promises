import { GameSavingLoader } from '../app';

test('GameSavingLoader', async () => {
  await GameSavingLoader.load(true).then(saving => {
    expect(saving).toBe(
      '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    );
  });
});

test('GameSavingLoader Error', async () => {
  let result;
  await GameSavingLoader.load(false).catch(error => {
    result = error.message;
  });
  expect(result).toBe('Failed');
});
