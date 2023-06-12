import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StateDefaultChangeIconN2.module.css';

interface Props {
  className?: string;
  classes?: {
    style_layer?: string;
    root?: string;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 3:8785 */
export const Button_StateDefaultChangeIconN2: FC<Props> = memo(function Button_StateDefaultChangeIconN2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.style_layer || ''} ${classes.style_layer}`}>
        {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      </div>
    </div>
  );
});
