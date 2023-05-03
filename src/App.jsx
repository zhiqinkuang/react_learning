import React from 'react'
import './App.css';
// import Footer from './components/Footer';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
// import List from './components/List';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '写代码', done: true }]
    }
    this.getInput = this.getInput.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
  }
  // 全部清除完成的项目
  handleDeleteAll=()=>{
    const  todos  = this.state.todos;
    const newtodos = todos.filter((todo) => {
      return todo.done !== true;
    })
    this.setState({
      todos: newtodos
    });
  }
  //全部进行勾选切换
  handleAllCheck=(newdone)=>{
    const  todos  = this.state.todos;
    const  newtodos=todos.map((todo)=>{
      return {...todo,done:newdone}
    })
    this.setState({
      todos:newtodos
    })
  }
  // 删除某一项
  handleDelete=(id)=>{
    const  todos  = this.state.todos;
    const newtodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    this.setState({
      todos: newtodos
    });
  }
  //更新勾选
  handleupdate(id, done) {
    const { todos } = this.state;
    const newtodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      }
      else return todo;
    })
    this.setState({ todos: newtodos });
  }
  // 更新输入框输入
  getInput(todoObj) {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <h2>欢迎使用todolist</h2>
        <div className="todo-wrap">
          <Header getInput={this.getInput}/>
          <List todos={todos} handleupdate={this.handleupdate} handleDelete={this.handleDelete}/>
          <Footer todos={todos} handleAllCheck={this.handleAllCheck} handleDeleteAll={this.handleDeleteAll}/>
        </div>
      </div>
    )
  }
}