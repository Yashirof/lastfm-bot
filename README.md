# Bot de Música Atual para Twitch

Este é um bot em JavaScript que exibe a música atual do Last.fm no chat da Twitch. O bot irá responder ao comando "!musica" com a música atual reproduzida no Last.fm.

## Configuração

Antes de executar o bot, siga estas etapas para configurar corretamente:

1. Certifique-se de ter o Node.js instalado no seu sistema.
2. Clone este repositório para o seu ambiente local.

### Configurando a Twitch

1. Crie uma conta na Twitch em https://www.twitch.tv.
2. Acesse o painel de desenvolvedores da Twitch em https://dev.twitch.tv/console/apps.
3. Clique em "Criar novo aplicativo" e preencha as informações solicitadas.
4. Copie a "Chave de Cliente" (Client ID) do seu aplicativo Twitch.
5. Abra o arquivo `bot.js` e substitua `'seu_nome_de_usuario'` pelo seu nome de usuário da Twitch.
6. Substitua `'sua_senha_do_token'` pela senha do token da sua conta da Twitch.

### Configurando o Last.fm

1. Crie uma conta no Last.fm em https://www.last.fm.
2. Acesse a página de criação de aplicativos do Last.fm em https://www.last.fm/api/account/create.
3. Preencha as informações solicitadas para o seu aplicativo.
4. Copie a "Chave da API" (API Key) do seu aplicativo Last.fm.
5. Abra o arquivo `bot.js` e substitua `'sua_chave_de_api_do_lastfm'` pela sua chave de API do Last.fm.
6. Substitua `'seu_nome_de_usuario_do_lastfm'` pelo seu nome de usuário do Last.fm.

### Instalando dependências

1. Abra o terminal na pasta do projeto.
2. Execute o comando `npm install` para instalar as dependências necessárias (tmi.js e request-promise).

## Executando o Bot

1. Após concluir as configurações acima e instalar as dependências, execute o bot com o comando `node bot.js` no terminal.
2. O bot irá se conectar ao chat da Twitch e responderá ao comando "!musica" com a música atual do Last.fm.

## Personalizando o Bot

Você pode personalizar o comportamento do bot alterando o código em `bot.js`. Por exemplo, você pode adicionar mais comandos personalizados ou modificar a frequência de verificação da música atual.
Lembre-se de substituir as seções em maiúsculas (como 'seu_nome_de_usuario' e 'sua_senha_do_token') pelas suas informações específicas.
