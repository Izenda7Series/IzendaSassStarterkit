# Izenda SASS Starter Kit
The starter kit demonstrates how to custom SASS of Izenda BI 7 Series.

## Prerequisites
1. Download SASS.zip from the downloads page (https://downloads.izenda.com/).
2. Extract and copy files from the SASS.zip into static folder.

## Getting Started
1. Pull packages by run 'yarn' or 'npm install' from command line.

2. Alter SASS source code in the static folder.

3. Run 'yarn build:dev' (or 'npm build:prod' for production quality) to compile.

4. Your result is located in dist/development (or dist/production) folder. Please ignore tempEntryPoint.js(.map) files.

## Known Issue
1. From Izenda v3.1.0 to v3.2.0, we have an issue with @blueprintjs/datetime v3.8.0 package, this package is needed to install manually into the Izenda SASS Starter Kit.
From Izenda v3.3.0, this issue is resolved by Izenda.