import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const ResumeSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(33, 100px);

  .header-wave {
    grid-column: 1 / -1;
    grid-row: 1 / 4;
    z-index: -1;
    object-fit: cover;
  }

  h1 {
    grid-column: 6 / 8;
    grid-row: 2 / 2;
    z-index: 1;
    font-size: 3rem;
    margin-bottom: 3rem;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  .resume-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skills-section {
    padding: 1rem;
    grid-column: 4 / 10;
    grid-row: 4 / 10;
    display: grid;
    grid-gap: 1.5rem;
    grid-template:
      'general frontend' 1fr
      'art design' 1fr /
      1fr 1fr;

    .skills {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        margin-bottom: 1rem;
      }
    }

    .general {
      grid-area: general;
    }

    .frontend {
      grid-area: frontend;
    }

    .art {
      grid-area: art;
      display: grid;
      place-items: center;
    }

    .design {
      grid-area: design;
    }

    .skills-bubbles {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .mid-waves {
    grid-column: 1 / -1;
    grid-row: 13 / 17;
    z-index: -1;
    object-fit: cover;
  }

  .education-section {
    grid-column: 4 / 10;
    grid-row: 11 / 17;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};

    .education {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .edu-school {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .edu-location {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      .edu-degree {
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 0.5rem;
      }
      .edu-graduation {
        font-size: 1.2rem;
        font-style: italic;
      }
    }

    .education-illustration {
    }
  }
`;

export const DownloadButton = styled.button`
  width: 60px;
  aspect-ratio: 1;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  position: fixed;
  top: 8rem;
  right: 4rem;

  background: ${({ theme }) =>
    theme === 'light' ? lightTheme.accent : darkTheme.accent};

  transition: 250ms;

  svg {
    width: 65%;
    aspect-ratio: 1;
  }

  path {
    fill: #fff;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const SkillBubble = styled.div`
  width: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #8c8c8c;
  margin: 0.4rem;
  display: grid;
  place-items: center;
`;

// Add background-images to this
// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   padding-top: 60px;
// `;

// export const ResumeWrapper = styled.section`
//   max-width: 1200px;
//   margin: 30px auto;
//   padding: 0 60px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 440px) {
//     margin: 1rem auto;
//     padding: 0 20px;
//   }

//   h4 {
//     margin: 10px auto 30px;
//     font-size: 2rem;
//     font-weight: bold;
//     letter-spacing: 1px;
//     color: ${({ theme }) =>
//       theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
//     transition: 500ms;
//   }

//   p {
//     font-size: 1.5rem;
//     margin-bottom: 0.5rem;
//     color: ${({ theme }) =>
//       theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
//     transition: 500ms;

//     @media (max-width: 770px) {
//       font-size: 1.1rem;
//     }
//     @media (max-width: 440px) {
//       font-size: 1rem;
//     }
//   }

//   ul {
//     margin-top: 1rem;
//   }

//   li {
//     font-size: 1.2rem;
//     margin-left: 50px;
//     margin-bottom: 20px;
//     color: ${({ theme }) =>
//       theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
//     transition: 500ms;

//     @media (max-width: 440px) {
//       font-size: 0.9rem;
//       margin-left: 10px;
//     }
//   }
// `;

// export const ResumeList = styled(motion.div)`
//   margin: 0.25rem 1rem;
// `;

// export const ResumeBody = styled.div`
//   display: flex;
//   flex-direction: row;

//   @media (max-width: 1310px) {
//     flex-direction: column;
//   }
// `;

// export const Column = styled.div`
//   flex: 1;
//   margin: 0px 30px;
// `;

// export const Row = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 0.3rem;
//   font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
// `;
