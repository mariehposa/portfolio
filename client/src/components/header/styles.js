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
  p {
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
  width: 15%;
  margin: 0 auto;
  padding: 0.6rem 0;
  /* z-index: auto; */
  border: 0.15rem solid white;
  color: paleturquoise;
  &:hover {
    background: palevioletred
  }
`;

  /* div {
        poscenter(m=50%, n=m, tf=)
	position: absolute;
	left: 50%;
	top: 
	transform translate(-@left, -@top) tf

b64 = "https://image.flaticon.com/icons/png/128/109/109617.png"

@import url('https://fonts.googleapis.com/css?family=Montserrat')

body // Personal fix, seems to create lines when Chrome is in +1920px
	background #2f2f31
	transform rotateX(0.003deg)
	height 100vh
	color #f

a
	poscenter()
	color #cecd24
	text-decoration none
	font-size 2em
	display inline-block
	font-family Montserrat
	text-transform uppercase
	padding 0.5em 2em
	border 2px solid #cecd24
	transition .02s .2s cubic-bezier(.1, 0, .1, 1)
	
	&::before
		content ""
		display inline-block
		position absolute
		top 0
		left 0
		right 100%
		bottom 0
		background #cecd24
		transition .3s .2s cubic-bezier(.1, 0, .1, 1), left .3s cubic-bezier(.1, 0, .1, 1)
		z-index -1

	&::after
		content ""
		display inline-block
		background-image url(b64)
		position absolute
		top 0
		left calc(100% - 3em)
		right 3em
		bottom 0
		background-size 1.5em
		background-repeat no-repeat
		background-position center
		transition right .3s cubic-bezier(.1, 0, .1, 1)
	
	&:hover
		padding 0.5em 3.5em 0.5em 0.5em
		
		&::before
			left calc(100% - 3em)
			right 0
			transition .3s cubic-bezier(.1, 0, .1, 1), left .3s .2s cubic-bezier(.1, 0, .1, 1)
		
		&::after
			right 0
			transition right .3s .2s cubic-bezier(.1, 0, .1, 1)
    } */

