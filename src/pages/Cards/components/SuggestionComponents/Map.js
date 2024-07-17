import ABPrune from "./ABPrune";
import AdGroupWithoutRSA from "./AdGroupWithoutRSA";
import AssetGroupPause from "./AssetGroupPause";
import KeywordLasso from "./KeywordLasso";

export const ComponentForType = {
  "Keyword Lasso": KeywordLasso,
  "AB Testing Pause Ads": ABPrune,
  AdGroupsWithoutRSA: AdGroupWithoutRSA,
  AssetGroupsWithoutAudienceSignals: AssetGroupPause,
};
