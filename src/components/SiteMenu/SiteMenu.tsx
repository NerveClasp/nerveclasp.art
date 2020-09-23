import React from 'react';
import Recoil from 'recoil';
import { Link } from '@reach/router';
import cx from 'classnames';
import { locationState } from '../../AppState';
import './SiteMenu.css';

interface ISiteMenu {
  className?: string;
  links: Array<{ to: string; label: string }>;
}

function SiteMenu({ className, links }: ISiteMenu) {
  const [showBack, setShowBack] = React.useState(false);
  const path = Recoil.useRecoilValue(locationState);

  React.useEffect(() => {
    setShowBack(!!path && path !== '/');
  }, [path]);

  return (
    <div className={cx(className, 'nc-site-menu')}>
      {links.map(({ label, to }) => (
        <Link
          key={label}
          to={to}
          className={cx('nc-site-menu__link', {
            'nc-site-menu__link--current': to === path,
          })}
        >
          {label}
        </Link>
      ))}
      {showBack && (
        <Link to="../" className="nc-site-menu__link">
          Go Back
        </Link>
      )}
    </div>
  );
}

export default SiteMenu;
