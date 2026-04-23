import { useState, ChangeEvent } from 'react';

type FullInputPropsType = {
  addMessage: (addMessage: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
  let [title, setTitle] = useState('');
  const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
  setTitle(event.target.value)
  }

  const onClickButtonHundler = () => {
    props.addMessage(title);
    setTitle('');
  }

  return (
    <div>
        <input value={title} onChange={ onchangeInputHandler }/>
        <button onClick={ onClickButtonHundler }>+</button>
      </div>
  )
}