import styled from "styled-components";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #444649;
`;

export const StyledDiv = styled.div`
  line-height: 0.5rem;
  align-self: center;

  h2 {
    font-size: 2.5rem;
    font-family: 'Changa', sans-serif;
  }

  div {
    width: 5rem;
    height: 0.2rem;
    margin-left: 1.3rem;
    background: #444649;
  }
`;

export const StyledProps = styled.div`
    display: flex;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    /* font-size: 1.2rem; */

    div {
        margin: 2rem 0 0 4rem;

        img{
            align-self: center;
        }
        
        h3{
            font-weight: bold;
        }
    }
`
