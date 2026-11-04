# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres
to [Semantic Versioning](http://semver.org/).

## 3.0.1

- fixed favorites of logged-in users disappearing after adding them: renamed the context token pipeline to `shopgate.shopware6-cart.setFavoritesContextToken.v1`, the id the cart extension calls
- requires `@shopgate/shopware6-cart` v3.1.0 or higher
- logged-in users have to log out and in once after the update for their favorites to work

## 3.0.0
- moved the package to the @shopgate organization at NPM and renamed to @shopgate/shopware6-favorites

## 2.0.0

- updated utility to version 2.0.0

## 1.0.3

- updated utility version to fix config related logging

## 1.0.2

- added IT, FR, ES translations

## 1.0.1

- updated dependencies

## 1.0.0

- changed alpha versioning to release

## 0.1.0-beta.2

- removed service classes (moved to separate module)

## 0.1.0-beta.1

- added initial plugin release for beta testing
