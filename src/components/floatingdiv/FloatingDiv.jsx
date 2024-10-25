import React from 'react'

function FloatingDiv({image,text1,text2,second,...rest}) {
  return (
    <div className={`${second ? 'floating-2' : 'floating-1'} floating w-52 flex py-2 px-2 gap-2 rounded-md bg-white shadow-box items-center justify-around`}>
        <img className='w-12' src={image}></img>
        <span>{text1} <br/> {text2}</span>
    </div>
  )
}

export default FloatingDiv