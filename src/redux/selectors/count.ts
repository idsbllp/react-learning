import { IRootState } from '$typings/redux';

export const selectCount = (state: IRootState) => state.count;
