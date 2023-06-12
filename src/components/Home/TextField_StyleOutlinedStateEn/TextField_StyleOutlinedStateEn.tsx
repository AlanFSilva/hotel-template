import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconButton_ConfigurationStanda } from '../IconButton_ConfigurationStanda/IconButton_ConfigurationStanda';
import { IconsSearch_24px } from '../IconsSearch_24px/IconsSearch_24px';
import { IconsSearch_24pxIcon } from './IconsSearch_24pxIcon';
import classes from './TextField_StyleOutlinedStateEn.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    iconsSearch_24px?: ReactNode;
  };
  hide?: {
    supportingText?: boolean;
  };
  text?: {
    inputText?: ReactNode;
    labelText?: ReactNode;
  };
}
/* @figmaId 3:9477 */
export const TextField_StyleOutlinedStateEn: FC<Props> = memo(function TextField_StyleOutlinedStateEn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.textField}>
        <div className={classes.stateLayer}>
          <IconButton_ConfigurationStanda
            swap={{
              iconsSettings_24px: props.swap?.iconsSearch_24px || (
                <IconsSearch_24px
                  swap={{
                    icon: <IconsSearch_24pxIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
          />
          <div className={classes.content}>
            <div className={classes.inputText}>
              {props.text?.inputText != null ? props.text?.inputText : <div className={classes.inputText2}>Input</div>}
            </div>
            <div className={classes.labelText}>
              {props.text?.labelText != null ? props.text?.labelText : <div className={classes.labelText2}>Label</div>}
            </div>
          </div>
        </div>
      </div>
      {!props.hide?.supportingText && (
        <div className={classes.supportingText}>
          <div className={classes.supportingText2}>Supporting text</div>
        </div>
      )}
    </div>
  );
});
