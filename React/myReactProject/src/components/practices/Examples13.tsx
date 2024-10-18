import { useState } from "react"
import './example.css'

const Example = () => {
    
    const [data, setData] = useState<string>('')
    const [dataList, setDataList] = useState<string[]>([])

       

    const handleClick = () => {
       if (data.trim() !== '') {
        setDataList([...dataList, data])
        setData('');
       }
    }

    const handleDelete = () => {
        const updateDataList = dataList.slice(0, -1)
        setDataList(updateDataList)
    }

    return(
        <div>
            <input type="text" 
                   value={data}
                   onChange={(e) => setData(e.target.value)}
            />

            <button onClick={handleClick}>
                Click
            </button>

            <button onClick={handleDelete}>
                Delete
            </button>
            {dataList.length > 0 ? (
                dataList.map((element, index) => {
                    return (
                        <div key={index}>
                            <p>{element}</p>
                        </div>
                    )
                })
            ) : (
                <p>No other items</p>
            )
                
            }
        </div>
    )

}

export default Example

