declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "@everapi/ipbase-js" {
  type responseT = {
    data: {
      timezone: { id: string };
      location: { city: { name: string }; country: { name: string } };
    };
  };
  export default class Ipbase {
    constructor(apiKey: string);
    info(): Promise<responseT>;
  }
}
