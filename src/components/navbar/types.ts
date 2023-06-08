import * as _Components from "_core/components";

import { MouseEventHandler, ReactNode } from "react";

export interface INavbarProps extends _Components.INavbarProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftClick?: MouseEventHandler<HTMLButtonElement>;
  onRightClick?: MouseEventHandler<HTMLButtonElement>;
}