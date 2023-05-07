import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer1 = () => {
	const { t } = useTranslation()
	return (
		<div className="bg-[#151515]">

			<div className="main-container py-[80px] xl:px-[150px]">

				<div className="bg-white p-6 sm:p-[50px] rounded-3xl sm:grid grid-cols-2 gap-4">
					<div className='mb-8 text-center sm:text-left'>
						<h1 className='text-[#000] mb-3 text-[30px] lg:text-[38px] font-bold '>{t("home_page.footer1.header")}</h1>
						<p className='text-[#000]'>{t("home_page.footer1.text")}</p>
					</div>
					<form className='grid gap-4 lg:grid-cols-2'>
						<input className='w-full rounded-lg lg:col-span-2' type="text" placeholder={t("home_page.footer1.form.placeholder1")} />
						<input className='w-full rounded-lg' type="text" placeholder={t("home_page.footer1.form.placeholder2")} />
						<input className='w-full rounded-lg' type="email" placeholder={t("home_page.footer1.form.placeholder3")} />
						<p className='underline text-xs text-center sm:text-left hover:text-light-blue-500 cursor-pointer'>{t("home_page.footer1.form")}</p>
						<button className='bg-customYellow text-[#000] font-semibold py-5 rounded-2xl'>{t("home_page.footer1.form.button")}</button>
					</form>
				</div>

			</div >

		</div >
	)
}

export default Footer1