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
    root?: string;
  };
  swap?: {
    addOutline?: ReactNode;
  };
}
/* @figmaId 3:8824 */
export const Button_StateDefaultChangeIconI: FC<Props> = memo(function Button_StateDefaultChangeIconI(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.style_layer || ''} ${classes.style_layer}`}>
        {props.swap?.addOutline || (
          <AddOutline
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        )}
      </div>
    </div>
  );
});
