export type Advice = {
  id: number;
  advice: string;
};

export type Data = {
  slip: Advice;
};

export type WorldTime = {
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

/*export type Location = {
  data: {
    ip: string;
    hostname: string;
    type: string;
    range_type: {
      type: string;
      description: string;
    };
    connection: {
      asn: number;
      organization: string;
      isp: string;
      range: string;
    };
    location: {
      geonames_id: number;
      latitude: number;
      longitude: number;
      zip: string;
      continent: {
        code: string;
        name: string;
        name_translated: string;
        geonames_id: number;
        wikidata_id: string;
      };
      country: {
        alpha2: number;
        alpha3: number;
        calling_codes: [string];
        currencies: [
          {
            symbol: string;
            name: string;
            symbol_native: string;
            decimal_digits: number;
            rounding: number;
            code: string;
            name_plural: string;
          }
        ];
        emoji: string;
        ioc: string;
        languages: [
          {
            name: string;
            name_native: string;
          }
        ];
        name: string;
        name_translated: string;
        timezones: string[];
        is_in_european_union: boolean;
        fips: string;
        geonames_id: number;
        hasc_id: string;
        wikidata_id: string;
      };
      city: {
        fips: string;
        alpha2: null;
        geonames_id: number;
        hasc_id: null;
        wikidata_id: string;
        name: string;
        name_translated: string;
      };
      region: {
        fips: string;
        alpha2: string;
        geonames_id: number;
        hasc_id: string;
        wikidata_id: string;
        name: string;
        name_translated: string;
      };
    };
    tlds: string[];
    timezone: {
      id: string;
      current_time: string;
      code: string;
      is_daylight_saving: boolean;
      gmt_offset: number;
    };
  };
}; */

export interface Location {
  data: {
    timezone: {
      id: string;
      name: string;
    };
  };
}
