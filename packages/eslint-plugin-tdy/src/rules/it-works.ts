import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => name,
)

export const RULE_NAME = 'it-works-ignore'

export const MESSAGE_ID = 'ignore-case'

export default createRule({
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id != null) {
          if (node.id.name === 'ignoredFunc') {
            context.report({
              messageId: MESSAGE_ID,
              node: node.id,
            })
          }
        }
      },
    }
  },
  name: RULE_NAME,
  meta: {
    docs: {
      description:
        'Ignore rule',
      recommended: 'warn',
    },
    messages: {
      [MESSAGE_ID]: 'Ignore this rule!!!',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
})
