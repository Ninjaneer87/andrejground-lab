import { cn } from '../../utils/common';
import { dividerBaseClassName } from '../../utils/elements';

function SelectDivider() {
  return <div className={cn(dividerBaseClassName)} data-select-divider />;
}

export default SelectDivider;
