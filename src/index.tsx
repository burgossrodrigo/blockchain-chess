import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Start from '@App/components/start/Start';

ReactDOM.render(
    <Start/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
