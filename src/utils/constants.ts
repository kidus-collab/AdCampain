import Logo from "../../public/assets/logo.png";

interface Landing {
  socialMediaAds: any;
  crossPlatformAds: any;
  creativeDesign: any;
}

interface Images {
  logo: any;
  landing: Landing;
}

export const images: Images = {
  logo: Logo,
  landing: {
    socialMediaAds: "",
    crossPlatformAds: "",
    creativeDesign: "",
  },
};

export const color: string[] = [
  // button blue
  "rgba(67, 65, 204, 1)",
];

export const Font: string = "";
