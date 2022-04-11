// @ts-expect-error requires a comment
export const a: string = 1

export interface Test {
  a: string
}

// eslint-disable-next-line tdy/it-works-ignore
export function ignoredFunc() {
  return 'ok'
}
