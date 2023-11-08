import Logo from "../../../public/images/logo.png";

// social media ad image & sizes
import socialMediaAdLg from "../../../public/images/Landing/SocialMediaad/lg/socialMediaAdpic.png";
//import socialMediaAdMd from "../../../public/images/Landing/SocialMediaad/md/socialMediaAdpic.png"
//import socialMediaAdSm from "../../../public/images/Landing/SocialMediaad/sm/socialMediaAdpic.png"

// cross platform ad image & sizes
//import crossPlatformAdLg from "../../../public/images/Landing/crossPlatform/lg/crossPlatformAdpic.png"
//import crossPlatformAdMd from "../../../public/images/Landing/crossPlatform/md/crossPlatformAdpic.png"
//import crossPlatformAdSm from "../../../public/images/Landing/crossPlatform/sm/crossPlatformAdpic.png"

// creative design ad image & sizes
//import creativeDesignAdLg from "../../../public/images/Landing/creativeDesign/lg/creativeDesignAdpic.png"
//import creativeDesignAdMd from "../../../public/images/Landing/creativeDesign/md/creativeDesignAdpic.png"
//import creativeDesignAdSm from "../../../public/images/Landing/creativeDesign/sm/creativeDesignAdpic.png"

// CustomerReview
import CustomerReviewLg from "../../../public/images/Landing/customerReview/lg/custormerReview.png";
//import CustomerReviewMd from "../../../public/images/Landing/customerReview/md/custormerReview.png"
//import CustomerReviewSm from "../../../public/images/Landing/customerReview/sm/custormerReview.png"

// About Vector
import VectorAbout from "../../../public/images/opacityArrow.png";

interface imageSize {
  sm: any;
  md: any;
  lg: any;
}

interface Landing {
  socialMediaAds: imageSize;
  crossPlatformAds: imageSize;
  creativeDesign: imageSize;
  customerReview: imageSize;
}

interface Images {
  logo: any;
  landing: Landing;
  About: any;
}

export const images: Images = {
  logo: Logo,
  landing: {
    socialMediaAds: {
      sm: "",
      md: "",
      lg: socialMediaAdLg,
    },
    crossPlatformAds: {
      sm: "",
      md: "",
      lg: "",
    },
    creativeDesign: {
      sm: "",
      md: "",
      lg: "",
    },
    customerReview: {
      sm: "",
      md: "",
      lg: CustomerReviewLg,
    },
  },
  About: VectorAbout,
};

export const color: string[] = [
  // button blue
  "rgba(67, 65, 204, 1)",
  // social media blue
  "rgba(101, 114, 239, 1)",
];

export const Font: string[] = ["", "Poppins , sans-serif"];
