import React, { useState } from 'react'
import InputComponent from './Components/InputComponent'
import ButtonsComponent from './Components/ButtonsComponent'
import TableComponent from './Components/TableComponent'
import SelectComponent from './Components/SelectComponent'
import SwitchComponent from './Components/SwitchComponent'
import './App.css';
export default function App() {
// const [text,setText] = useState([])
const [inpVal, setInpVal] = useState("")
const [inpVal2, setInpVal2] = useState("")
const [inpVal3, setInpVal3] = useState("")
const [inpVal4, setInpVal4] = useState("")
const [active, setActive] = useState(false);
const [tableData, setTableData] = useState([])
const [changeTheme, setChangeTheme] = useState(false)



                      //F.name Input Function
const handleChange = (e)=>{
    setInpVal(e.target.value)
    console.log(e.target.value)
}
                   // L.Name Input Function
const handleChange2 = (e)=>{
    setInpVal2(e.target.value)
    console.log(e.target.value)
}
                   // Age Input Function
const handleChange3 = (e)=>{
    setInpVal3(e.target.value)
    console.log(e.target.value)
}
                  // Institute Input Function
const handleChange4 = (e)=>{
    setInpVal4(e.target.value)
    console.log(e.target.value)
}
                   // Button Function that entered Table data
const handleClick = ()=>{
  console.log("Click")
  const rows = { id: tableData.length + 1, 
    firstName: inpVal, 
    lastName: inpVal2, 
    age: inpVal3, 
    institute: inpVal4, 
    isActive:active };
    setTableData([...tableData, rows])
    setInpVal("")
    setInpVal2("")
    setInpVal3("")
    setInpVal4("")
    setActive(false)
  }
                              // Select Function
  const handleSelect = (e) => {
    setActive(e.target.value);
    console.log(e.target.value)
  };
                             // Customizable Theme
const handleSwitch =()=>{
setChangeTheme(!changeTheme)
console.log("Click")
}

const customizableTheme = changeTheme ? 'dark-mode': 'light-mode';



  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'institute', headerName: 'Institute', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 70 },
    { field: 'isActive', headerName: 'Active?', type: 'boolean', width: 90 },
    
  ];
  return (
    <> 
    <div className={customizableTheme}>
    <SwitchComponent
    checked={changeTheme}
    onChange={handleSwitch}
    />
    <div className='container'>

      <h1 className='heading'>Data Entry Form</h1>
      <div className='input-group'>
        <InputComponent onChange={handleChange} value={inpVal} label='First Name' darkMode={changeTheme} />
        <InputComponent onChange={handleChange2} value={inpVal2} label='Last Name' darkMode={changeTheme}/>
        <InputComponent onChange={handleChange3} value={inpVal3} label='Age' type='number' darkMode={changeTheme}/>
        <InputComponent onChange={handleChange4} value={inpVal4} label='Institute' darkMode={changeTheme}/>
        <SelectComponent
          onChange={handleSelect}
          value={active}
          label='Approve'
          options={[
            { label: 'InActive', value: false },
            { label: 'Active', value: true },
          ]}
          darkMode={changeTheme}
        />
      </div>
      <div className='buttons-container my-3'>
        <ButtonsComponent label='Add Data' onClick={handleClick} />
      </div>
      <h2 className='table-heading'>Data Table</h2>
      <TableComponent columns={columns} rows={tableData} darkMode={changeTheme}/>
    </div>
    </div>
    </>
  );
}