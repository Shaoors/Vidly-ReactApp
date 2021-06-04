import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //items array to lodash rapper
  return _(items).slice(startIndex).take(pageSize).value();

  //_.slice(items,startIndex)
  //_.take()
}
