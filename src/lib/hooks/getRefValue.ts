import { RefObject } from "react";

export const getRefValue = <T>(ref: RefObject<T>) => {
	return ref.current as T;
};
