import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => name,
)

export default createRule({
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id != null) {
          if (node.id.name === 'ignoredFunc') {
            context.report({
              messageId: 'ignoreCase',
              node: node.id,
            })
          }
        }
      },
    }
  },
  name: 'it-works-ignore',
  meta: {
    docs: {
      description:
        'Ignore rule',
      recommended: 'warn',
    },
    messages: {
      ignoreCase: 'Ignore this rule!!!',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
})
