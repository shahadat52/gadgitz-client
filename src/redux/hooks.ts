import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Correctly typed useDispatch hook
export const useAppDispatch: () => AppDispatch = useDispatch;

// Correctly typed useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
