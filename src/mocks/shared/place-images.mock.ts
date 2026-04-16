import DefaultDestinationImage from '@/assets/images/destinations/default-destination.webp'

// LOGOS
import MainLogo from '@/assets/images/logos/main-logo.webp'
import Isologo from '@/assets/images/logos/isologo.webp'

// HERO IMAGES
import MainHeroImage from '@/assets/images/main-hero.webp'

// SERVICES
import GlobalNetworkImage from '@/assets/images/services/global-network.webp'
import SafeTravelImage from '@/assets/images/services/safe-travel.webp'
import TeamExpertsImage from '@/assets/images/services/team-experts.webp'
import TicketsImage from '@/assets/images/services/tickets.webp'
import TouristServicesImage from '@/assets/images/services/tourist-services.webp'
import WorldImage from '@/assets/images/services/world.webp'
import TransportTransferImage from '@/assets/images/services/transport/traslado.webp'
import TransportVehicleRentalImage from '@/assets/images/services/transport/alquiler-vehiculos.webp'
import RegionUSAImage from '@/assets/images/services/regions/bandera_usa.webp'
import RegionCanadaImage from '@/assets/images/services/regions/bandera_canada.webp'
import RegionAustraliaImage from '@/assets/images/services/regions/bandera_australia.webp'
import RegionEuropeImage from '@/assets/images/services/regions/europa.webp'
import RegionAsiaImage from '@/assets/images/services/regions/asia.webp'
import RegionMexicoImage from '@/assets/images/services/regions/bandera_mexico.webp'
import AssistanceHealthImage from '@/assets/images/services/assistance/asistencia-salud.webp'
import AssistanceTransferImage from '@/assets/images/services/assistance/asistencia-traslado.webp'
import AssistanceCancellationImage from '@/assets/images/services/assistance/asistencia-cancelacion.webp'
import AssistanceLuggageImage from '@/assets/images/services/assistance/asistencia-equipaje.webp'
import AssistanceDocumentationImage from '@/assets/images/services/assistance/asistencia-documentacion.webp'
import AssistancePetsImage from '@/assets/images/services/assistance/asistencia-mascotas.webp'
import AssistanceCovidImage from '@/assets/images/services/assistance/asistencia-covid.webp'
import AssistanceAdditionalImage from '@/assets/images/services/assistance/asistencia-adicional.webp'
import AssistanceIntegralImage from '@/assets/images/services/assistance/asistencia-integral.webp'
import RequirementVisaImage from '@/assets/images/services/requirements/visa.webp'
import RequirementPassportAndIdImage from '@/assets/images/services/requirements/passport-id.webp'
import RequirementYellowFeverImage from '@/assets/images/services/requirements/vacuna-fiebre-amarilla.webp'
import RequirementCovidImage from '@/assets/images/services/requirements/vacuna-covid.webp'
import RequirementMigrationFormImage from '@/assets/images/services/requirements/formulario-migracion.webp'
import RequirementIdImage from '@/assets/images/services/requirements/documento-identidad.webp'
import RequirementCarnetCovidImage from '@/assets/images/services/requirements/carnet-covid.webp'

//AMAZONAS
import AmazonasImage from '@/assets/images/destinations/amazonas/amazonas.webp'

// PEREIRA
import EjeCafeteroImage from '@/assets/images/destinations/pereira/eje-cafetero.webp'

//SANTA MARTA
import SantaMartaImage from '@/assets/images/cities/santa-marta.webp'
import ParqueTayronaImage from '@/assets/images/destinations/santa-marta/parque-tayrona.webp'
import CiudadPerdidaImage from '@/assets/images/destinations/santa-marta/ciudad-perdida.webp'
import SierraNevadaImage from '@/assets/images/destinations/santa-marta/sierra-nevada.webp'

//CARTAGENA
import CartagenaImage from '@/assets/images/cities/cartagena.webp'
import CiudadAmuralladaImage from '@/assets/images/destinations/cartagena/ciudad-amurallada.webp'
import islasRosarioImage from '@/assets/images/destinations/cartagena/islas-rosario.webp'

//MEDELLIN
import MedellinImage from '@/assets/images/cities/medellin.webp'
import Comuna13Image from '@/assets/images/destinations/medellin/comuna-13.webp'
import ParqueArviImage from '@/assets/images/destinations/medellin/parque-arvi.webp'

// BOGOTA
import BogotaImage from '@/assets/images/cities/bogota.webp'
import MonserrateImage from '@/assets/images/destinations/bogota/monserrate.webp'
import LaCandelariaImage from '@/assets/images/destinations/bogota/la-candelaria.webp'

// CALI
import CaliImage from '@/assets/images/cities/cali.webp'
import SanAntonioCaliImage from '@/assets/images/destinations/cali/barrio-san-antonio.webp'
import ZoologicoCaliImage from '@/assets/images/destinations/cali/cali-zoo.webp'

// NORTE DE SANTANDER
import NorteSantanderImage from '@/assets/images/cities/norte-de-santander.webp'

export const placeImages = {
  logos: {
    mainLogo: MainLogo,
    isologo: Isologo,
  },
  heroImages: {
    mainHero: MainHeroImage,
    services: {
      mainHero: GlobalNetworkImage,
      connectivityHero: GlobalNetworkImage,
      medicalAssistanceHero: AssistanceHealthImage,
      proceduresHero: RequirementVisaImage,
      transportHero: TransportVehicleRentalImage,
      travelRequirementsHero: RequirementPassportAndIdImage,

    },
  },
  services:{
    globalNetwork: GlobalNetworkImage,
    safeTravel: SafeTravelImage,
    teamExperts: TeamExpertsImage,
    tickets: TicketsImage,
    touristServices: TouristServicesImage,
    world: WorldImage,
    transport: {
      transfer: TransportTransferImage,
      vehicleRental: TransportVehicleRentalImage,
    },
    regions: {
      usa: RegionUSAImage,
      canada: RegionCanadaImage,
      australia: RegionAustraliaImage,
      europe: RegionEuropeImage,
      asia: RegionAsiaImage,
      mexico: RegionMexicoImage,
    },
    assistance: {
      health: AssistanceHealthImage,
      transfer: AssistanceTransferImage,
      cancellation: AssistanceCancellationImage,
      luggage: AssistanceLuggageImage,
      documentation: AssistanceDocumentationImage,
      pets: AssistancePetsImage,
      covid: AssistanceCovidImage,
      additional: AssistanceAdditionalImage,
      integral: AssistanceIntegralImage,
    },
    requirements: {
      visa: RequirementVisaImage,
      passportAndId: RequirementPassportAndIdImage,
      yellowFever: RequirementYellowFeverImage,
      covid: RequirementCovidImage,
      migrationForm: RequirementMigrationFormImage,
      identityDocument: RequirementIdImage,
      covidCard: RequirementCarnetCovidImage,
    },
  },
  cities: {
    bogota: BogotaImage,
    medellin: MedellinImage,
    cartagena: CartagenaImage,
    santaMarta: SantaMartaImage,
    cali: CaliImage,
    norteDeSantander: NorteSantanderImage,
  },
  destinations: {
    defaultDestination: DefaultDestinationImage,
    monserrate: MonserrateImage,
    laCandelaria: LaCandelariaImage,
    comuna13: Comuna13Image,
    parqueArvi: ParqueArviImage,
    ciudadAmurallada: CiudadAmuralladaImage,
    islasRosario: islasRosarioImage,
    parqueTayrona: ParqueTayronaImage,
    ciudadPerdida: CiudadPerdidaImage,
    sanAntonioCali: SanAntonioCaliImage,
    zoologicoCali: ZoologicoCaliImage,
    sierraNevadaAncestral: SierraNevadaImage,
    rutaCafePremium: EjeCafeteroImage,
    amazonasProfundo: AmazonasImage,
  },
} as const