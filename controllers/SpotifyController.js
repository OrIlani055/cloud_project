const SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '4a443ae244a346909958967f11de7f8b',
  clientSecret: '55d5579cbeea4c508196bec5a511ad5d',
  redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.setAccessToken('<your_access_token>');