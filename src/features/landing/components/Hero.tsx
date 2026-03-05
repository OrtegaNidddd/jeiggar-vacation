import HeroImage from "../../../assets/images/hero-image.jpeg";
import Button from "../../../components/ui/Button";
import { heroLandingMock } from "../../../mocks/hero-landing.mock";

export default function Hero() {
    return (
        <section className="pt-8 pb-10">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-(--radius)">

                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImage})` }}
                />

                {/* Overlay suave */}
                <div className="absolute inset-0 bg-(--bg)/45 backdrop-blur-xs" />

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">

                    {/* Badge */}
                    <span className="text-xs tracking-wide bg-blue-100 text-(--primary-700) px-4 py-2 rounded-full font-bold mb-6">
                        {heroLandingMock.badge}H
                    </span>

                    {/* Título */}
                    <h1 className="text-4xl! md:text-5xl! font-bold text-(--text) mb-6!">
                        {heroLandingMock.titlePrimary} 
                        <br />
                        {heroLandingMock.titleSecondary}
                        <span className="text-(--primary-700)">{heroLandingMock.highlight}</span>
                    </h1>

                    {/* Texto */}
                    <p className="max-w-xl text-(--text) font-light">
                        {heroLandingMock.description}
                    </p>

                    {/* Botones */}
                    <div className="mt-6 flex gap-4">
                        <Button>{heroLandingMock.buttons[0].label}</Button>

                        <Button variant={heroLandingMock.buttons[1].variant}>
                            {heroLandingMock.buttons[1].label}
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}