import React from 'react';
import { Wrapper, Job } from './styles';
import { Row } from '../styles'; // Resume styles

export const Experience = ({ experience, theme }) => {
  return (
    <Wrapper theme={theme}>
      <h4>Experience</h4>
      {experience.map(
        (
          {
            clearance,
            company,
            location,
            start,
            end,
            position,
            responsibilities,
          },
          index
        ) => {
          if (clearance) {
            return (
              <Job key={index}>
                <Row italic={false}>
                  <p>{clearance}</p>
                  <p>{start}</p>
                </Row>
              </Job>
            );
          }
          return (
            <Job key={index}>
              <Row italic={false}>
                <p>{company}</p>
                <p>{location}</p>
              </Row>
              <Row italic={true}>
                <p>{position}</p>
                <p>
                  {start} - {end}
                </p>
              </Row>
              <ul>
                {responsibilities &&
                  responsibilities.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
              </ul>
            </Job>
          );
        }
      )}
    </Wrapper>
  );
};
