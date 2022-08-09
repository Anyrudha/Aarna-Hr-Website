import { AppInsightIdKey } from "./appConstant";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const AppInsights = new ApplicationInsights({
  config: {
    instrumentationKey: AppInsightIdKey
  },
});
AppInsights.loadAppInsights();
AppInsights.trackPageView();
export default AppInsights;
