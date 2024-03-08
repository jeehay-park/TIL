# dependency conflict

📅 08/03/2024

```
Jeehay Park@BOOK-LUJ6JK27VQ MINGW64 /c/tasks/kms-admin-frontend (main)
$ npm install --save-dev @types/crypto-js
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: msw@1.2.1
npm ERR! Found: typescript@5.3.3
npm ERR! node_modules/typescript
npm ERR!   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm ERR!   node_modules/fork-ts-checker-webpack-plugin
npm ERR!     fork-ts-checker-webpack-plugin@"^6.5.0" from react-dev-utils@12.0.1
npm ERR!     node_modules/react-dev-utils
npm ERR!       react-dev-utils@"^12.0.1" from react-scripts@5.0.1
npm ERR!       node_modules/react-scripts
npm ERR!         react-scripts@"5.0.1" from the root project
npm ERR!   peer typescript@"*" from ts-loader@9.5.1
npm ERR!   node_modules/ts-loader
npm ERR!     dev ts-loader@"^9.5.1" from the root project
npm ERR!   2 more (tsutils, the root project)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peerOptional typescript@">= 4.4.x <= 5.0.x" from msw@1.2.1
npm ERR! node_modules/msw
npm ERR!   dev msw@"^1.2.1" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: typescript@5.0.4
npm ERR! node_modules/typescript
npm ERR!   peerOptional typescript@">= 4.4.x <= 5.0.x" from msw@1.2.1
npm ERR!   node_modules/msw
npm ERR!     dev msw@"^1.2.1" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\박지혜\AppData\Local\npm-cache\_logs\2024-03-08T00_36_06_185Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\박지혜\AppData\Local\npm-cache\_logs\2024-03-08T00_36_06_185Z-debug-0.log


```

It seems that there is a dependency conflict preventing npm from resolving the `@types/crypto-js` package. This conflict is likely caused by conflicting versions of TypeScript required by different dependencies in your project.

To resolve this issue, you can try one of the following solutions:

1. **Force Installation:** You can try forcing npm to install the package despite the dependency conflict by using the `--force` flag:

   ```bash
   npm install --save-dev @types/crypto-js --force
   ```

   However, using the `--force` flag may lead to potential issues with broken dependency resolution, so use it with caution.

2. **Legacy Peer Dependencies:** You can try installing the package with the `--legacy-peer-deps` flag, which allows npm to use an older, potentially incompatible version of dependency resolution:

   ```bash
   npm install --save-dev @types/crypto-js --legacy-peer-deps
   ```

   This approach may help bypass the dependency conflict, but it also comes with the risk of using incompatible versions of dependencies.

3. **Resolve Dependency Conflict:** You may need to manually resolve the dependency conflict by updating the versions of conflicting dependencies in your project's `package.json` file. Try updating the versions of `typescript` and other conflicting dependencies to compatible versions and then running `npm install` again.

Choose the approach that best fits your project's needs and proceed accordingly.