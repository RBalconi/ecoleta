
<p align="center">
  <img src="https://github.com/RBalconi/ecoleta/blob/master/mobile/src/assets/logo.png" alt="Ecoleta Logo" /> 
  <br/> Seu marketplace de coleta de resíduos.
</p>
<p align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/static/v1?label=Node&message=JS&color=blue?style=plastic&logo=Node.js" alt="NodeJS" />
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/static/v1?label=React&message=JS&color=blue?style=plastic&logo=React" alt="ReactJS" />
  </a>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/static/v1?label=React&message=Native&color=blue?style=plastic&logo=React" alt="React-Native" />
  </a>
</p>
<p align="center">
<img src="https://github.com/RBalconi/ecoleta/blob/master/devices-ecoleta.png" alt="Aparelho exibindo o app/website"/>
</p>


# Sobre
Ecoleta é um projeto feito a patir de estudos pela [Rocketseat](https://rocketseat.com.br/), durante o evento Next Level Week #01, durante a primeira semana de junho de 2020.

# Tecnologias usadas
Durante toda a aplicação foi usado o [React](https://github.com/facebook/react).
* No back-end usamos o [NodeJS](https://nodejs.org/en/)
* Na web foi usado o [ReactJS](https://reactjs.org/)
* No mobile usamos o [React-Native](https://reactnative.dev/)

# Como utilizar

Para utilizar é simples, vamos lá:

Clone o repósitorio na sua maquina usando:
```
git@github.com:RBalconi/ecoleta.git
```

- Como as aplicações estão rodando em localhost temos que configurar todas as variaveis que usa o endereço de IPv4, para o endereço IPv4 do seu computador, podendo ser localizadas nos seguintes arquivos:
```
                            ╔ ItemsController.ts                      
server ═ src ═ controllers ═╣
                            ╚ PointController.ts
```
```
mobile ═ src ═ services ═ api.ts
```

Para localizar o endereço IPv4, digite no terminal ``ipconfig`` caso use Windows, ``hostname -I`` caso use linux e no MacOS basta entrar em “Abrir as Preferências Rede…”.

### Rodando o back-end
Agora vamos dar inicio ao back-end. 
Entre na pasta ``server`` pelo terminal e teremos que instalar as dependências dela, para isso digite:
```
npm install
```
Agora temos que iniciar todas as migrates com o seguinte comando:
```
npm run knex:migrate
```
Feito? Ok.
Agora temos que setar os dados no banco de dados, digite:
```
npm run knex:seed
```
Agora sim vamos dar o start. Digite:
```
npm run dev
```

### Rodando a aplicação Web
Agora vamos dar inicio a aplicação web.
Entre na pasta ``web`` pelo terminal e temos que instalar as dependências dela, para isso digite:
```
npm install
```
Agora basta rodar a aplicação, digite:
```
npm start
```



### Rodando a aplicação Mobile
Agora vamos dar inicio a aplicação mobile.
Entre na pasta ``mobile`` pelo terminal e também teremos que instalar as dependências dela, para isso digite:
```
npm install
```
Agora para iniciar o app apenas digite:

``npm start`` ou ``expo start``



<p align="center">
  Desenvolvido com 💜 por <a href="https://www.linkedin.com/in/rafael-balconi/">RBalconi</a>
</p>
