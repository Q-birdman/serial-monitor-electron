import React from 'react';
import Console from './components/Console';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div><Console /></div>
    );
  }
}
