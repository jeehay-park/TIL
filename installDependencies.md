# UI Development in React Native

📅 14/06/2024

"install dependencies" refers to the process of downloading and installing the libraries or packages that your project requires to run. These dependencies are typically listed in a file such as `package.json` for Node.js projects, which includes React applications.

### In the Context of Your `deploy.yml` Workflow

In your `deploy.yml` workflow file, the step to install dependencies looks like this:

```yaml
- name: Install dependencies and build
  run: |
    yarn install
    yarn build
```

Here's what happens in this step:

1. **Install Dependencies** (`yarn install`): This command reads the `package.json` file in your project, identifies all the libraries and packages listed as dependencies, and installs them in your project. These packages are typically installed in a `node_modules` directory within your project.

2. **Build the Project** (`yarn build`): After the dependencies are installed, this command runs the build process for your React application. It compiles your source code into a format that can be deployed to a web server. For a React application, this typically means generating a set of static files (HTML, CSS, JavaScript) in a `build` directory.

### Detailed Breakdown of `yarn install` and `yarn build`

1. **yarn install**:
   - Reads the `package.json` file to determine the required dependencies.
   - Downloads the specified versions of the dependencies from the npm registry.
   - Installs the dependencies into the `node_modules` directory in your project.
   - Creates or updates the `yarn.lock` file to ensure the same versions of dependencies are used in future installations.

2. **yarn build**:
   - Executes the build script defined in your `package.json` file. For a typical Create React App project, this might look like `"build": "react-scripts build"`.
   - Compiles the JavaScript and other assets, performs optimizations, and outputs the static files to a `build` directory.
   - These static files are what get deployed to your GitHub Pages site.

### Example `package.json`

Here’s an example of what a `package.json` might look like for a React project:

```json
{
  "name": "my-react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### Summary

- **Install Dependencies**: This step ensures all the necessary libraries and packages your project depends on are installed.
- **Build the Project**: This step compiles your project into a deployable format, typically a set of static files.

Both steps are crucial in preparing your application for deployment to GitHub Pages or any other hosting platform.
