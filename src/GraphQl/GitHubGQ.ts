import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const API_KEY = 'Bearer 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';
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: API_KEY,
  },
});

export interface PLanguage {
  name: string;
  color: string;
}

export interface GitHubUserType {
  user: {
    name: string;
    avatarUrl: string;
    repositories: {
      nodes: [
        {
          name: string;
          isPrivate: boolean;
          languages: {
            nodes: PLanguage[];
          };
        }
      ];
    };
  };
}

export const getRepositories = () => {
  return client.query({
    query: gql`
      query {
        viewer {
          name
          repositories(last: 20) {
            nodes {
              name
            }
          }
        }
      }
    `,
  });
};

export const getUserByLogin = (login: string) => {
  return client.query<GitHubUserType>({
    query: gql`
      query {
        user(login: "${login}") {
          name
          avatarUrl
          repositories(last: 10) {
            nodes {
              name
              isPrivate
              languages(first: 10) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `,
  });
};
