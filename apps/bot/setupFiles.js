const fetchMock = require('jest-fetch-mock');
fetchMock.enableFetchMocks();

[
  'DISCORD_TOKEN',
  'DISCORD_CLIENT_ID',
  'DISCORD_CLIENT_SECRET',
  'DISCORD_BOT_TOKEN',
  'DISCORD_BOT_CHANNEL_ID',
  'TWITTER_BEARER_TOKEN',
  'TWITTER_ACCESS_TOKEN',
  'TWITTER_ACCESS_TOKEN_SECRET',
  'TWITTER_API_KEY',
  'TWITTER_API_KEY_SECRET',
  'MONGO_URI',
].forEach((key) => {
  process.env[key] = key;
});
