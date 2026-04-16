import { placeImages } from "@/mocks/shared/place-images.mock";
import Button from "@/components/ui/Button";
import { heroLandingMock } from "@/mocks/landing";
import {
    HERO_RESERVATION_TEMPLATE,
    WHATSAPP_NUMBER,
    sendWhatsAppMessage,
} from "@/lib/whatsapp";

export default function Hero() {
    const handleReserveNow = () => {
        sendWhatsAppMessage({
            phone: WHATSAPP_NUMBER,
            message: HERO_RESERVATION_TEMPLATE,
        });
    };

    return (
        <section className="pt-8 pb-10">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg">

                {/* Imagen principal: no lazy, porque suele ser LCP */}
                <img
                    src={placeImages.heroImages.mainHero}
                    alt="Paisaje principal de Jeiggar Vacation"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay suave */}
                <div className="absolute inset-0 bg-(--bg)/45 backdrop-blur-xs" />

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">

                    {/* Badge */}
                    <span
                        data-aos="fade-down"
                        className="text-xs tracking-wide bg-blue-100 text-(--primary-700) px-4 py-2 rounded-full font-bold mb-6"
                    >
                        {heroLandingMock.badge}
                    </span>

                    {/* Título */}
                    <h1
                        data-aos="fade-down"
                        data-aos-delay="120"
                        className="text-4xl! md:text-5xl! font-bold text-(--text) mb-6!"
                    >
                        {heroLandingMock.titlePrimary} 
                        <br />
                        {heroLandingMock.titleSecondary}
                        <span className="text-(--primary-700)">{heroLandingMock.highlight}</span>
                    </h1>

                    {/* Texto */}
                    <p
                        data-aos="fade-up"
                        data-aos-delay="220"
                        className="max-w-xl text-(--text) font-light"
                    >
                        {heroLandingMock.description}
                    </p>

                    {/* Botones */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="220"
                        className="mt-6 flex gap-4"
                    >
                        <Button to={heroLandingMock.buttons[0].to} variant={heroLandingMock.buttons[0].variant}>
                            {heroLandingMock.buttons[0].label}
                        </Button>

                        <Button onClick={handleReserveNow} variant={heroLandingMock.buttons[1].variant}>
                            {heroLandingMock.buttons[1].label}
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}