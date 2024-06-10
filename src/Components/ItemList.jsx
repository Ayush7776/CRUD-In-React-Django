import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const ItemList = () => {
    const [data, setdata] = useState([])
    let history=useNavigate();

    useEffect(() => {
        const fetchdata = async () => {
            let url = await fetch('http://127.0.0.1:8000/items/')
            let json = await url.json()
            setdata(json)
        }
        fetchdata()
    }, [])

    const HandleDelete = async (id)=>{
        await axios.delete(`http://127.0.0.1:8000/items/${id}`)
        setdata(data.filter(item => item.id !== id));
        history("/")
    }

    const handleUpdate = (id) => {
        localStorage.setItem("id",id)
        console.log(localStorage.getItem("id"))
    };
    return (
        <>
        <div className='container w-75 my-5'>
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button className='btn btn-danger' onClick={()=>{HandleDelete(item.id)}}>Remove</button></td>
                            <td><Link to='/update' className='btn btn-primary' onClick={() => handleUpdate(item.id)}>Update</Link></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
                    <div className='text-center'>

                <Link  to='/create' className='w-50 btn btn-dark'>Create</Link>
                    </div>



        </div>
        </>
    )
}

export default ItemList