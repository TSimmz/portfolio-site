import React from 'react';
import { Skill, SkillsContainer, Wrapper } from './styles';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { StaticQuery, graphql } from 'gatsby';

const CustomToolTip = withStyles(() => ({
  tooltip: {
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
  },
  arrow: {
    color: '#fff',
  },
}))(Tooltip);

const LightToolTip = withStyles(() => ({
  tooltip: {
    color: lightTheme.background,
    backgroundColor: lightTheme.accent,
  },
  arrow: {
    color: lightTheme.accent,
  },
}))(CustomToolTip);

const DarkToolTip = withStyles(() => ({
  tooltip: {
    color: darkTheme.darkColor,
    backgroundColor: darkTheme.accent,
  },
  arrow: {
    color: darkTheme.accent,
  },
}))(CustomToolTip);

export const Skills = ({ theme }) => {
  return (
    <StaticQuery
      query={graphql`
        query ResumeSkillsQuery {
          allResumeJson {
            edges {
              node {
                skills {
                  title
                  src {
                    childImageSharp {
                      gatsbyImageData(width: 60, placeholder: BLURRED)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const skills = data.allResumeJson.edges[0].node.skills;
        return (
          <Wrapper theme={theme}>
            <h4>Skills</h4>
            <SkillsContainer>
              {skills.map((skill) => {
                const image = getImage(skill.src);
                console.log('Skill', skill);
                return (
                  <Skill key={skill.title} theme={theme}>
                    <GatsbyImage image={image} alt={skill.title} />
                    <p>{skill.title}</p>
                  </Skill>
                );
              })}
            </SkillsContainer>
          </Wrapper>
        );
      }}
    />
  );
};
