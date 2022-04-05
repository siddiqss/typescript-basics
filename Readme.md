# TypeScript Basic Concepts
This project covers the basic syntax and concepts which can be applied in any TS based project.

- Types
- Arrays
- Tuple
- Tuple Array
- Union
- Enum
- Object
- Type Assertion
- Function
- Interface
- Class
- Subclass
- Generics

## How to?
TypeScript needs to be installed to run index.ts file \
You can use this command to install TS locally.\
`npm i -g typescript` \
After installing TS, you can use this command to compile TS code.\
`tsc` \
It will create JS code inside dist.
Then cd into dist and run \
`node index.js`

*tsconfig.json* stores the configuration to compile TS code to JS.

## TypeScript Configuration
tsconfig.json contains "rootDir" which points to "src" folder. You need to put the code in src.
"outDir" points to "dist" folder which means after compilation JS files will be stored in dist.
