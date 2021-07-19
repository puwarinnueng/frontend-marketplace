import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import N from '../images/n.jpg'

function Home() {
    const [users, setUsers] = useState([]);
    console.log(users)
    // const [result ,setResult] = useState([]);
    // const API = 'http://localhost:4031/employee';

    // useEffect(()=>{
    //     loadData();
    // },[]);

    // const loadData = async () =>{
    //     const response = await fetch(API);
    //     const data = await response.json();
    //     setResult(data);
    //     console.log(data.name)
    // }

    useEffect(() => {
        fetch('http://localhost:4031/employee')
            .then(respnse => respnse.json())
            .then(datas => setUsers(datas))
            .catch(err => console.log(err))
    }, [])

    // useEffect(() => {
    //   Axios.get('http://localhost:4001/employee')
    //     .then(datas => setUsers(datas.data))
    //     .catch(err => console.log(err))
    // }, [])
    return (
        <div>
            {users.map((data) => {
                return (
                    <div className="data card" align="center" key={data.id}>

                        <a className="card-body text-left" href="/employee">
                            <div>
                                <a href="/employee"> {data.name} </a>
                                {/* <img src={N} /> */}
                            </div>
                            <a href="/employee">{data.age}</a>
                            <p className="card-text" >Name: {data.name}</p>
                        </a>

                        <form>
                            <div>
                                ชื่อ <input type="text" value={data.name} onChange={(event) => {
                                    setUsers(event.target.value);
                                }}></input>
                            </div>

                        </form>
                    </div>
                )

            })}
        </div>
    )
}

export default Home;
