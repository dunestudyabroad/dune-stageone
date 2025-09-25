import FormComponent from '@/components/FormComponent/FormComponent'
import Layout from '@/components/Layout/Layout'
import React from 'react'

const page = () => {
  return (
 <Layout>

     <section className='bg-[#FDFAFE] py-10' id="form-section">
        <h1 className='text-2xl md:text-[44px] text-center py-5 md:py-10 font-bold text-gray-900 leading-snug'>Contact Us</h1>
        <FormComponent isbg={true}/>
      </section>
 </Layout>
  )
}

export default page
