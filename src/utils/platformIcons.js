import { ReactComponent as AdwordsIcon } from "../assets/img/adwords-icon.svg";
import { ReactComponent as BingIcon } from "../assets/img/bing-icon.svg";

const colorfulIcons = {
  ["AdWords"]: AdwordsIcon,
  ["Bing Ads"]: BingIcon,
};
export const getPlatformIcon = (platform) => {
  return colorfulIcons[platform];
};
