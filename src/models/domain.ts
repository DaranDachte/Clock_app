export type Advice = {
  id: number;
  advice: string;
};

export type Data = {
  slip: Advice;
};

export type WorldTime = {
  worldTime: string;
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};

export interface Location {
  timezone: string;
  city: string;
  country: string;
}

export interface WorldTimeAndLocation {
  worldTime: WorldTime;
  location: Location;
}
