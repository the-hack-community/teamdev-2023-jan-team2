import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '../../apps/api/schema.graphql',
  generates: {
    'schema.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        scalars: {
          ISO8601DateTime: 'string',
        },
      },
    },
  },
}

export default config
