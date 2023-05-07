import Carousel1 from "../../components/home-page/carousel1/Carousel1"
import Carousel2 from "../../components/home-page/carousel2/Carousel2"
import Container1 from "../../components/home-page/container1/Container1"
import Container2 from "../../components/home-page/container2/Container2"

const HomePage = () => {
    return (
        <div>

            <Container1 />

            <Carousel1 />

            <Carousel2 />

            <Container2 />

            <div className="h-screen"></div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </div>
    )
}

export default HomePage