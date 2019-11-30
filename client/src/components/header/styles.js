import styled from "styled-components";
import image from "./img/header.jpg";

export const HeaderStyle = styled.div`
  background-image: url(${image});
  background-size: cover;
  height: 30rem;
  position: relative;
  text-align: center;
  padding-top: 15rem;
`;

export const Styledtext = styled.div`
  >p {
    color: white;
    font-size: 2.4rem;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1rem;

    span {
	  color: #e31b6d;
	  font-weight: bolder;
    }
  }
`

export const FancyDiv = styled.div`
display: flex;
  width: 15%;
  padding: 0.2rem 0;
  margin: auto;
  border: 0.15rem solid white;
  color: paleturquoise;
  align-items: center;

  span {
	  display: flex;
	align-items: center;
	margin: auto;

	img {
		margin-left: .5rem;
	}
  }
 	 
  &:hover {
    background: palevioletred
  }
`;
