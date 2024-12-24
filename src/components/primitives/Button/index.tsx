import { default as ButtonBase, ButtonBaseProps } from '@mui/material/ButtonBase';

export function Button({ onClick: handleClick, ...props }: ButtonBaseProps) {
  return (
    <ButtonBase
      onClick={(e) => {
        e.stopPropagation();
        handleClick && handleClick(e);
      }}
      {...props}
    />
  );
}
