import { DestinationCategory } from "./destinationCategoryTypes";
import { Destination } from "./destinationTypes";
import { Tours } from "./toursTypes";
import { Travel } from "./travelTypes";

export interface FetchDataProps {
  toursData: Tours;
  travelDatas: Travel;
  destinationDatas: Destination;
  categoryDatas: DestinationCategory;
}
