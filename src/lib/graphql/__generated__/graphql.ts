export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AskRagInput = {
  framework?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  question: Scalars['String']['input'];
};

export type DocumentChunk = {
  __typename: 'DocumentChunk';
  chunkIndex: Scalars['Int']['output'];
  framework: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  score: Scalars['Float']['output'];
  sectionPath: Scalars['String']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type IngestionResult = {
  __typename: 'IngestionResult';
  chunksIngested: Scalars['Int']['output'];
  framework: Scalars['String']['output'];
};

export type Mutation = {
  __typename: 'Mutation';
  askRag: RagAnswer;
  ingestFramework: IngestionResult;
  resetVectorStore: Scalars['Boolean']['output'];
};


export type MutationAskRagArgs = {
  input: AskRagInput;
};


export type MutationIngestFrameworkArgs = {
  framework: Scalars['String']['input'];
};

export type Query = {
  __typename: 'Query';
  searchDocs: Array<DocumentChunk>;
};


export type QuerySearchDocsArgs = {
  input: SearchDocumentsInput;
};

export type RagAnswer = {
  __typename: 'RagAnswer';
  answer: Scalars['String']['output'];
  sources: Array<RagSource>;
};

export type RagSource = {
  __typename: 'RagSource';
  score: Scalars['Float']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type SearchDocumentsInput = {
  framework?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  query: Scalars['String']['input'];
};

export type AskRagMutationVariables = Exact<{
  input: AskRagInput;
}>;


export type AskRagMutation = { askRag: { __typename: 'RagAnswer', answer: string, sources: Array<{ __typename: 'RagSource', title: string, url: string, text: string, score: number }> } };
