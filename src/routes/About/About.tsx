import React from 'react';
import cx from 'classnames';
import { useUpdatePath } from '../common';

interface IAbout {
  className?: string;
  path: string;
}

function About({ className, path }: IAbout) {
  useUpdatePath(path);

  return (
    <div className={cx(className)}>
      Using React and other packages is of course an overkill for a simple
      personal website, but I would like it to be my CV and something I can show
      on an interview. Otherwise I would gladly use 11ty or Svelte. Plus this is
      my playground where I can try out something new before suggesting a new
      technology added to a project I work in a team to earn for a living
    </div>
  );
}

export default About;
