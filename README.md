## Shopgate Connect Shopware 6 Favorites Extension by Apite, Maintained by Shopgate

### Requirements

Requires `@shopgate/shopware6-cart` v3.1.0 or higher. Whenever `@shopgate/shopware6-user` sets the
Shopware context token (login, logout, registration), the cart calls
`shopgate.shopware6-cart.setFavoritesContextToken.v1`. The cart ships a placeholder for it that does nothing,
and this extension overrides it to store the customer's Shopware context token and merge guest favorites.
Install or update this extension after the cart extension, otherwise the cart's placeholder wins.

### Development

#### Setup
```shell
cd extension && npm i && cd ..
```

#### Configurations

You can set up the ENV variables when running `sgconnect` or use a local `.env` file.

##### For inline, the command will look like this:

```shell
SW_ENDPOINT=http://localhost SW_ACCESS_KEY=SWSCMMJTYLVIT1LBMJQWDLNSRG node $(which sgconnect) backend start
```

##### As an `.env` file.

In `[root]/extension` create an `.env` file with content like this:

```dotenv
SW_ENDPOINT: "http://localhost"
SW_ACCESS_KEY: "SWSCMMJTYLVIT1LBMJQWDLNSRG"
SW_LANG_ID: "fa964a97a1e841a1bbf04471862ccc7f"
```

Run:

```shell
node -r dotenv/config $(which sgconnect) backend start
```
