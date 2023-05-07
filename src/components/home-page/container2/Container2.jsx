import React from 'react'
import img1 from "../../../assets/home-page-container2/img1.jpg"
import img2 from "../../../assets/home-page-container2/img2.jpg"
import { useTranslation } from 'react-i18next'

const Container2 = () => {
    const { t } = useTranslation()
    return (
        <div className=' main-container !p-[30px] sm:!p-[60px] lg:!p-[100px]'>
            <h1 className='text-[20px] sm:text-[30px] md:text-[45px] font-semibold text-[#303030] text-center mb-[20px]'>
                {t("home_page.container2.header")}
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(335px,1fr))] gap-[30px]'>

                <div className=''>
                    <div className='mb-[30px]'>
                        <img className='w-full' src={img1} alt="img" />
                    </div>
                    <h3 className='mb-[20px] text-[22px] text-[#303030] font-semibold'>
                        {t("home_page.container2.card1.header")}
                    </h3>
                    <p>
                        {t("home_page.container2.card1.text")}
                    </p>
                </div>
                <div className=''>
                    <div className='mb-[30px]'>
                        <img className='w-full' src={img2} alt="img" />
                    </div>
                    <h3 className='mb-[20px] text-[22px] text-[#303030] font-semibold'>
                        {t("home_page.container2.card2.header")}
                    </h3>
                    <p>
                        {t("home_page.container2.card2.text")}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Container2