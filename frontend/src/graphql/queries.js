import { client as apollo } from './client';
import gql from 'graphql-tag';

export async function getContract(id, token) {
  const GET_CONTRACT = gql`
    query getContract($id: ID, $token: String) {
      getContract(
        id: $id
        token: $token
      ) {
          id
          script
          order
          expired
          user {
            name
            token
          }
      }
    }
  `;

  const response = await apollo.query({
    query: GET_CONTRACT,
    variables: { id, token }
  });

  return response;
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
