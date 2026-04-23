import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const App = ()=> {
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message1'},
    {message: 'message1'}
  ])

  let [title, setTitle] = useState('');

  const addMessage = (newMessage: string) => {
    setMessage([{message: newMessage}, ...message])
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  return (
    <div className="App">
        <Input setTitle={setTitle} title={title} />
        <Button name={'+'} callBack={callBackButtonHandler}/>
        {message.map((el, index) => {
          return (
            <div key={index}>{el.message}</div>
          )
        })}
    </div>
  );
}
