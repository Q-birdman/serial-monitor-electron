import React from 'react';

export default class Console extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          value:0
        }
    }
    
    render() {
        return (
          <div>
            閾値
            <input type="value" ref="inputText" defaultValue='0'></input>
            <button>submit</button>
          </div>
        );
      }
}