import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
// import radium,{StyleRoot} from 'radium';

class App extends Component {
  state = {
    users:[
      {username: 'vru'},
      {username: 'sachin'},
      {username: 'mandar'}
    ],
    person:[
    {'name': 'vru', 'age': 23},
    {'name': 'sachin', 'age': 34},
    {'name': 'mandar', 'age': 4}],
    buttonName: 'Show Persons',
    showPersons: false
  }
  

  changeName = (newName) =>{
      
      this.setState({
       person: [{'name': newName, 'age': 44},
       ...this.state.person.slice(1)
      ]
      });
      console.log(" change name :: " + this.state.buttonName);
  }

  

  
  
  showPersonsHandler = () =>{
    this.setState({
      showPersons : !this.state.showPersons
    });
  }
  changeNameHandler = (event, index) =>{
    const persons = [...this.state.person];
    const p = {
      ...this.state.person[index]
    };
    p.name = event.target.value;
    persons[index] = p;
    // persons[index] = {
    //   'name': event.target.value, 'age': 44
    // };
    this.setState({person: persons});
    // this.setState({
    //   person: [{'name': event.target.value, 'age': 44},
    //    ...this.state.person.slice(1)
    //   ],
    //   // users:[
    //   //   {username: event.target.value},
    //   //   ...this.state.users.slice(1)
    //   // ]
    // });
    // console.log(" change name :: " + this.state.buttonName);
}

deletePersonHandler = (index) => {
  // const personIndex = this.state.person.findIndex( p => {
  //   return p.id == id;
  // })
  
  // const p1 = Object.assign({}, this.state.person[index]);
  const persons = [...this.state.person];
  persons.splice(index,1);
  this.setState({person: persons});
}

  render() {
    let person = null;
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'blue'
      // }
    };
    const classes = [];
    
    if(this.state.showPersons === true){
      person = (
        <div>
        {this.state.person.map( (element, index) => {
          return (<Person 
            name={element.name} 
            key={index}
            changed={(event) => this.changeNameHandler(event, index)}
            handler={this.deletePersonHandler.bind(this,index)}  
            age={element.age}></Person>)
        }  
        )}
      </div> 
      )
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    if(this.state.person.length <= 2 ) {
      classes.push('red');
    }

    if(this.state.person.length <= 1) {
      classes.push('red');
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1> Hi I am react app</h1>
        <p className={classes.join(" ")}> This is really working</p>
        <button  style={style} onClick={this.showPersonsHandler}> {this.state.buttonName}</button>
        {person}
      </div>
    );

    // <UserInput handler ={this.changeNameHandler} val={this.state.users[0].username}></UserInput>
    //     <UserOutput username={this.state.users[0].username}> fsdsdf sdfsdf sfsdf </UserOutput>
    //     <UserOutput username={this.state.users[1].username} > qwe qwe qwe qwe qw</UserOutput>
    // 
  }
}

export default App;

// const app = props => {

//   const [personsState, setPersonsState] = useState(
//     {
//       person:[
//       {'name': 'vru', 'age': 23},
//       {'name': 'sachin', 'age': 34},
//       {'name': 'mandar', 'age': 4}],
//       buttonName: 'Change Name'
//     }
//   );

//   const [stateObj, setOtherState] = useState({buttonName: 'Change Name'});

//   const changeName = () =>{
      
//     setPersonsState({
//      person: [{'name': 'vrushali', 'age': 44},
//      ...personsState.person.slice(1)
//     ]
//     });
//     console.log( personsState);
//   };
  
//     return (
//       <div className="App">
//         <h1> Hi I am react app</h1>
//         <button onClick={changeName.bind}> {stateObj.buttonName}</button>
//         <Person name={personsState.person[0].name} handler={changeName} age={personsState.person[0].age}></Person>
//         <Person name={personsState.person[1].name} age={personsState.person[1].age}> My hobbies: reading</Person>
//         <Person name={personsState.person[2].name} age={personsState.person[2].age}></Person>
//       </div>
//     );
  
// }

// export default app;
