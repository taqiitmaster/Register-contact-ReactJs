import React,{useState} from 'react'

function App() {
    const[name,SetName]=useState("")
    const[phone,SetPhone]=useState("")
    const[email,SetEmail]=useState("")
    const[register,SetRegister]=useState([])
    const handleClick=(e)=>{
        e.preventDefault()
        const contact={
            name,
            phone,
            email
        }
        SetRegister([...register,contact])
        console.log(contact)
        

    }


  return (
    <>
    <div className="main w-[80rem] h-[30rem] bg-black flex gap-11 pt-16 pl-20 mt-10 ml-10 absolute">
        <div className="box w-96 h-80 bg-gray-600">
            <h1 className='text-center text-2xl text-white pt-4'>Enter Your Info Below</h1>
            <div className="in pl-14 pt-8">
  <input className='border border-black w-64 pt-5' type="text"placeholder='Name' onChange={(e)=>SetName(e.target.value)}  />
  <input className='border border-black w-64 mt-5 pt-5' type="text"placeholder='email' onChange={(e)=>SetPhone(e.target.value)}/>
  <input className='border border-black w-64 mt-5 pt-5' type="text"placeholder='phone:no'  onChange={(e)=>SetEmail(e.target.value)} /></div>
  <div className="btn text-center pt-4">
  <button className='border border-black w-24 h-10 text-white bg-black hover:bg-white hover:text-black' onClick={handleClick}>Submit</button></div></div>
  
  </div>
  {
  register.map((rev)=>{
        return(
          <>
          <div className="box1 w-[40rem] h-[20rem] bg-gray-600 flex justify-between text-white absolute ml-[35rem] mt-[7rem] ">
    
  
          <div className=" bg-gray-300 flex gap-10 px-10 py-10 rounded-md">
  <div className="text-black">
    <h1 className='border-b-2 border-black'>Name</h1>
  </div>
  <div className="text-black">
    <h1 className='border-b-2 border-black'>Phone Number</h1>
  </div>
  <div className="text-black">
    <h1 className='border-b-2 border-black'>Email</h1>
  </div>
</div>


          <div className=" bg-gray-300 w-[20%] rounded-3xl px-4 text-center py-5 mt-5 m-auto text-black ">
          <h1>{rev.name}</h1>
          <h2>{rev.phone}</h2>
          <h3>{rev.email}</h3>
          <button className='bg-red-600 rounded-lg px-2 text-gray-200 '  onClick={()=>deleteMe(rev)} >Delete this review</button>
          </div></div>
          </>
        )

      })}
    
    </>
  )}


export default App
