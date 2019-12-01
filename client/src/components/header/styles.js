import styled from "styled-components";
import image from "./img/header.jpg";

export const HeaderStyle = styled.div`
  background-image: url(${image});
  background-size: cover;
  height: 30rem;
  position: relative;
  text-align: center;
  padding-top: 15rem;

  @media (max-width: 500px) {
    height: 20rem;
    padding-top: 10rem;
  }
`;

export const Styledtext = styled.div`
  > p {
    color: white;
    font-size: 2.4rem;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1rem;

    @media (max-width: 500px) {
      font-size: 1.5rem;
      line-height: .5rem;
  }

    span {
      color: #e31b6d;
      font-weight: bolder;
    }
  }
`;

export const FancyDiv = styled.div`
  display: flex;
  width: 15%;
  padding: 0.2rem 0;
  margin: auto;
  border: 0.15rem solid white;
  color: paleturquoise;
  align-items: center;

  @media (max-width: 800px) {
    width: 20%;
  }

  @media (max-width: 500px) {
    width: 40%;
  }

  span {
    display: flex;
    align-items: center;
    margin: auto;

    img {
      margin-left: 0.5rem;
    }
  }

  &:hover {
    background: palevioletred;
  }
`;