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
        user {
          name
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