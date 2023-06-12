import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Banner.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';

interface Props {
  className?: string;
}
/* @figmaId 3:8634 */
export const Banner: FC<Props> = memo(function Banner(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
    </div>
  );
});
