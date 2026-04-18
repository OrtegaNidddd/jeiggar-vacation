import Button from "@/components/ui/Button";
import HeroCard from "@/components/common/HeroCard";
import { heroLandingMock } from "@/mocks/landing";
import { getPublicStorageUrl } from "@/lib/storage";
import {
    HERO_RESERVATION_TEMPLATE,
    WHATSAPP_NUMBER,
    sendWhatsAppMessage,
} from "@/lib/whatsapp";

export default function Hero() {
    const mainHeroImageUrl = getPublicStorageUrl("main-hero.webp", "images");

    const handleReserveNow = () => {
        sendWhatsAppMessage({
            phone: WHATSAPP_NUMBER,
            message: HERO_RESERVATION_TEMPLATE,
        });
    };

    return (
        <section className="pt-8 pb-10">
            <HeroCard
                imageSrc={mainHeroImageUrl}
                imageAlt="Paisaje principal de Jeiggar Vacation"
                imageProps={{
                    width: 1920,
                    height: 1080,
                    sizes: "(max-width: 768px) 100vw, 1152px",
                    loading: "lazy",
                    fetchPriority: "high",
                    decoding: "async",
                }}
                rootClassName="mx-auto max-w-6xl shadow-xl"
                overlayClassName="bg-(--bg)/45 backdrop-blur-xs"
                contentClassName="mx-auto flex max-w-2xl flex-col items-center text-center"
                badgeClassName="mb-1 border-transparent bg-blue-100 text-(--primary-700)"
                titleClassName="mb-1 text-(--text)!"
                descriptionClassName="text-(--text)"
                titleAosDelay={120}
                descriptionAosDelay={220}
                actionsAosDelay={220}
                badge={heroLandingMock.badge}
                title={
                    <>
                        {heroLandingMock.titlePrimary}
                        <br />
                        {heroLandingMock.titleSecondary}
                        <span className="text-(--primary-700)">{heroLandingMock.highlight}</span>
                    </>
                }
                description={heroLandingMock.description}
                actions={
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button to={heroLandingMock.buttons[0].to} variant={heroLandingMock.buttons[0].variant}>
                            {heroLandingMock.buttons[0].label}
                        </Button>

                        <Button onClick={handleReserveNow} variant={heroLandingMock.buttons[1].variant}>
                            {heroLandingMock.buttons[1].label}
                        </Button>
                    </div>
                }
            />
        </section>
    );
}
