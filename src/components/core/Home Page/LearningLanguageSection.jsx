import React from 'react'
import { HighlightText } from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import { CTAbutton } from './CTAbutton'
export const LearningLanguageSection = () => {
  return (
    <div className='mt-[110px]'>
        <div className='flex flex-col gap-5 items-center '>
             <div className='text-4xl font-semibold text-center'>
                Your swiss knife for
                <HighlightText text={"learning any language"} /> 
             </div>
             <div className='text-center text-richblack-600 mx-auto text-base mt-1 w-[70%] font-medium'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
             </div>
             <div className='flex flex-col md:flex-row items-center justify-center mt-8 mx-auto'>
               <img 
                src={know_your_progress}
                alt='know_your_progress'
                className='object-contain -mr-32'
               />
               <img 
                src={compare_with_others}
                alt='compare_with_others'
                className='object-contain'
               />
               <img 
                src={plan_your_lesson}
                alt='plan_your_lesson'
                className='object-contain -ml-32'
               />
             </div>
             <div className='mx-auto mb-[65px]'>
                <CTAbutton active={true} linkto={"/signup"}>Learn More</CTAbutton>
             </div>
        </div>
    </div>
  )
}
