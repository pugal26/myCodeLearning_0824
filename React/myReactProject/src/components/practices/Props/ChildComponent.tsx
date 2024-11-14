import { useState } from 'react'
import ParentComponent from './ParentComponent';

const ChildComponent = () => {

    const [data, setData] = useState('')

    const handleClick = () => {
        alert(data);
    }

  return (
    <>
        <div>ChildComponent</div>
        <input type='text' value={data} onChange={(event) => setData(event.target.value)}/>

        <ParentComponent onClick={handleClick} />
    </>
  )
}

export default ChildComponent