export type TravelType = "vacaciones" | "luna-miel" | "familiar" | "negocios" | "otro";

export type AccommodationType = "economico" | "estandar" | "lujo" | "sin-definir";

export type TransportType = "aereo" | "terrestre" | "ambos" | "sin-definir";

export type BudgetRange = "bajo" | "medio" | "alto" | "personalizado";

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  originCity: string;

  destinationType: string;
  destination: string;
  departureDate: string;
  returnDate: string;

  adults: string;
  children: string;
  travelType: TravelType;

  accommodation: AccommodationType;
  transport: TransportType;
  extras: string[];

  budgetRange: BudgetRange;
  customBudget: string;

  comments: string;
}