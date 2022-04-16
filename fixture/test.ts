// @ts-expect-error requires a comment
export const a: string = 1

export interface Test {
  a: string
}

// eslint-disable-next-line tdy/it-works-ignore
export function ignoredFunc() {
  return 'ok'
}

// eslint-disable-next-line import/no-mutable-exports
// eslint-disable-next-line tdy/no-impolite-word
export function fuck() {
  // eslint-disable-next-line tdy/no-impolite-word
  return 'fuck'
}
