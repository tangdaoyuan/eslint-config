import { ESLintUtils } from '@typescript-eslint/utils/'
import { describe, it } from 'vitest'
import rule, { MESSAGE_ID, RULE_NAME } from './it-works'

describe('it-works-ignore', () => {
  const ruleTester = new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
  })

  it('should pass', () => {
    ruleTester.run(RULE_NAME, rule, {
      valid: [
        `function requiredFunc() {
          return 'ok'
        }`,
      ],
      invalid: [
        {
          code: `function ignoredFunc() {
            return 'ok'
          }`,
          errors: [{ messageId: MESSAGE_ID }],
        },
      ],
    })
  })
})
