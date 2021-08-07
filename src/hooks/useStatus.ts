import { useCallback, useState } from 'react';
import { IStatus, STATUS } from '../types';
import { formatStatus } from '../utils/formatStatus';

export const useStatus = () => {
  const [statusInfo, setStatusInfo] = useState<IStatus>({
    status: STATUS.NEVER,
  });
  const { message, ...status } = formatStatus(statusInfo);
  const setStatus = useCallback(
    (status: IStatus['status'], message?: IStatus['message']) => {
      setStatusInfo({ status, message });
    },
    []
  );
  return {
    status,
    setStatus,
    message,
  };
};
