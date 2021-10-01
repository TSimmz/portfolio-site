import styled from 'styled-components';
import { motion } from 'framer-motion';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactWrapper = styled.section`
  padding: 0 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactDivider = styled.div`
  height: clamp(600px, 30vw + 1rem, 45vh);
  margin: 0 40px;

  @media (max-width: 768px) {
    height: 0;
    width: 100%;
    margin: 1rem 0 2rem;
  }
`;

export const FormWrapper = styled(motion.div)`
  display: flex;
  width: min(50%, 730px);

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  form {
    margin: 0;
    width: max(50%, 550px);

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;
