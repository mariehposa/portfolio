import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(107,147,175,1) 100%, rgba(0,212,255,1) 100%); 
  height: 28rem;
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
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1rem;

    @media (max-width: 500px) {
      font-size: 1.5rem;
      line-height: 0.5rem;
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
  color: #04c2c9;
  align-items: center;

  @media (max-width: 800px) {
    width: 25%;
  }

  @media (max-width: 500px) {
    width: 45%;

    span {
      p {
        font-size: 1.1rem;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    margin: auto;
     
    p {
    font-size: 1.2rem;
    }

    img {
      margin-left: 0.5rem;
    }
  }

  &:hover {
    border-radius:50%;
  }
`;
