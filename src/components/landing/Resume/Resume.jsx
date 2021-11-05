import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ResumeSection, DownloadButton, SkillBubble } from './styles';
// import { Education } from './Education/Education';
// import { Experience } from './Experience/Experience';
// import { Skills } from './Skills/Skills';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

// Illustrations
import HeaderWave from 'assets/illustrations/header-waves.svg';
import MidWaves from 'assets/illustrations/mid-waves.svg';
import DownloadArrow from 'assets/icons/download-arrow.svg';
import DevPerson from 'assets/illustrations/dev-person.svg';
import EduPerson from 'assets/illustrations/education-person.svg';

export const Resume = ({ skills, education, workExperience }) => {
  const { theme } = useContext(ThemeContext);
  const { general, frontend, design } = skills;

  const handleClick = () => {};

  return (
    <ResumeSection theme={theme}>
      <DownloadButton onClick={handleClick} theme={theme}>
        <DownloadArrow />
      </DownloadButton>
      <HeaderWave className='header-wave' />
      <h1>Resume</h1>
      <section className='skills-section'>
        <div className='general skills'>
          <h2>General</h2>
          <div className='skills-bubbles'>
            {general.map((skill, index) => {
              const genImage = getImage(skill.src);
              return (
                <SkillBubble key={index}>
                  <GatsbyImage image={genImage} alt={skill.title} />
                </SkillBubble>
              );
            })}
          </div>
        </div>
        <div className='frontend skills'>
          <h2>Frontend</h2>
          <div className='skills-bubbles'>
            {frontend.map((skill, index) => {
              const feImage = getImage(skill.src);
              return (
                <SkillBubble key={index}>
                  <GatsbyImage image={feImage} alt={skill.title} />
                </SkillBubble>
              );
            })}
          </div>
        </div>
        <div className='art'>
          <DevPerson />
        </div>
        <div className='design skills'>
          <h2>Design</h2>
          <div className='skills-bubbles'>
            {design.map((skill, index) => {
              const image = getImage(skill.src);
              return (
                <SkillBubble key={index}>
                  <GatsbyImage image={image} alt={skill.title} />
                </SkillBubble>
              );
            })}
          </div>
        </div>
      </section>
      <MidWaves className='mid-waves' />
      <section className='education-section'>
        <div className='education'>
          <h2 className='edu-school'>{education.school}</h2>
          <h3 className='edu-location'>{education.location}</h3>
          <h3 className='edu-degree'>{education.degree}</h3>
          <h4 className='edu-graduation'>{education.graduation}</h4>
        </div>
        <div className='education-illustration'>
          <EduPerson />
        </div>
      </section>
      <section className='experience-section'></section>
    </ResumeSection>
  );
};

/* <Wrapper theme={theme}>
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
</Wrapper> */
