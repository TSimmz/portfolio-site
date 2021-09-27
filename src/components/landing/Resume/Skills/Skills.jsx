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
  const renderSkillWithToolTip = (index, name, src, theme) => {
    const image = getImage(src);

    if (theme === 'light') {
      return (
        <LightToolTip key={index} title={name} aria-label={name} arrow>
          <Skill key={index} theme={theme}>
            <GatsbyImage image={image} alt={name} />
          </Skill>
        </LightToolTip>
      );
    }
    return (
      <DarkToolTip key={index} title={name} aria-label={name} arrow>
        <Skill key={index} theme={theme}>
          <GatsbyImage image={image} alt={name} />
        </Skill>
      </DarkToolTip>
    );
  };

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
              {skills.map((skill, index) =>
                renderSkillWithToolTip(index, skill.title, skill.src, theme)
              )}
            </SkillsContainer>
          </Wrapper>
        );
      }}
    />
  );
};
