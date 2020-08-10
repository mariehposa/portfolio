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
    margin-left: 3rem;
    background: #04c2c9;

    @media (max-width: 800px) {
      margin-left: 1.5rem;
    }

    @media (max-width: 500px) {
      margin-left: 1.5rem;
    }
  }
`;

export const StyledProps = styled.div`
  display: flex;
  font-family: "Quicksand", sans-serif;
  text-align: center;

  > div {
    display: flex;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    > div {
      justify-content: space-around;
      margin-top: 2rem;

      > p {
        font-size: 1.2rem;
        @media (max-width: 500px) {
          font-size: 1.1rem;
        }
      }
    }

    img {
      align-self: center;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export const AboutMe = styled.div`
  display: flex;
  padding: 2rem 0;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledMe = styled.div`
  width: 45%;
  /* margin-left: 4rem; */
  font-family: "Quicksand", sans-serif;
  text-align: center;
  line-height: 2rem;

  @media (max-width: 800px) {
    /* margin-left: 0; */
  }

  @media (max-width: 500px) {
    width: 100%;
    /* margin-left: 0; */
  }

  img {
    width: 50%;
    margin-bottom: 1rem;
    box-shadow: 7px 7px 0px 0px #04c2c9;
  }

  span {
    color: #04c2c9;
  }

  p {
    font-size: 1.2rem;
  }

  > p {
    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
  }
`;

export const StyledChart = styled.div`
  width: 55%;
  margin-left: 4rem;

  @media (max-width: 800px) {
    width: 50%;
    margin-left: 1rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const StyledText = styled.h5`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const HexaTop = styled.div`
  width: 0;
  margin: 0 auto;
  border-bottom: 30px solid #64c7cc;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
`;

export const HexaMid = styled.div`
  width: 104px;
  margin: 0 auto;
  height: 60px;
  background-color: #64c7cc;
`;

export const HexaBottom = styled.div`
  width: 0;
  margin: 0 auto;
  border-top: 30px solid #64c7cc;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
`;
