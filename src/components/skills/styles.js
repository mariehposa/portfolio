import styled from "styled-components";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 800px) {
    padding: 5rem;
  }

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

export const StyledDiv = styled.div`
  line-height: 0.5rem;
  align-self: center;

  h2 {
    font-size: 2.5rem;
    font-family: "Changa", sans-serif;
  }

  div {
    width: 5rem;
    height: 0.2rem;
    margin-left: 1.2rem;
    background: #04c2c9;

    @media (max-width: 800px) {
      margin-left: 1rem;
    }

    @media (max-width: 500px) {
      margin-left: 1rem;
    }
  }
`;

export const StyledTotalSkills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledSkill = styled.div`
  display: flex;
  font-family: "Quicksand", sans-serif;
  text-align: center;
  margin: 2rem 3rem;
  display: unset;
`;