import _ from "lodash";
import { categoryStateType, locationStateType } from "store/slices/types";

type stateArraysType = categoryStateType[] | locationStateType[];

export const findPopulatedItem = (
  ArrayToFindIn: stateArraysType,
  id: string
) => {
  return (
    _.find(ArrayToFindIn, (o: { id: string }) => {
      return o.id === id;
    }) || ArrayToFindIn
  );
};
