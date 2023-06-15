const tmi = require('tmi.js');
const rp = require('request-promise');

// Configuração do bot da twitch 
const config = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: 'seu_nome_de_usuario',
    password: 'sua_senha_do_token'
  },
  channels: ['seu_canal']
};

// Conexão com o chat da Twitch
const client = new tmi.client(config);
client.connect();

// api do last fm 
async function getCurrentTrack() {
  const apiKey = 'sua_chave_de_api_do_lastfm';
  const username = 'seu_nome_de_usuario_do_lastfm';

  const options = {
    uri: `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`,
    json: true
  };

  try {
    const response = await rp(options);
    const track = response.recenttracks.track[0];
    const artist = track.artist['#text'];
    const title = track.name;
    const nowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';

    return nowPlaying ? `${artist} - ${title}` : null;
  } catch (error) {
    console.error('Erro ao obter a música atual:', error);
    return null;
  }
}


client.on('connected', () => {
  console.log('Bot conectado ao chat da Twitch');
});


client.on('message', async (channel, userstate, message, self) => {
 
  if (self) return;

//!musica
  if (message.toLowerCase() === '!musica') {
    const currentTrack = await getCurrentTrack();

    if (currentTrack) {
      client.say(channel, `Música atual: ${currentTrack}`);
    } else {
      client.say(channel, 'Nenhuma música está sendo reproduzida no momento.');
    }
  }
});
