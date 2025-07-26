import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineimage from "../../../assets/Images/TimelineImage.png"
const timeline=[
    {
        Logo:Logo1,
        heading:"Leadership",
        Description:"Fully committed to the success company"
    },
    {
        Logo:Logo2,
        heading:"Responsibility",
        Description:"Students will always be our top priority"
    },
    {
        Logo:Logo3,
        heading:"Flexibility",
        Description:"The ability to switch is an important skills"
    },
    {
        Logo:Logo4,
        heading:"Solve the problem",
        Description:"Code your way to a solution"
    }
]

export const TimelineSection = () => {
  return (
    <div>
        <div className='flex flex-row items-center gap-14 mt-2'>
          <div className='flex flex-col w-[45%] gap-14 h-fit'>
            {
                timeline.map((element,index)=>{
                    return(
                        <div className='flex flex-row gap-6 ' key={index}>
                           <div className='h-[50px] w-[50px] bg-pure-greys-5 flex items-center'>
                            <img src={element.Logo}/>
                           </div>
                           <div className='flex flex-col'>
                            <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                            <div className='text-base'>{element.Description}</div>
                           </div>
                        </div>
                    )
                })
            }
          </div>
          <div className='relative shadow-blue-200'>
           <img src={timelineimage}
            alt='timelineImage'
            className='shadow-white h-fit object-cover'/>
            <div className='absolute bg-caribbeangreen-700 text-white uppercase flex py-6
              left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7 '>
                <p className='text-3xl font-bold '>10</p>
                <p className='text-caribbeangreen-300 text-sm '>Years of experience</p>
              </div>
              <div className='flex flex-row gap-5 items-center px-7'>
                <p className='text-3xl font-bold '>250</p>
                <p className='text-caribbeangreen-300 text-sm '>types of courses</p>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}
