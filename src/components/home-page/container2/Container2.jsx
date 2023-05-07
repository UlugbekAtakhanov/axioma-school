import React from 'react'
import img1 from "../../../assets/home-page-container2/img1.jpg"
import img2 from "../../../assets/home-page-container2/img2.jpg"

const Container2 = () => {
    return (
        <div className=' main-container !p-[30px] sm:!p-[60px] lg:!p-[100px]'>
            <h1 className='text-[20px] sm:text-[30px] md:text-[45px] font-semibold text-[#303030] text-center mb-[20px]'>УДОБНЫЕ ФОРМАТЫ ОБУЧЕНИЯ</h1>

            <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(335px,1fr))] gap-[30px]'>

                <div className=''>
                    <div className='mb-[30px]'>
                        <img className='w-full' src={img1} alt="img" />
                    </div>
                    <h3 className='mb-[20px] text-[22px] text-[#303030] font-semibold'>В ГРУППЕ</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className=''>
                    <div className='mb-[30px]'>
                        <img className='w-full' src={img2} alt="img" />
                    </div>
                    <h3 className='mb-[20px] text-[22px] text-[#303030] font-semibold'>ИНДИВИДУАЛЬНО</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

            </div>

        </div>
    )
}

export default Container2