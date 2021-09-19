import React from 'react';
import { Skill, SkillsContainer, Wrapper } from './styles';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

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

export const Skills = ({ skills, theme }) => {
  const renderImageWithToolTip = (name, icon, theme) => {
    if (theme === 'light') {
      return (
        <LightToolTip key={name} title={name} aria-label={name} arrow>
          <img src={getImage(icon)} alt={name} />
        </LightToolTip>
      );
    }
    return (
      <DarkToolTip key={name} title={name} aria-label={name} arrow>
        <img src={getImage(icon)} alt={name} />
      </DarkToolTip>
    );
  };

  const getImage = (path) => {
    return `${process.env.PUBLIC_URL}/` + path;
  };

  return (
    <Wrapper theme={theme}>
      <h4>Skills</h4>
      <SkillsContainer>
        {skills.map(({ name, icon }) => (
          <Skill key={name} theme={theme}>
            {renderImageWithToolTip(name, icon, theme)}
          </Skill>
        ))}
      </SkillsContainer>
    </Wrapper>
  );
};
