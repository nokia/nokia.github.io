# Github page

![GitHub Pages deploy](https://github.com/test-organization-for-pr-creation/test-organization-for-pr-creation.github.io/workflows/GitHub%20Pages%20deploy/badge.svg)

A Github page deployed at https://test-organization-for-pr-creation.github.io/

## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

- Node.js

### Building

Firstly, clone the repository and navigate into it. To make a development build, use:

```
npm install #install dependencies
npm start #start development server
```
To make a production build, use: `npm run build`

### Deploying

The page is automatically built and deployed on every push to the `real-master` branch using a Github action.
