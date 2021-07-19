import Axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css'





function Emp() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);
  const [newwage, setNewwage] = useState(0)

  const [employee, setEmployee] = useState([]);

  const getData = () => {
    Axios.get('http://localhost:4031/data/employee').then((Response) => {
      setEmployee(Response.data);
    });
  }

  function addEmployee() {
    Axios.post('http://localhost:4031/create', {
      name: name,
      age: age,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployee([
        ...employee,
        //เก็บข้อมูลตัวเก่า
        {
          name: name,
          age: age,
          position: position,
          wage: wage,
        }
      ]);
    });
  }

  // console.log(employee)
  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:4031/update', { wage: newwage, id: id }).then((response) => {
      setEmployee(
        employee.map((val) => {
          return val.id == id ? {
            id: val.id,
            name: val.name,
            position: val.position,
            age: val.age,
            wage: newwage
          } : val
        })
      )
    })
  }

  const deleteEmployeeWage = (id) => {
    Axios.delete(`http://localhost:4031/delete/${id}`).then((response) => {
      setEmployee(
        employee.filter((val) => {
          return val.id != id;
        })
      )
    })
  }


  return (
    <div className="App container">
      <h1>เพิ่มข้อมูลสมาชิก</h1>
      <div className="information">
        <form className="" action="">

          <div className="mb-3">
            <label htmlFor="name" name="name" className="form=label">name</label>
            <input type="text" className="form-control" placeholder="entername" onChange={(event) => {
              setName(event.target.value);
            }}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="age" name="age" className="form=label">age</label>
            <input type="text" className="form-control" placeholder="age" onChange={(event) => {
              setAge(event.target.value);
            }}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="position" name="position" className="form=label">position</label>
            <input type="text" className="form-control" placeholder="position" onChange={(event) => {
              setPosition(event.target.value);
            }}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="wage" name="wage" className="form=label">wage</label>
            <input type="int" className="form-control" placeholder="wage" onChange={(event) => {
              setWage(event.target.value);
            }}></input>
          </div>

          <button className="btn btn-success" onClick={addEmployee}>adddata</button>

        </form>

      </div>



      <div className="data">
        <h1>แสดงข้อมูลสมาชิก</h1>
        <button className="btn btn-primary" onClick={getData}>โชว์สมาชิก</button>
        {employee.map((val, key) => {

          return (
            <div className="data card" key={val.id}>
              <div className="card-body text-left" >
                <p className="card-text" >Name: {val.name}</p>
                <p className="card-text" >Age: {val.age}</p>
                <p className="card-text" >Position: {val.position}</p>
                <p className="card-text" >Salary: {val.wage}</p>

                <div className="d-flex">

                  <input type="number" placeholder="เงินเดือน" style={{ width: "300px" }} className="form-control"
                    onChange={(event) => {
                      setNewwage(event.target.value);
                    }}
                  ></input>

                  <button className="btn btn-warning" onClick={() => { updateEmployeeWage(val.id) }}>Update</button>
                  <button className="btn btn-danger" onClick={() => { deleteEmployeeWage(val.id) }}>Delete</button>

                </div>

              </div>
            </div>
          )
        })}
      </div>



    </div>
  );
}

export default Emp;
