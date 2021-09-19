import React from 'react';
import { Wrapper, Details } from './styles';
import { Row } from '../styles'; // Resume styles

export const Education = ({ education, theme }) => {
  return (
    <Wrapper theme={theme}>
      <h4>Education</h4>
      <Details>
        <Row italic={false}>
          <p>{education.school}</p>
          <p>{education.location}</p>
        </Row>
        <Row italic={true}>
          <p>{education.degree}</p>
          <p>{education.graduation}</p>
        </Row>
      </Details>
    </Wrapper>
  );
};
