import { gql } from "@apollo/client";

const GetSecondaryPartsBy = gql`query getSecondaryParts($id: ID) {
  getMotherboardsBy(_id: $id) {
    relatedCpus {
      _id
      model
    }
    relatedGraphics {
      _id
      model
    }
    relatedRam {
      _id
      model
    }
    relatedCases {
      _id
      model
    }
  }
}

`;


export default GetSecondaryPartsBy;
