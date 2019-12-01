import styled from "styled-components";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #444649;

  @media (max-width: 800px
    ) {
    padding: 5rem 1rem;
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
    margin-left: 1.3rem;
    background: #444649;

    @media (max-width: 800px
      ) {
      margin-left: 2rem;
    }
  }
`;

export const StyledProps = styled.div`
  display: flex;
  font-family: "Quicksand", sans-serif;
  text-align: center;

  > div {
    margin: 2rem 0 0 4rem;

    @media (max-width: 800px
      ) {
      margin: 2rem 0 0 1rem;
    }

    img {
      align-self: center;
    }

    h3 {
      font-weight: bold;
    }
  }
`;

export const AboutMe = styled.div`
  display: flex;
  padding: 2rem 0;
`;

export const StyledMe = styled.div`
  width: 45%;
  margin-left: 4rem;
  font-family: "Quicksand", sans-serif;
  text-align: center;

  @media (max-width: 800px
    ) {
    margin-left: 1rem;
  }

  img {
    width: 50%;
    box-shadow: 7px 7px 0px 0px #04c2c9;
  }

  span {
    color: #04c2c9;
  }
`;

export const StyledChart = styled.div`
  width: 55%;
  margin-left: 4rem;

  @media (max-width: 800px
    ) {
    width: 50%;
    margin-left: 1rem;
  }
`;

export const StyledText = styled.p`
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
