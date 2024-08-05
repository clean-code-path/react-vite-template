import styled from '@emotion/styled';

import { OneTodo } from '../components';

function Main() {
  return (
    <>
      <S.Container>
        <OneTodo />
        <OneTodo />
        <OneTodo />
      </S.Container>
    </>
  );
}

export { Main };

const S = {
  Container: styled.div`
    color: blue;
    font-family: 'Pretendard';
  `,
};
