import styled from 'styled-components';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 72px;
  display: flex;
  align-items: center;
`;

export const ContactWrapper = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;

  @media (max-width: 1310px) {
    flex-direction: column;
  }
`;

export const ContactDivider = styled.div`
  @media (max-width: 1310px) {
    height: 0;
    width: 100%;
    margin: 20px 0 40px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;

  @media (max-width: 1310px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form {
    margin: 0;
    width: 20vw;

    @media (max-width: 1310px) {
      width: 40vw;
    }
  }
`;
