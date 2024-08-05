import './App.css';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { globalStyles } from './styles/globalStyles.ts';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <S.Container>Default Theme</S.Container>
    </>
  );
}

export default App;

const S = {
  Container: styled.div`
    color: blue;
    font-family: 'Pretendard';
  `,
};
