import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ResumeWrapper } from './styles';
import { Divider, PageTitle } from 'components/common';
import { Fade } from '@material-ui/core';
import resume from 'data/Resume/resume.json';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import { Skills } from './Skills/Skills';

export const Resume = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <ResumeWrapper id='resume' theme={theme}>
          <PageTitle theme={theme} className='center'>
            Resume
          </PageTitle>
          <Divider horizontal theme={theme} />
          <Education education={resume.education} theme={theme} />
          <Experience experience={resume.workExperience} theme={theme} />
          <Skills theme={theme} />
        </ResumeWrapper>
      </Wrapper>
    </Fade>
  );
};
