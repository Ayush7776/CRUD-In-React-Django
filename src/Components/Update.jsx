import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Update = () => {
  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  let history=useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      let id = localStorage.getItem("id")
      let data = await fetch(`http://127.0.0.1:8000/items/${id}`)
      let json = await data.json()
      setname(json.name)
      setdescription(json.description)
    }
    fetchData()
  }, [])
  const updatedata = async () => {
    let id = localStorage.getItem("id")
    await fetch(`http://127.0.0.1:8000/items/${id}/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        description: description,
      })
      })      
      history("/")
  }
  return (
    <>
      <form className='container w-50 my-5'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} className="form-control" />
        </div>
      </form>
      <div className='text-center'>
                <button onClick={updatedata} className='w-50 btn btn-dark'>Update</button>
            </div>

    </>
  )
}

export default Update