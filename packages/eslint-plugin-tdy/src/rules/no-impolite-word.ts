import { ESLintUtils } from '@typescript-eslint/utils'
import WORDS from 'impolite-word'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const impoliteSet = new Set(WORDS)

const createRule = ESLintUtils.RuleCreator(
  name => name,
)

export const RULE_NAME = 'no-impolite-word'

export const MESSAGE_ID = 'impolite-word'

export default createRule({
  create(context) {
    return {
      Program() {
        const code = context.getSourceCode()
        const lines = code.text.split('\n')

        lines.forEach((line, ind) => {
          // TODO
          // optimize by matchAll
          line.split(/\s+/).forEach((word) => {
            const col = line.indexOf(word)

            const _word = word
              .replace(/^[^_a-zA-Z0-9]+/, '')
              .replace(/[^_a-zA-Z0-9]+$/, '')
              .toLowerCase()
            if (impoliteSet.has(_word)) {
              context.report({
                messageId: MESSAGE_ID,
                data: {
                  word,
                },
                loc: {
                  start: {
                    line: ind + 1,
                    column: col,
                  },
                  end: {
                    line: ind + 1,
                    column: col + word.length,
                  },
                },
              })
            }
          })
        })
      },
    }
  },
  name: RULE_NAME,
  meta: {
    docs: {
      description:
        'disallow the use of words that are not polite in a sentence',
      recommended: 'warn',
    },
    messages: {
      [MESSAGE_ID]: 'The word {{word}} is not polite.',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
})
