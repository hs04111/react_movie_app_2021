import React from 'react';


class App extends React.Component {

  state = {
    count: 0
  }

  add = () => {
    this.setState((current) =>{return {count: current.count + 1}}) // setState를 통해 state 내부의 값을 동적으로 변화시킬 수 있다.
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1})) // react에서는 setState안에 current라는 매개변수를 통해 this.state를 대신할 수 있다.
  }

  render(){
    return <div>
      <h1>
        The Number is : {this.state.count}
      </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
