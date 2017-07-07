import React from 'react';
import ReactDOM from 'react-dom';
import MobileSelect from '../src/index';
import Style from '../src/_index';

var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  testFunc() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <button onClick={this.testFunc.bind(this)}>测试方法</button>{this.state.show ? <MobileSelect /> : undefined}
        <button onClick={this.testFunc.bind(this)}>测试方法</button>{this.state.show ? <MobileSelect /> : undefined}
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);