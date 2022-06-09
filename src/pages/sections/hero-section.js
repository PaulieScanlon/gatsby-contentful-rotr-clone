import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const HeroSection = () => {
  const { contentfulHeroSection } = useStaticQuery(graphql`
    {
      contentfulHeroSection {
        eventName
        eventTagline
        eventDetails {
          raw
        }
      }
    }
  `);

  return (
    <div>
      <h1>{contentfulHeroSection.eventName}</h1>
      <h2>{contentfulHeroSection.eventTagline}</h2>
      <p>{contentfulHeroSection.eventDetails.raw}</p>
    </div>
  );
};

export default HeroSection;
