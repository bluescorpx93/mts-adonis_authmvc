### Adonis Tryout

To Test This, 

- Create .env
```sh
$ cd mts-adonis_authmvc
$ touch .env
```

- Update .env
```sh
DB_CONNECTION=<YOUR_DB_TYPE>
DB_HOST=<YOUR_DB_HOST>
DB_PORT=<YOUR_DB_PORT>
DB_USER=<YOUR_DB_USERNAME>
DB_PASSWORD=<YOUR_DB_PASSWORD>
DB_DATABASE=<YOUR_DB_NAME>
```

- Install Package Dependencies
```sh
$ cd mts-adonis_authmvc
$ yarn install
# or, with npm
$ npm install
```

- Run App in PROD Mode
```sh
$ cd mts-adonis_authmvc
$ yarn start
```

- Run App in DEV Mode
```sh
$ cd mts-adonis_authmvc
$ adonis serve --dev
```
