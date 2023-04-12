import { gql } from "@apollo/client";

const GetRamById = gql`query GetRamById($id: ID) {
    getRamBy(
        _id: $id
      )
      {
        brand {
          name
        }
      }
}

`;


export default GetRamById;
