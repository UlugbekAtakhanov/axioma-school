import { Link } from "react-router-dom"
import axiomaHeader from "../../../assets/axioma-header.png"
import { useTranslation } from "react-i18next"

const Container1 = () => {
    const { t } = useTranslation()
    return (
        <div className="h-[450px] sm:h-[642px] bg-[#EFFF04] flex flex-col items-center justify-center px-[20px]">
            <img className="mb-[20px]" src={axiomaHeader} alt="img" />
            <h1 className="text-[20px] lg:text-[28px]  leading-[43px] text-black mb-4 md:mb-8 text-center">{t("home_page.container1.header")}</h1>
            <Link to="#" className="max-w-[250px] md:max-w-[350px] w-full text-black h-[45px] md:h-[62px] border-black transition-all border-2 flex justify-center items-center text-[16px] md:text-[20px] leading-[27px]">
                {t("home_page.container1.linkButton")}
            </Link>
        </div>
    )
}

export default Container1