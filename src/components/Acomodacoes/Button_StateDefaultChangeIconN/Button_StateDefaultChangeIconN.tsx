import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StateDefaultChangeIconN.module.css';

interface Props {
  className?: string;
  classes?: {
    frame1?: string;
    root?: string;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 3:8855 */
export const Button_StateDefaultChangeIconN: FC<Props> = memo(function Button_StateDefaultChangeIconN(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.frame1 || ''} ${classes.frame1}`}>
        {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      </div>
    </div>
  );
});
