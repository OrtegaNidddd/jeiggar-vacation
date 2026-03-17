import AmazonasImage from '@/assets/images/amazonas.jpeg'
import EjeCafeteroImage from '@/assets/images/eje-cafetero.png'
import SierraNevadaImage from '@/assets/images/sierra-nevada.jpg'
import BogotaImage from '@/assets/images/bogota.jpeg'
import MedellinImage from '@/assets/images/medellin.webp'
import CartagenaImage from '@/assets/images/cartagena.jpg'
import SantaMartaImage from '@/assets/images/santa-marta.jpg'
import CaliImage from '@/assets/images/cali.webp'
import MonserrateImage from '@/assets/images/monserrate.jpeg'
import LaCandelariaImage from '@/assets/images/la-candelaria.jpeg'
import Comuna13Image from '@/assets/images/comuna-13.jpg'
import ParqueArviImage from '@/assets/images/parque-arvi.jpeg'
import CiudadAmuralladaImage from '@/assets/images/ciudad-amurallada.jpeg'
import islasRosarioImage from '@/assets/images/islas-rosario.jpeg'
import ParqueTayronaImage from '@/assets/images/parque-tayrona.webp'
import CiudadPerdidaImage from '@/assets/images/ciudad-perdida.jpeg'
import SanAntonioCaliImage from '@/assets/images/san-antonio-cali.jpeg'
import ZoologicoCaliImage from '@/assets/images/zoologico-cali.jpeg'

export const placeImages = {
  featuredTrips: {
    rutaCafePremium: EjeCafeteroImage,
    sierraNevadaAncestral: SierraNevadaImage,
    amazonasProfundo: AmazonasImage,
  },
  cities: {
    bogota: BogotaImage,
    medellin: MedellinImage,
    cartagena: CartagenaImage,
    santaMarta: SantaMartaImage,
    cali: CaliImage,
  },
  destinations: {
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
  },
} as const