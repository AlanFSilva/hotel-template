import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AddOutline } from '../AddOutline/AddOutline';
import classes from './Button_StateDefaultChangeIconI.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    style_layer?: string;
  };
  swap?: {
    addOutline?: ReactNode;
  };
}
/* @figmaId 3:9209 */
export const Button_StateDefaultChangeIconI: FC<Props> = memo(function Button_StateDefaultChangeIconI(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.style_layer || ''} ${classes.style_layer}`}>
        {props.swap?.addOutline || (
          <AddOutline
            className={classes.addOutline}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        )}
      </div>
    </div>
  );
});
