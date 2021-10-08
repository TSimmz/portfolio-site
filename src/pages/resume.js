import * as React from 'react';
import { graphql } from 'gatsby';
import { Resume } from 'components/landing';

const ResumePage = ({ data }) => {
  const resumeData = data.allResumeJson.edges[0].node;
  const skills = resumeData.skills;
  const education = resumeData.education;
  const workExperience = resumeData.workExperience;

  console.log(skills.general);
  return (
    <Resume
      skills={skills}
      education={education}
      workExperience={workExperience}
    />
  );
};

export default ResumePage;

export const query = graphql`
  query ResumeQuery {
    allResumeJson {
      edges {
        node {
          skills {
            general {
              title
              src {
                childImageSharp {
                  gatsbyImageData(width: 45, placeholder: BLURRED)
                }
              }
            }
            frontend {
              title
              src {
                childImageSharp {
                  gatsbyImageData(width: 45, placeholder: BLURRED)
                }
              }
            }
            design {
              title
              src {
                childImageSharp {
                  gatsbyImageData(width: 45, placeholder: BLURRED)
                }
              }
            }
          }
          education {
            school
            location
            graduation
            degree
          }
          workExperience {
            clearance
            company
            location
            position
            responsibilities
            start
            end
          }
        }
      }
    }
  }
`;
