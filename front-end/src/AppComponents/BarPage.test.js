import React from 'react';
import ReactDOM from 'react-dom';
import BarPage from './BarPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BarPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
