import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/store_reducer'


export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    const persons=useSelector(state => state.counter.persons);
   
    const [incrementAmount, setIncrementAmount] = useState(1);
    //  输入变化
    const handleIncrementAmountChange = e => {
        setIncrementAmount(Number(e.target.value));
      };

      const handleIncrement = () => {
        dispatch(increment(incrementAmount));
      };
    
      const handleDecrement = () => {
        dispatch(decrement(incrementAmount));
      };
  
      const handleDecrementOdd=()=>{
        if(count%2!==0){
            dispatch(decrement(incrementAmount));
        }
      }
      const handleDecrementAsync=()=>{
        setTimeout(()=>{
            dispatch(decrement(incrementAmount));
        },1000)
            
      }
    return (
        <div>
            <h2>当前的数量是：{count}</h2> 
            <h2> 最近的用户是：{persons.length>0?persons[0].name:'无用户'}</h2>
            <input type="number" value={incrementAmount} onChange={handleIncrementAmountChange} min='1' />
            &nbsp;
            <button onClick={handleIncrement}>增加</button> &nbsp;
            <button onClick={ handleDecrement}>减少</button> &nbsp;
             <button onClick={handleDecrementOdd}>奇数可减</button>&nbsp;
             <button onClick={handleDecrementAsync}>异步减</button>
        </div>
    )
}


