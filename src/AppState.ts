import Recoil from 'recoil';

export const locationState = Recoil.atom({
  key: 'nc-location',
  default: '',
});
