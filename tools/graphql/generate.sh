yarn ts-node tools/graphql/generate-gql-types.ts
echo "// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-nocheck\n$(cat apps/backend/graphql-generated-types.ts)" > apps/backend/graphql-generated-types.ts