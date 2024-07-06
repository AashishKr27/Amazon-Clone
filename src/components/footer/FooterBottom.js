import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-gray-950 py-8'>
        <div className='max-w-5xl mx-auto'>
            <div className='w-full grid grid-cols-7 gap-3 place-content-center text-gray-400'>
                {
                    footerBottomItem.map((item)=>(
                        <div className='group cursor-pointer' key={item._id}>
                            <h3 className='w-24 font-semibold text-[14px] group-hover:underline text-[#DDD] leading-3 mb-[2px]'>{item.title}</h3>
                            <p className='w-24 tracking-tight text-[14px] text-[#999] group-hover:underline leading-3'>{item.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FooterBottom