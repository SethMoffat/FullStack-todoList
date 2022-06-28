import React, { useState } from 'react'

function Main() {

    const [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [list, setList] = useState([])

    return (
        <div className='Main'>
            <form>
                <input type ="text" placeholder='task'></input>
                <select>
                    <option defaultValue disabled selected>category</option>
                    <option value='chores'>chores</option>
                    <option value = 'errands'>errands</option>
                    <option value='work'>work</option>
                </select>
                <button type ='submit'>Add</button>
            </form>

        </div>
    )
    }

export default Main