/* eslint-disable tdy/no-impolite-word */
import { ESLintUtils } from '@typescript-eslint/utils/'
import { describe, it } from 'vitest'
import rule, { MESSAGE_ID, RULE_NAME } from './no-impolite-word'

describe('no-impolite-word', () => {
  const ruleTester = new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
  })

  it('should pass', () => {
    ruleTester.run(RULE_NAME, rule, {
      valid: [
        'const polite = \'123\'',
      ],
      invalid: [
        {
          code: `function fuck() {
            return 'fuck'
          }`,
          errors: [{ messageId: MESSAGE_ID }, { messageId: MESSAGE_ID }],
        },
      ],
    })
  })
})
