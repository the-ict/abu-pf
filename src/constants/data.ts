import type { IProductData } from "../types/data";
import Logo from "../assets/icons/logo.png";

import Portfolio1 from "../assets/videos/pf1.mp4";
import Portfolio2 from "../assets/videos/pf2.mp4";
import Portfolio3 from "../assets/videos/pf3.mp4";

export const PRODUCT_INFO: IProductData = {
    name: "abdullox",
    logo: Logo,
    picture: "",
    about: "",
    creator: "",
    techniques: "",
    portfolio: [Portfolio1,Portfolio2, Portfolio3]
};