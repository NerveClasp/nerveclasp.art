import React from 'react';
import cx from 'classnames';
import { useUpdatePath } from '../common';

import Hammer from '../../icons/hammer.svg';

interface IHome {
  className?: string;
  path: string;
}

function Home({ className, path }: IHome) {
  useUpdatePath(path);

  return (
    <div className={cx(className)}>
      Home
      <p>Site is under heavy construction at the moment.</p>
      <p>Please come back later :)</p>
      <p>
        <Hammer id="under-construction" />
      </p>
    </div>
  );
}

export default Home;
