import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type BagSectionQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BagSectionQuery = { __typename?: 'Query', bagSection?: { __typename?: 'BagSection', name: string } | null };


export const BagSectionDocument = `
    query bagSection {
  bagSection {
    name
  }
}
    `;
export const useBagSectionQuery = <
      TData = BagSectionQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: BagSectionQueryVariables,
      options?: UseQueryOptions<BagSectionQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<BagSectionQuery, TError, TData>(
      variables === undefined ? ['bagSection'] : ['bagSection', variables],
      fetcher<BagSectionQuery, BagSectionQueryVariables>(client, BagSectionDocument, variables, headers),
      options
    );