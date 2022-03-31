### Postman automated tests

Tests are run against current platform-sdk initial config (appId).

Run `npm i` to install dependencies. `newman` module is needed

Start [Platform SDK backend](https://developer.shopgate.com/docs/guides-tutorials/development-tools/platform-sdk/backend)

```
    sgconnect backend start
```

Run postman tests

```
    npm run integration
```

