import React, { useState } from "react";
import styled, { css } from "styled-components";

const BlackFont = css`
  color: black;
`;

const Button = styled.button`
  padding: 6px 12px;
  color: white;.
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #74b9ff;
  :hover {
    background-color: #99c6f5;
  }
`;

export default Button;
type RedButtonProps = {
  clicked: boolean
}
// const RedButton = styled(Button)`
//   background-color: #f53e3e;
//   :hover {
//     background-color: #ff7268;
//   }

//   ${props => (props.clicked ? BlackFont : "")}
// `;

// function App() {
//   const [clicked, setClicked] = useState(false);

//   const onClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <>
//       <Button>click</Button>
//       <RedButton clicked={clicked} onClick={onClick}>
//         click
//       </RedButton>
//     </>
//   );
// }
// // ---------------------------------
// type activeType = {
//   active: boolean;
// };
// const CustomContainer = styled.div<activeType>`
//     background: ${props => {
//     return props.theme.color.main;
//   }};

//     color: ${props => {
//     if (props.active) {
//       return "white";
//     }
//     return "#eee";
//   }};
//   `;

// const App = () => {
//   return (
//     <CustomContainer active>
//       <span>styled-components css test</span>
//     </CustomContainer>
//   );


// };