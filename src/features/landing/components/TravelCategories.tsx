import SimpleCard from "../../../components/cards/SimpleCard";
import { travelCategoriesLandingMock } from "../../../mocks/travel-categories-landing.mock";


export default function TravelCategories() {
    return (
        <div className="flex flex-col mx-auto max-w-6xl items-left gap-4 py-12">
            <h2 className="text-2xl font-bold">{travelCategoriesLandingMock.title}</h2>
            <p className="text-sm text-(--text-muted)! ">{travelCategoriesLandingMock.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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