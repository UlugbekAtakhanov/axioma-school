import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import logos from "../../../assets/companyLogos.png"

const Container4 = () => {
    const { t } = useTranslation()
    return (
        <div className='main-container'>
            <h1 className='text-[20px] sm:text-[30px] md:text-[45px] font-semibold text-[#303030] text-center mb-[20px]'>
                {t("home_page.container4.header")}
            </h1>
            <div className=''>
                <img className='w-full' src={logos} alt="img" />
            </div>
        </div>
    )
}

export default Container4