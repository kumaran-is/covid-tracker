## What changed

- {Describe changes here}

## How to test

- Get the code

```bash
git clone https://github.com/kumaran-is/covid-tracker.git
cd covid-tracker
git checkout {branch-name}
npm install
```

- Test the code

```bash
npm run lint
npm run test
```

- Run the covid tracker application

```bash
npm run start (dev mode)
npm run prod-start (prod mode)
```

## What to check

Verify that the following are valid:

- `npm run lint` and `npm run test` should pass
- Code coverage should be above 80%
- Verify the code changes work as expected by running on a local machine both in development and production modes
- Application runs without any errors
- Verify the browser console for any errors
- Review the code changes and verify it is written as per Angular coding standard: [Angular Style Guide](https://angular.io/guide/styleguide) for syntax, conventions, and structuring of Angular application
- Review the test spec changes. Verify new tests are added to cover all new changes. Also verify test specs covers both happy path and failure path like exceptional or error conditions
- Changelog file is updated
- Review if any changes are needed to README prescription or any other project documents
- Delete the branch after merging back with the `develop` branch
