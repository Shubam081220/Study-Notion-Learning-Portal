import React from 'react'
import instructorImage from "../../../assets/Images/Instructor.png"
import { HighlightText } from './HighlightText'
import { CTAbutton } from './CTAbutton'
import { FaArrowRight } from 'react-icons/fa'
export const InstructorSection = () => {
  return (
    <div className='mt-14 mb-4'>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20'>
            {/* Image */}
            <div className='w-full lg:w-[50%]'>
            <img
                src={instructorImage}
                alt='Instructor'
                className='shadow-white mx-auto'
            />
            </div>

            {/* Text Content */}
            <div className='w-full lg:w-[50%] flex flex-col gap-8 text-center lg:text-left'>
            <div className='flex flex-col font-bold text-3xl lg:text-4xl'>
                <p>Become an</p>
                <HighlightText text={"Instructor"} />
            </div>
            <div className='font-medium text-richblack-300 text-base px-4 lg:px-0'>
                Instructors from around the world teach millions of students on StudyNotion. 
                We provide the tools and skills to teach what you love.
            </div>
            <div className='w-fit mx-auto lg:mx-0'>
                <CTAbutton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-2'>
                    Start teaching Today
                    <FaArrowRight />
                </div>
                </CTAbutton>
            </div>
            </div>
        </div>
        </div>

  )
}
