import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor is called");
    this.state = {
      count: 0,
    };
  }

  // componentWillMount(){
  //   console.log("Component will mount")
  // }

  // static getDerivedStateFromProps(props){
  //   console.log(props)
  //   console.log("Component will receive props")
  // }
  // componentDidMount(){
  //   console.log("Component did Mount")
  // }

  // shouldComponentUpdate(){
  //   console.log("Should Component update")
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps,prevState){
  //   console.log("Prev Props",prevProps)
  //   console.log("Prev State",prevState)
  //   console.log("getSnapshotBeforeUpdate is called")
  // }
  // componentDidMount(){
  //   console.log("Component did mount")
  // }

  // componentWillUnmount(){
  //   console.log("Component will unmount")
  // }

  // componentWillMount() {
  //   this.setState(
  //     (state) => ({
  //       count: (state.count = 5),
  //     }),
  //     () => {
  //       console.log(this.state.count);
  //     }
  //   );
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count > 25) return false;
  //   return true;
  // }
  // incrementCount = () => {
  //   this.setState((state) => ({
  //     count: state.count + 5,
  //   }));
  // };
  // decrementCount = () => {
  //   this.setState((state) => ({
  //     count: state.count - 1,
  //   }));
  // };
  render() {
    return (
      <div className="counterWrapper">
        <h1 className="counter">Counter</h1>
        <p className="count">{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default App;
