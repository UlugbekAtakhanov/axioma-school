import React from 'react'
import { useTranslation } from 'react-i18next'

import img11 from "../../../assets/container6/img11.png"
import img22 from "../../../assets/container6/img22.png"
import img33 from "../../../assets/container6/img33.png"
import img44 from "../../../assets/container6/img44.png"

const Container6 = () => {
    const { t } = useTranslation()
    return (
        <div className='py-12 sm:!p-[80px] main-container'>
            <h1 className='text-[20px] mb-20 sm:text-[45px] font-semibold text-[#303030] text-center'>
                {t("home_page.container6.header")}
            </h1>

            <div className='grid grid-cols-1 items-end justify-center gap-[100px]  md:grid-cols-[repeat(2,280px)] lg:grid-cols-2'>
                <div className=''>
                    <img className='w-full' src={img11} alt="img" />
                </div>
                <div className=''>
                    <img className='w-full' src={img22} alt="img" />
                </div>
                <div className=''>
                    <img className='w-full' src={img33} alt="img" />
                </div>
                <div className=''>
                    <img className='w-full' src={img44} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Container6