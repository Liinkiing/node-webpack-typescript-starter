# Node Webpack Typescript starter
A simple starter to bootstrap your next node application.

## Aliases
It includes by default support for aliases in `tsconfig.json`.
It is defaulted to `~/*`, so you can import stuff like this

```typescript
import { Logger } from '~/services/Logger'

const logger = new Logger()
```

It uses [tsconfig-paths](https://github.com/dividab/tsconfig-paths) and it's corresponding Webpack plugin, [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin). 
It means that you only have to setup your aliases in the `tsconfig.json`, it's your source of truth. 

## @types and extending modules
It also includes a `@types` directory under **src**, so you can easily 
separe your types or extends some external modules. They are also included in the `tsconfig.json`
For example, if some package named `foo` does not have any types in [DefinitelyTyped](https://definitelytyped.org/), you could 
add a `index.d.ts` under `src/@types/foo/index.d.ts`. It is just my personnal convention, so do as you want!

```typescript
// src/@types/foo/index.d.ts

// to make sure Typescript get the original types from the module (if any)
import * as foo from 'foo'

declare module 'foo' {
  declare function foo(bar: string): boolean
} 
```

Because the `@types` directory is declared in `typeRoots`, Typescript will no longer complain if you imported your package with missing types

## process.env and related typings
This starter is using [Dotenv](https://github.com/motdotla/dotenv) to handle in-developpement secrets.  
It includes a `.env.sample` which **SHOULD** be committed. It's an example file and does not contains any sensitive data. You must copy it and rename it to **.env**.
This one is ignored.  
By using Typescript's [merging interfaces capability](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces), it also comes by default with `process.env` types safety. You can type them under `src/@types/node/index.d.ts` 
and have all the nice autocompletion!
