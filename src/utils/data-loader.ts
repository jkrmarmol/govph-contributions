import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export function loadJSON<T>(path: string): T {
  return require(path) as T;
}
