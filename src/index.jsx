import React from 'react';
import { render } from 'react-dom';
import Main from './components/templates/main';

// eslint-disable-next-line no-undef
const rootElement = document.querySelector('#root');

render(<Main />, rootElement);
