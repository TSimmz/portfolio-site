import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Card } from './styles';
import EducationIcon from 'assets/icons/education.svg';
import ProfessionalIcon from 'assets/icons/professional.svg';
import SmileIcon from 'assets/icons/smile.svg';

export const AboutCard = ({ cardContext }) => {
  const { theme } = useContext(ThemeContext);

  const renderIcon = (title) => {
    switch (title) {
      case 'Education':
        return <EducationIcon className='card-icon' />;
      case 'Professional':
        return <ProfessionalIcon className='card-icon' />;
      case 'Free Time':
        return <SmileIcon className='card-icon' />;
      default:
        return '❓';
    }
  };

  return (
    <Card theme={theme}>
      <div className='image-border'>
        <div className='image-background'>{renderIcon(cardContext.title)}</div>
      </div>
      <h3 className='card-header'>{cardContext.title}</h3>
      <p className='card-text'>{cardContext.text}</p>
    </Card>
  );
};
