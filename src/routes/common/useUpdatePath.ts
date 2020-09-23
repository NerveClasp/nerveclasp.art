import React from 'react';
import Recoil from 'recoil';
import { locationState } from '../../AppState';

const useUpdatePath = (path: string) => {
  const setPath = Recoil.useSetRecoilState(locationState);
  React.useEffect(() => {
    setPath(path);
  }, [path]);
};

export default useUpdatePath;
