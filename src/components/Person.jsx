import { useSelector, useDispatch } from 'react-redux'
import { addPerson } from '../redux/store_reducer'
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
export default function Person() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const persons=useSelector(state => state.counter.persons);
  const [formValues, setFormValues] = useState({
    id: nanoid(),
    name: '',
    email: '',
    password: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
     dispatch(addPerson(formValues));
    setFormValues({
      id: nanoid(),
      name: '',
      email: '',
      password: '',
    });
  }

  return (
    <div>
      <h2>这里是Person组件,counter的总和是{count}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formValues.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formValues.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formValues.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h3>登录记录</h3>
       {
        persons.length>0
        ?(<ul>
          {persons.map((item,index)=>{
           return(<li key={index}>{item.id}--{item.name}--{item.email}</li>) 
          })}
        </ul>)
        :(<h3>暂时没有记录</h3>)
       }
    </div>

  );
}