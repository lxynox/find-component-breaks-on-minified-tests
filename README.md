# find-component-breaks-on-minified-tests
The `find(Component)` breaks when running Uglified JS tests.

### Steps to reproduce

1. Install all dependencies: `yarn install`
2. Compile the tests in dev mode (unminified): `yarn build`
3. Compile the tests in prod mode (minified): `NODE_ENV=production yarn build`

Run tests against unminified tests: (should pass)

`yarn test`

Run tests against minified tests: (should fail)

`yarn test:prod`
