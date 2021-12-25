import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { AboutSection } from './styles';
import { PageSection } from 'components/common';
import { AboutCard } from './AboutCard/AboutCard';
import AboutPerson from 'assets/illustrations/about-person.svg';
import { StaticQuery, graphql } from 'gatsby';

export const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <PageSection id='about' as={AboutSection} theme={theme}>
      <div className='content-container'>
        <AboutPerson />
        <h1>About Me</h1>
        <div className='card-container'>
          <StaticQuery
            query={graphql`
              query AboutQuery {
                allAboutJson {
                  edges {
                    node {
                      about {
                        icon
                        text
                        title
                      }
                    }
                  }
                }
              }
            `}
            render={(data) => {
              const about = data.allAboutJson.edges[0].node.about;

              return (
                <>
                  <AboutCard cardContext={about[0]} />
                  <AboutCard cardContext={about[1]} />
                  <AboutCard cardContext={about[2]} />
                </>
              );
            }}
          />
        </div>
      </div>
    </PageSection>
  );
};
