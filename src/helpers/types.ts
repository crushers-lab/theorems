import _ from "lodash";

export const isPrimitive = (value: any) => _.isString(value) || _.isNumber(value) || _.isBoolean(value);
