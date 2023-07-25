# `<React.StrictMode>`

📅 24/07/2023

It is perfectly fine not to use `<React.StrictMode>` in your production code. 

`<React.StrictMode>` is a development mode feature in React that helps identify potential issues and improve code quality during the development process. It intentionally introduces additional checks and warnings to highlight potential problems like double-rendering of components, unsafe lifecycle methods, and other potential sources of bugs.

While it is useful to have these checks during development to catch and fix issues early, they are not necessary in a production environment. Once you have thoroughly tested your application and are confident that it works as expected, you can safely remove `<React.StrictMode>` from your codebase for the production build.

The primary purpose of `<React.StrictMode>` is to improve the development experience and ensure that your code follows best practices. It doesn't impact the functionality of your application in production. Therefore, it is entirely acceptable to omit it from the production build to reduce the bundle size and improve performance.

Remember that `<React.StrictMode>` is just a tool to aid development and should not affect the behavior of your application in a production setting. Always thoroughly test your application before deploying it to production, and feel free to remove strict mode for the final build if desired.

The main reason for using it is to detect bugs while in development mode. Strict Mode is a useful React feature, as such you need it. React StrictMode renders every of your application's components twice, this enables React Strict mode to identify defects within your application and log the error messages.

To ensure that your application runs efficiently in production, it's recommended to create a production build without <React.StrictMode> enabled. You can do this by configuring your build tool (e.g., webpack) or the React build scripts accordingly.

In summary, <React.StrictMode> is useful during development for catching potential issues and improving code quality, but it is not required in production. For the production stage, it is best to create a production build without <React.StrictMode> to ensure optimal performance.

In the provided code, it appears that you are not using any asynchronous tasks or subscriptions that would require cleanup. As a result, you do not need to add more cleanup functions in this specific code.

The useEffect hook in this component is used to fetch data from an API, handle changes in the component's state, and dispatch actions accordingly. Since there are no event listeners, subscriptions, or other resources that need to be cleaned up, you do not need to add any additional cleanup functions.

The cleanup function you have already added inside the useEffect hook will handle the cancellation of the API request when the component unmounts. This ensures that the request is cancelled and any potential memory leaks are avoided.

In summary, you do not need to add more cleanup functions in this code unless you introduce new asynchronous tasks, subscriptions, or resources that require cleanup. As long as the component is functioning properly and there are no resource leaks, you can consider the cleanup to be sufficient.


When you run `npm run build`, it generates static files that are optimized for production deployment. The build output does not include the `<React.StrictMode>` component. The purpose of `<React.StrictMode>` is to perform additional checks and warnings in development mode to help you identify potential issues with your code. However, these checks are not needed in the production environment, so they are not included in the final build.

During development, you may use `<React.StrictMode>` to catch potential problems early and improve the overall quality of your code. But when you build your application for production using `npm run build`, the strict mode checks are disabled, and you get an optimized, minified, and production-ready version of your application without the overhead of the strict mode checks.

In summary, the build output obtained by running `npm run build` excludes `<React.StrictMode>`, and you get a production-ready version of your application that is optimized for performance and doesn't have the additional development checks.