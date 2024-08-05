import { Global } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import { globalStyles } from '../styles/globalStyles.ts';

function Layout() {
  return (
    <>
      <Global styles={globalStyles} />
      <Outlet />
    </>
  );
}

export { Layout };
