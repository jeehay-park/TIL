# `npm` and `npx`

📅 01/11/2023

`npm` and `npx` are both part of the Node.js ecosystem, but they serve different purposes:

1. **npm (Node Package Manager):**

   - `npm` is the default package manager for Node.js.
   - It is used to install, manage, and publish packages and dependencies for your Node.js projects.
   - You use `npm` to install packages globally (with the `-g` flag) or locally (in the project's `node_modules` directory) by adding them to your project's `package.json` file.
   - It is commonly used for installing build tools, development dependencies, and various other packages needed for your Node.js projects.

   **Example Commands:**

   - Install a package globally: `npm install -g package-name`
   - Install project dependencies (from `package.json`): `npm install`
   - Publish a package to the npm registry: `npm publish`

2. **npx (Node Package eXecute):**

   - `npx` is a package runner tool that comes with npm (npm version 5.2.0 and higher).
   - It is used to execute packages from the npm registry without needing to install them globally or locally.
   - `npx` is particularly useful for running one-time commands and tools that you don't want to install as global dependencies.
   - It automatically downloads and runs packages on the fly.

   **Example Commands:**

   - Run a package without installing it globally: `npx package-name`
   - Execute a specific version of a package: `npx package-name@1.2.3`
   - Run one-time commands, such as creating a new React app: `npx create-react-app my-app`

In summary, `npm` is primarily for managing Node.js packages and dependencies, while `npx` is a tool for executing packages, command-line tools, and scripts without installing them. `npx` is particularly useful when you want to run a package once or use a package for a specific task without cluttering your global or project dependencies.


```cmd
Jeehay Park@BOOK-LUJ6JK27VQ MINGW64 /d/ts-projects
$ npm install -g create-react-app
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

added 67 packages in 2s

5 packages are looking for funding
  run `npm fund` for details

Jeehay Park@BOOK-LUJ6JK27VQ MINGW64 /d/ts-projects
$ npx create-react-app ts-app-001

Creating a new React app in D:\ts-projects\ts-app-001.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1463 packages in 55s

242 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 69 packages, and changed 1 package in 6s

246 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1532 packages in 2s

246 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created ts-app-001 at D:\ts-projects\ts-app-001
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd ts-app-001
  npm start

Happy hacking!

```

