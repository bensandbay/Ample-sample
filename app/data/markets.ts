import raw from "./markets.json";

export type Market = {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: string;
  sparkline: number[];
};

export const markets: Market[] = raw as Market[];
