import { getEncoding } from 'js-tiktoken'

// TODO: make this configurable
const encoding = getEncoding('cl100k_base')

export function encode(input: string): Uint32Array {
  return new Uint32Array(encoding.encode(input))
}
