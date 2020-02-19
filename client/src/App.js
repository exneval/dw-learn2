import React, { Component } from "react";

import { Alert } from "react-bootstrap";

// const Identity = ({ name }) => {
//   console.log("im here at first");
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("I'm here at componentDidMount FunC");
//   }, []);

//   const handleClick = (e, isDec) => {
//     e.preventDefault();
//     if (!isDec) {
//       setValue(value + 1);
//     } else {
//       setValue(value - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={event => handleClick(event, false)}>INCREMENT</button>
//       <button onClick={event => handleClick(event, true)}>DECREMENT</button>
//       <h1>{value}</h1>
//     </div>
//   );
// };

// class Identity extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0
//     };
//     console.log("I'm here at constructor");
//   }

//   componentDidMount() {
//     console.log("I'm here at componentDidMount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.value !== prevState.value) {
//       console.log("previous : " + prevState.value);
//       console.log("now : " + this.state.value);
//     }
//   }

//   handleClick = (e, isDec) => {
//     e.preventDefault();
//     if (!isDec) this.setState({ value: this.state.value + 1 });
//     else this.setState({ value: this.state.value - 1 });
//   };

//   render() {
//     // const { name } = this.props;
//     console.log("I'm here at render");
//     return (
//       <div>
//         <button onClick={event => this.handleClick(event, false)}>
//           INCREMENT
//         </button>
//         <button onClick={event => this.handleClick(event, true)}>
//           DECREMENT
//         </button>
//         <h1>{this.state.value}</h1>
//       </div>
//     );
//   }
// }

// class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: ["makan", "minum", "mandi"],
//       value: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({ value: e.target.value });
//   };

//   handleAddTodo = e => {
//     const { todos, value } = this.state;
//     e.preventDefault();
//     todos.push(value);
//     // this.setState({ todos: [...this.state.todos, this.state.value] });
//     this.setState({ todos, value: "" });
//   };

//   handleRemTodo = (e, index) => {
//     const { todos } = this.state;
//     e.preventDefault();
//     todos.splice(index, 1);
//     this.setState({ todos });
//   };

//   render() {
//     const { todos, value } = this.state;
//     return (
//       <div>
//         <ul>
//           {todos.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item}
//                 <button onClick={event => this.handleRemTodo(event, index)}>
//                   Remove
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//         <input
//           value={value}
//           onChange={this.handleChange}
//           placeholder="Add todo here ..."
//           autoComplete="off"
//         />
//         <button onClick={this.handleAddTodo}>+ Add Todo</button>
//       </div>
//     );
//   }
// }

class ReactBS extends Component {
  render() {
    const { name, onAdd } = this.props;
    return (
      <>
        <p>{name}</p>
        {/* <Button style={{ marginLeft: 30 }} variant="primary">
          Primary
        </Button>
        <Button style={{ marginLeft: 30 }} variant="danger">
          Danger
        </Button> */}
        <button onClick={onAdd}>Add Data</button>
      </>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      visible: false
    };
  }
  handleAddData = () => {
    this.setState({ data: this.state.data + 1, visible: !this.state.visible });
  };
  render() {
    const name = "Budi";
    return (
      <>
        <p>{this.state.data}</p>
        {this.state.visible && (
          <div style={{ padding: 10 }}>
            <Alert variant="primary">
              This is a primary alert—check it out!
            </Alert>
          </div>
        )}
        <ReactBS name={name} onAdd={this.handleAddData} />
      </>
    );
  }
}

export default App;
