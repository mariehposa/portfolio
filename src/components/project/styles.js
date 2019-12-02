import styled from "styled-components";
import { Slide } from "react-slideshow-image";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 500px) {
    padding: 5rem 1rem;
  }
`;

export const StyledDiv = styled.div`
  line-height: 0.5rem;
  align-self: center;

  h2 {
    font-size: 2.5rem;
    font-family: "Changa", sans-serif;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }

  div {
    width: 5rem;
    height: 0.2rem;
    margin-left: 9rem;
    background: #04c2c9;

    @media (max-width: 800px) {
      margin-left: 11rem;
    }

    @media (max-width: 500px) {
      margin-left: 4.5rem;
    }
  }
`;

export const CustomSlide = styled(Slide)`
  width: 39rem;
  height: 28rem;
  margin: 4rem 0;

  @media only screen and (max-width: 500px) {
    width: 20rem;
    height: 20rem;
    margin: 4rem 0;
  }
`;

export const StyledSlide = styled.div`
  img {
    height: 28rem;

    @media (max-width: 500px) {
      height: 18rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
  }

  dt {
    color: #e31b6d;
  }
`;
