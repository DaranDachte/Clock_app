import { Location } from "../models/domain";
import { fetcher } from "../Helpers/fetcher";

type getIpFn = () => Promise<Location>;

export const getIp: getIpFn = () => fetcher("http://ip-api.com/json");

//Я вынес работу с получением ip в отдельный сервис. Это сделано для того, чтобы можно было бы поменять базу данных адресов. Мы получаем ай пи и тайм зону этого ай пи. После этого мы  передаем эту информацию (тайм зону) в другой запрос, чтобы получить время
//      ( const data: WorldTime = await fetcher(
// `http://worldtimeapi.org/api/timezone/${locdata.timezone}`    );)
