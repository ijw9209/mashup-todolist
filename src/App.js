// #1
// import React from 'react';
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background : #e9ecef;
//   }
//   `;
// const App = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <div>안녕하세요</div>
//     </>
//   );
// };

// export default App;


// #2
// import React from 'react';
// import styled, { css } from 'styled-components';

// const Circle = styled.div`
//   width : 5rem;
//   height : 5rem;
//   background : ${props => props.color || 'black'};
//   border-radius : 50%;
//   ${props =>
//     props.huge &&
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;


// const App = () => {
//   return <Circle color="blue" huge />
//     ;
// };

// export default App;

// #3

// import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import Button from './components/Button';

// const AppBlock = styled.div`
//   width : 512px;
//   margin: 0 auto;
//   margin-top : 4rem;
//   border : 1px solid black;
//   padding : 1rem;

// `

// const App = () => {
//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           blue: '#228be6',
//           gray: '#495057',
//           pink: '#f06595'
//         }
//       }}
//     >
//       <AppBlock>
//         <Button>BUTTON</Button>
//       </AppBlock>
//     </ThemeProvider>
//   );
// };

// export default App;

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }

`

const App = () => {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
};

export default App;