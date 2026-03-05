import type { FooterSection } from "../domain/types/Footer";

export const footerBrandMock = {
  name: "Jeiggar Vacation",
  description:
    "Agencia de viajes enfocada en experiencias memorables con atención personalizada y destinos nacionales e internacionales.",
};

export const footerSectionsMock: FooterSection[] = [
  {
    title: "Jeiggar Vacation",
    links: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Servicios", to: "/servicios" },
      { label: "Planes", to: "/planes" },
    ],
  },
  {
    title: "Destinos",
    links: [
      { label: "Nacionales", to: "/destinos/nacionales" },
      { label: "Internacionales", to: "/destinos/internacionales" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Contacto", to: "/contacto" },
      { label: "Cotizar", to: "/cotizar" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Cúcuta, Colombia", to: "#" },
      { label: "+57 300 000 0000", to: "#" },
      { label: "contacto@jeiggarvacation.com", to: "#" },
    ],
  },
];

export const footerContactMock = {
  city: "Cúcuta, Colombia",
  phone: "+57 300 000 0000",
  email: "contacto@jeiggarvacation.com",
  whatsappUrl: "https://wa.me/573000000000",
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
};