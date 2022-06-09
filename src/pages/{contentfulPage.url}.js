import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import HeroSection from './sections/hero-section';

const getSection = (__typename) => {
  switch (__typename) {
    case 'ContentfulHeroSection':
      return <HeroSection />;

    default:
      break;
  }
};

const ComponentName = ({
  data: {
    contentfulPage: { sections }
  }
}) => {
  return (
    <Fragment>
      {sections.map((section, index) => {
        const { __typename } = section;
        return <section key={index}>{getSection(__typename)}</section>;
      })}
    </Fragment>
  );
};

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
