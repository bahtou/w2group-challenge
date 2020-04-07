import './rhlConfig';

import 'Styles/fonts.css';
import 'Styles/normalizer.css';
import 'Styles/global.css';

import React from 'react';
import { render } from 'react-dom';
import LandingPage from './LandingPage';


render(
  <LandingPage />,
  document.getElementById('root-entry')
);
