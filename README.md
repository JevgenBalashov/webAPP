# Basic Next.js Template

## Scripts

The project includes the following scripts that can be executed:

- `dev`: Starts Next.js in development mode.
- `build`: Next.js generates the static export into the out folder, creates sitemap, optimazes images, creates nginx-routes and deploys on testing FTP server.
- `deploy-ftp`: Deploys on testing FTP server.
- `deploy-sftp`: Deploys on testing SFTP server.
- `start`: Starts a Next.js production server.
- `lint`: Sets up Next.js' built-in ESLint configuration.
- `prettier-format`: Applies formatting using Prettier.

## Getting Started

1. Clone the repo to your local computer.
2. Run `npm install` to install the required dependencies.
3. Add '.env.local' file to the root of the project.
4. To start the development mode, use the command `npm run dev`.
5. To build the project, use the command `npm run build`.
6. To launch the server for the built project, use the command `npm run deploy-ftp`.
7. To launch the server for the built project, use the command `npm run deploy-sftp`.
