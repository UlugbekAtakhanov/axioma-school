import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneIcon } from "@heroicons/react/24/solid"

const Footer2 = () => {
    return (
        <div className='bg-[#151515]'>

            <div className='main-container py-5 sm:!p-[50px] grid gap-8 items-start sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>

                <div className='grid sm:grid-cols-1 gap-2'>
                    <h3 className='text-[20px] sm:col-span-1 text-white mb-4'>Курсы</h3>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>КОМПЬЮТЕРНАЯ ГРАММОТНОСТЬ</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>3DS MAX & AUTOCAD</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>ВЕБ ПРОГРАММИРОВАНИЕ</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>FOUNDATION</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>PYTHON</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>BACK-END</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>PRO DESIGN</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>ANDROID & IOS РАЗРАБОТКА</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>IT-ENGLISH</Link>
                </div>

                <div className='grid sm:grid-cols-1 gap-2'>
                    <h3 className='text-[20px] sm:col-span-1 text-white mb-4'>О центре AXIOMA LINE</h3>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>Бесплатный открытый урок</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>Стажировка</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>Контакты</Link>
                </div>

                <div className='grid sm:grid-cols-1 gap-2'>
                    <h3 className='text-[20px] sm:col-span-1 text-white mb-4'>Поддержка</h3>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>Написать менеджеру</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>Заявка на консультацию</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>Инструкция ZOOM</Link>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>Жалобы и пожелания</Link>
                </div>

                <div className='grid sm:grid-cols-1 gap-2'>
                    <h3 className='text-[20px] sm:col-span-1 text-white mb-4'>Наши андреса:</h3>
                    <Link to="#" className='text-xs text-white/60 hover:text-white'>г.Наманган, ул. Алищера Навои дом 62 </Link>
                    <h1 className='text-white flex gap-2 items-center mt-20 text-[25px]'>
                        <PhoneIcon className='w-8' />
                        95 300 11 99
                    </h1>
                </div>

            </div>

        </div>
    )
}

export default Footer2