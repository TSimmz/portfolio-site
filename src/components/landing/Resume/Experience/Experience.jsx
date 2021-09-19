import React from 'react';
import { Wrapper, Job } from './styles';
import { Row } from '../styles'; // Resume styles

export const Experience = ({ experience, theme }) => {
  return (
    <Wrapper theme={theme}>
      <h4>Experience</h4>
      {experience.map(
        ({ company, location, start, end, position, responsibilities }) => (
          <Job key={start}>
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
              {responsibilities.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
          </Job>
        )
      )}
    </Wrapper>
  );
};
