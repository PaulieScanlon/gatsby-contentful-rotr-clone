import React from 'react';
import { graphql } from 'gatsby';

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      sections {
        __typename
      }
    }
  }
`;

export default ComponentName;
