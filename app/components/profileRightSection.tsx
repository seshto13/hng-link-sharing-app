import React from 'react'
import ImageUpload from './imageUpload'
import ProfileForm from './profileForm'
import ButtonSave from './buttonSave'

const profileRightSection = () => {
  return (
    <div className="flex flex-col justify-center md:absolute left-[512px] top-[80px] w-[90%] md:w-[738px]  bg-white p-4">
      <header className="text-[32px] font-bold leading-[150%] text-zinc-800 flex-grow ">
      Profile Details
      </header>
      <p className="text-base font-light">
      Add your details to create a personal touch to your profile.
      </p>
      <ImageUpload />
      <br />
   <ProfileForm /> 
   <br />
<hr className='border-1 border-gray-200'/>
   <ButtonSave />
<br />
    
     
    </div>
  )
}

export default profileRightSection