import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>        
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customer can easily discover ,explore</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel nihil veniam corporis quod aliquam non rerum et provident sunt? Voluptas, culpa nemo suscipit maxime aperiam dolore veritatis eum error eos iusto quas debitis aliquam id odio, consequuntur, molestias quis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut inventore sequi repudiandae eveniet expedita perspiciatis, nihil id aperiam culpa mollitia dolores voluptas sunt nulla non. Voluptates blanditiis velit natus iure eaque nam alias rem ipsum, placeat illum culpa eum?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-28 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora molestiae ratione blanditiis asperiores aperiam perferendis enim at accusamus est eum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-28 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora molestiae ratione blanditiis asperiores aperiam perferendis enim at accusamus est eum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-28 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora molestiae ratione blanditiis asperiores aperiam perferendis enim at accusamus est eum.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About