import SimpleCard from "../../../components/ui/SimpleCard";
import { travelCategoriesLandingMock } from "../../../mocks/travel-categories-landing.mock";


export default function TravelCategories() {
    return (
        <div className="flex flex-col mx-auto max-w-6xl items-start gap-4 py-12">
            <h2 data-aos="fade-right" className="text-2xl font-bold">{travelCategoriesLandingMock.title}</h2>
            <p data-aos="fade-right" className="text-sm text-(--text-muted)! ">{travelCategoriesLandingMock.subtitle}</p>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {travelCategoriesLandingMock.categories.map((category, index) => (
                    <SimpleCard
                        key={index}
                        title={category}
                        to={travelCategoriesLandingMock.to}
                        description={travelCategoriesLandingMock.descriptions[index]}
                        icon={travelCategoriesLandingMock.icon?.[index]}
                    />
                ))}
            </div>
        </div>
    );
}