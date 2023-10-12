export const environment = {
  production: true,
};

export const spotifyConfiguration = {
  clientId: '72641c612987430c82cf5f61142e9a50',
  clientSecret: '111d46bc4fa74baba5ed45ab76e2f734',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login',
  scopes: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "palylist-read-private",
    "palylist-read-collaborative",

  ]
}
