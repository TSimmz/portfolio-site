import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, ResumeWrapper, ResumeList } from './styles';
import { Divider, PageTitle } from 'components/common';
import resume from 'data/Resume/resume.json';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';
import { Skills } from './Skills/Skills';
import { motion } from 'framer-motion';

export const Resume = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  const resumeChildDuration = 0.4;
  const resumeChildDelay = resumeChildDuration;
  return (
    <Wrapper theme={theme}>
      <ResumeWrapper id='resume' theme={theme}>
        <PageTitle
          as={motion.h1}
          className='center'
          theme={theme}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: 'easeIn',
          }}>
          Resume
        </PageTitle>
        <Divider horizontal theme={theme} />
        <ResumeList
          key={'education'}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: resumeChildDuration,
            ease: 'easeIn',
            delay: resumeChildDelay * 2,
          }}>
          <Education education={resume.education} theme={theme} />
        </ResumeList>
        <ResumeList
          key={'education'}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: resumeChildDuration,
            ease: 'easeIn',
            delay: resumeChildDelay,
          }}>
          <Experience experience={resume.workExperience} theme={theme} />
        </ResumeList>
        <ResumeList
          key={'education'}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: resumeChildDuration,
            ease: 'easeIn',
          }}>
          <Skills theme={theme} />
        </ResumeList>
      </ResumeWrapper>
    </Wrapper>
  );
};
