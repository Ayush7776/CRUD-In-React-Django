import React, { useEffect, useState } from 'react';
// import axios from 'axios';
const Form = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async()=>{
      let  url = await fetch('http://127.0.0.1:8000/api')
      let json= await url.json()
      setData(json)
      
    }
    fetchdata();
  }, []);
  return (
    <>
      {data.map(item => (
        <div key={item.id}>
          <table border={"1px"}>
            <tr>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{item.City}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  )
};

export default Form;