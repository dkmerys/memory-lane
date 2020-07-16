import styled from 'styled-components';

export const Input = styled.input`
	font-family: "Lucida Console", Monaco, monospace;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: cornsilk;
  border: none;
  border-radius: 50vw;
  ::placeholder {
    color: palevioletred;
  }
`;

export const Button = styled.button`
  box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family: "Lucida Console", Monaco, monospace;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
	margin: 4px;
`
export const Banner = styled.h1`
font-family: "Lucida Console", Monaco, monospace;
font-size: 40px;
letter-spacing: 2px;
word-spacing: 2px;
color: #4C4C4C;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: small-caps;
text-transform: none;`

export const LargeText = styled.h3`
font-family: "Lucida Console", Monaco, monospace;
font-size: 25px;
letter-spacing: 2px;
word-spacing: 2px;
color: #4C4C4C;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: small-caps;
text-transform: none;`

export const MediumText = styled.h5`
font-family: "Lucida Console", Monaco, monospace;
font-size: 18px;
letter-spacing: 2px;
word-spacing: 2px;
color: #4C4C4C;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: small-caps;
text-transform: none;`