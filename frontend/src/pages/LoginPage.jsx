import { useState } from "react"
import assets from "../assets/assets"

const LoginPage = () => {

  const [currState, setCurrState]= useState("Sign up")
  const [fullName, setFullName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [bio, setBio]= useState("")
  const [isDataSubmitted, setIsDataSubmitted]= useState(false)


  return (
    <div className="min-h-screen bg-cover bg-center flex items-center
    justify-center gap-10 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl ">
      
      {/* left */}
      <img src={assets.logo_big} className="w-[min(30vw,250px)]" alt="" />

      {/* right */}

      <form className="border-2 bg-white/8 text-white border-gray-500 p-6
      flex flex-col gap-6 rounded-lg shadow-lg">
        <h2 className="font-medium text-2xl flex justify-between items-center ">
          {currState}
          <img src={assets.arrow_icon} className="w-5 cursor-pointer" alt="" />
        </h2>

        {currState === "Sign up" && !isDataSubmitted && (
          <input onChange={(e)=> setFullName(e.target.value) }
          value={fullName }  
          type="text" className="p-2 border border-gray-500 rounded-md
          focus:outline-none "  placeholder="Full Name" required />
        )}

        {!isDataSubmitted && (
          <>
          <input onChange={(e)=> setEmail(e.target.value) }
          value={email} type="email" className="p-2 border
          border-gray-500 rounded-md focus:outline-none focus:ring-2 "
          placeholder="Email Address" required />

          <input onChange={(e)=> setPassword(e.target.value) }
          value={password} type="password" className="p-2 border
          border-gray-500 rounded-md focus:outline-none focus:ring-2 "
          placeholder="Password" required />
          </>
        )}

        {currState === "Sign up" && !isDataSubmitted && (
          <textarea onChange={(e)=> setBio(e.target.value) }
          value={bio} className="p-2 border
          border-gray-500 rounded-md focus:outline-none
           focus:ring-2 focus:ring-indigo-500 "
          placeholder="Provide a short bio.."  ></textarea>
        )}

       </form>

    </div>
  )
}

export default LoginPage