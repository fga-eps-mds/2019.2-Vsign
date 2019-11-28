import { client as apollo } from './client';
import gql from 'graphql-tag';

export async function getContractQuery(variables) {
  const query = gql`
    query getContract($id: ID!) {
      getContract(id: $id) {
          id
          createdAt
          script
          order
          company {
            name
            apiKey
          }
          user {
            name
          }
      }
    }
  `;

  return await apollo.query({
    query,
    variables
  });
}

export function contractsQuery() {
  return gql`
    query contracts {
      contracts {
        id
        order
        company {
          name
        }
        createdAt
      }
    }
  `;
}

export async function currentUser() {
  const query = gql`
      query currentUser {
          currentUser {
              id
              name
          }
      }
  `;

  return await apollo.query({
      query
  });
}
