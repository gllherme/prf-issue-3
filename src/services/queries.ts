import { gql } from "@apollo/client";

export const LIST_CONTINENTS = gql`
    {
        continents {
            name
            code
        }
    }
`;

export const LIST_COUNTRIES = gql`
    query listCountries($id: ID!) {
        continent(code: $id) {
            countries {
                name
                code
                currency
            }
        }
    }
`;
