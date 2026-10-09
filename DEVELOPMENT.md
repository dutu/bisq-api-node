# Development

## Install directly from a GitHub branch

To install directly from a GitHub branch instead of npm:

```shell
npm install "github:dutu/bisq-api-node#custom-api"
```

or with Yarn:

```shell
yarn add bisq-api-node@"https://github.com/dutu/bisq-api-node.git#head=custom-api"
```

`custom-api` is the private customization branch. It currently adds
`SendBtcFromAddresses` and `CloneOffer` for a matching custom Bisq daemon and can
include further custom API changes. Install it from GitHub without publishing a
new npm version. The branch must be pushed to GitHub before these commands can
install its changes. Replace the branch name if needed. For reproducible
installations, use a commit SHA (`#<sha>` for npm or `#commit=<sha>` for Yarn).
Git installations build the CommonJS entrypoint automatically; build lifecycle
scripts must be enabled. Published packages include the built entrypoint and
do not require Babel at runtime.

## Build and test

```shell
yarn install --immutable
yarn build
yarn test
```

Both `npm pack` and `yarn pack` build the CommonJS entrypoint before packaging.
The generated `dist/` directory is not committed.

After installing dependencies with Yarn, plain `npm run build`, `npm pack`, and
`npm publish` also work: the build script activates Yarn's Plug'n'Play resolver
when needed. With a `node_modules` installation, it uses normal Node resolution.
