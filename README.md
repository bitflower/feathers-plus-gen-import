# Importing JSON schemas into the schema of the service

## How to reproduce the error

`feathers-plus generate service` => `second-test` => confirm all prompts

## Error

```
Cannot parse schema: return {
title: 'SecondTest',
description: 'SecondTest database.',

  required: [
    '_id',
    'name'
  ],
  uniqueItemProperties: [

  ],
  properties: {
    ...CoSchemas.atom.properties
  },

}

in /Users/matthias/Documents/Projekte/bitflower/Case OS/Prototype/v0.2/_Knowledge/FeathersJS/json-schema/src/services/second-test/second-test.schema.

events.js:167
      throw er; // Unhandled 'error' event
      ^

ReferenceError: CoSchemas is not defined
    at eval (eval at Object.keys.sort.forEach.serviceName (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/@feathers-plus/generator-feathers-plus/lib/service-specs-combine.js:88:20), <anonymous>:15:8)
    at Object.keys.sort.forEach.serviceName (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/@feathers-plus/generator-feathers-plus/lib/service-specs-combine.js:88:54)
    at Array.forEach (<anonymous>)
    at serviceSpecsCombine (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/@feathers-plus/generator-feathers-plus/lib/service-specs-combine.js:18:6)
    at serviceSpecsExpand (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/@feathers-plus/generator-feathers-plus/lib/service-specs-expand.js:22:50)
    at new <anonymous> (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/@feathers-plus/generator-feathers-plus/generators/writing/index.js:83:40)
    at generatorWriting (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/@feathers-plus/generator-feathers-plus/generators/writing/index.js:80:19)
    at ServiceGenerator.writing (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/@feathers-plus/generator-feathers-plus/generators/service/index.js:261:5)
    at Object.<anonymous> (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/yeoman-generator/lib/index.js:424:27)
    at /Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/run-async/index.js:25:25
    at new Promise (<anonymous>)
    at /Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/run-async/index.js:24:19
    at self.env.runLoop.add.completed (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/yeoman-generator/lib/index.js:425:13)
    at runCallback (timers.js:705:18)
    at tryOnImmediate (timers.js:676:5)
    at processImmediate (timers.js:658:5)
Emitted 'error' event at:
    at Immediate.setImmediate (/Users/matthias/.nvm/versions/node/v10.15.0/lib/node_modules/@feathers-plus/cli/node_modules/yeoman-generator/lib/index.js:433:22)
    at runCallback (timers.js:705:18)
    at tryOnImmediate (timers.js:676:5)
    at processImmediate (timers.js:658:5)
```