import { IStatus, STATUS } from "../types";

export const formatStatus = (statusObj: IStatus) => ({
  message: statusObj.message,
  isLoading: statusObj.status === STATUS.LOADING,
  isError: statusObj.status === STATUS.ERROR,
  isNever: statusObj.status === STATUS.NEVER,
  isSuccess: statusObj.status === STATUS.SUCCESS,
})