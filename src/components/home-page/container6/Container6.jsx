import React from 'react'
import { useTranslation } from 'react-i18next'

import img1 from "../../../assets/container6/img1.png"
import img2 from "../../../assets/container6/img2.png"
import img3 from "../../../assets/container6/img3.png"
import img4 from "../../../assets/container6/img4.png"

const Container6 = () => {
    const { t } = useTranslation()
    return (
        <div className='py-12 sm:!p-[80px] main-container'>
            <h1 className='text-[20px] sm:text-[30px] md:text-[45px] font-semibold text-[#303030] text-center mb-[20px]'>
                {t("home_page.container6.header")}
            </h1>

            <div className='grid grid-cols-1 items-center justify-center gap-[50px] md:grid-cols-[repeat(2,280px)] lg:grid-cols-2'>
                <div className=''>
                    <img className='w-full' src={img1} alt="img" />
                </div>
                <div className=''>
                    <img className='w-full' src={img2} alt="img" />
                </div>
                <div className=''>
                    <img className='w-full' src={img3} alt="img" />
                </div>
                <div className=''>
                    <img className='w-full' src={img4} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Container6