# Izenda SASS Starter Kit
The starter kit demonstrates how to custom SASS of Izenda BI 7 Series.

## Prerequisites

1. Installed NodeJs version 8.0+
2. Download SASS.zip package from the downloads page (https://downloads.izenda.com/).
3. Extract and copy files from the SASS.zip into static folder.

## Getting Started
1. Run the command to install all NodeJS depependency packages

    ```
    npm install
    ```

2. Run the command to compile the Sass package

    For development, the following command generates unminified css file

    ```
    npm run build:dev
    ```

    For production, the following command generates minified css file

    ```
    npm run build:prod
    ```

3. Your result is located in dist/development (or dist/production) folder. Please ignore tempEntryPoint.js(.map) files.