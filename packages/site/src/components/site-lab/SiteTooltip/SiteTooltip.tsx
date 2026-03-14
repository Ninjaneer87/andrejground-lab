import { Tooltip, TooltipProps } from '@andrejground/lab';
import React from 'react';
import styles from './SiteTooltip.module.scss';

type Props = TooltipProps;

function SiteTooltip(props: Props) {
  return (
    <Tooltip
      {...props}
      classNames={{
        ...props.classNames,
        content: styles.tooltipContent,
      }}
    />
  );
}

export default SiteTooltip;
