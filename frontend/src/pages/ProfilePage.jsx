import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import assets from "../assets/assets"


const ProfilePage = () => {

  const [selectedImg, setSelectedImg]= useState(null)
  const [name, setName]= useState("Martin")
  const [bio, setBio]= useState("Hey there, I am using QuickChat")
  const navigate= useNavigate()


  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex
    items-center justify-center ">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300
      border-2 border-e-gray-600 flex items-center justify-between max-sm:flex-col-reverse
      rounded-lg ">
        <form className="flex flex-col gap-5 p-10 flex-1">
          <h3 className="text-lg">Proifle Details</h3>
          <label htmlFor="avatar" className="flex items-center gap-3 cursor-pointer" >
            <input onChange={(e)=>setSelectedImg(e.target.files[0])} type="file" id="avatar" accept=".png, .jpg, jpeg" hidden />
            <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon } alt="" 
            className={`  `} />
          </label>
        </form>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default ProfilePage