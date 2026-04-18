import { gql } from "@apollo/client";

export const ASK_RAG = gql`
  mutation AskRag($input: AskRagInput!) {
    askRag(input: $input) {
      answer
      sources {
        title
        url
        text
        score
      }
    }
  }
`;