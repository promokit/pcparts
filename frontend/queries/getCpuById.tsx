import { gql } from "@apollo/client";

const GetCpuById = gql`query getCpuById($id: ID) {
    getCpuBy(_id: $id) {
        brand {
            name
          }
          socket {
            name
          }
          ram_max
          ram_speed {
            name
          }
          ram_type {
            name
          }
          core_clock
          core_count
          smt
        }
}
`;


export default GetCpuById;
