// @ts-expect-error requires a comment
export const a: string = 1

export interface Test {
  a: string
}

export function ignoredFunc() {
  return 'ok'
}
