import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    let history = useNavigate()
    const [name, setName] = useState("")
    const [description, setDesc] = useState("")

    const postdata = async () => {
        await fetch('http://127.0.0.1:8000/items/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                description: description,
            })
        })
        history("/");

    }
    return (
        <>
            <form className='container w-50 my-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} className="form-control" />
                </div>
            </form>
            <div className='text-center'>

                <button onClick={postdata} className='w-50 btn btn-dark'>Create</button>
            </div>

        </>
    )
}

export default Create