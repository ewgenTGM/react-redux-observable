// test-utils.jsx
import React, {ReactChildren} from 'react';
import {render as rtlRender} from '@testing-library/react';
import {Provider} from 'react-redux';
import {setupStore} from '../Store/Store';

type WrapperProps = {
  children: ReactChildren;
};

const render = (ui: React.ReactElement, store = setupStore(), {...renderOptions} = {}) => {
  function Wrapper({children}: WrapperProps) {
    return <Provider store={store}>{children}</Provider>;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

// re-export everything
export * from '@testing-library/react';
// override render method
export {render};
