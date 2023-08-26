Title
===
Abstract: Create Typescript Project with unit test
## Papar Information
- Title:  `Merge function (run pass unit test only)`
- Authors:  `Kittanat Voranantikronkul`

## Install & Dependence
- typescript
- jest

## Dataset Preparation
| No need

## Setup Project for merge function
- Clone ropository
  ```
  git clone https://github.com/BlueDev69/PrimoWorld.git
  ```
- install dependency
  ```
  npm i
  ```
- run for test
  ```
  npm t | npm test
  ```
- run for view coverage
  ```
  npm run coverage
  ```

## main function (merge)
```
||—— src
|    |—— module
|        |—— merge.ts
```

## main for test script
```
|—— tests
|    |—— merge.test.ts
```

## Directory Hierarchy
```
|—— .DS_Store
|—— babel.config.js
|—— coverage
|    |—— clover.xml
|    |—— coverage-final.json
|    |—— lcov-report
|        |—— base.css
|        |—— block-navigation.js
|        |—— favicon.png
|        |—— index.html
|        |—— merge.ts.html
|        |—— prettify.css
|        |—— prettify.js
|        |—— sort-arrow-sprite.png
|        |—— sorter.js
|    |—— lcov.info
|—— jest.config.js
|—— package-lock.json
|—— package.json
|—— src
|    |—— module
|        |—— merge.interface.ts
|        |—— merge.ts
|—— tests
|    |—— merge.test.ts
```
## Code Details
### Tested Platform
- implementing function merge
  ```
  want to pass 2 parameter (collection_1, collection_2)
  given: collection_1 and collection_2 merged and sort ASC
  ```
- version
  ```
  typescript: 5.2.2
  jest: 29.6.4
  ```
