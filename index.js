import * as wasm from "wasm-game-of-life";

// wasm.greet();
const str = wasm.extractcost(`directive @cost(
  complexity: Int
  network: Int
  db: Int
  multipliers: [String]
  useMultipliers: Boolean
  provides: [String]
) on FIELD | FIELD_DEFINITION

type Hello {
  hello: String @cost(complexity: 1)
}

type World {
  world: String @cost(network: 1000)
}

type Query {
  hello: Hello
  world: World
}
`);
console.log(str);