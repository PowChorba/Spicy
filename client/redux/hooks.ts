import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import { RootState, AppDisptach } from "./store";


export const useAppDispatch : () => AppDisptach = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector