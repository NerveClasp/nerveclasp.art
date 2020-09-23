import React from 'react';
import cx from 'classnames';

interface INotFound {
  className?: string;
  default: boolean;
}

function NotFound({ className }: INotFound) {
  return <div className={cx(className)}>Oopsie, nothing here</div>;
}

export default NotFound;
