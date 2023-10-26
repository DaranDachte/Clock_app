import { Location } from "../models/domain";
//import { fetcher } from "../Helpers/fetcher";
import Ipbase from "@everapi/ipbase-js";

type getIpFn = () => Promise<Location>;

const api_KEY: string = process.env.REACT_APP_API_BASE_KEY || "";
const ipBase = new Ipbase(api_KEY);

//  export const getIp: getIpFn = () => fetcher("http://ip-api.com/json");

//Я вынес работу с получением ip в отдельный сервис. Это сделано для того, чтобы можно было бы поменять базу данных адресов.
// Мы получаем ай пи и тайм зону этого ай пи. После этого мы  передаем эту информацию (тайм зону) в другой запрос, чтобы получить время
//      ( const data: WorldTime = await fetcher(
// `http://worldtimeapi.org/api/timezone/${locdata.timezone}`    );)

export const getIp: getIpFn = () =>
  ipBase.info().then((response) => {
    return {
      timezone: response.data.timezone.id,
      city: response.data.location.city.name,
      country: response.data.location.country.name,
    };
  });
