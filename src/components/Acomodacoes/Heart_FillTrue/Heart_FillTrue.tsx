import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Heart_FillTrue.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 28:1155 */
export const Heart_FillTrue: FC<Props> = memo(function Heart_FillTrue(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});
