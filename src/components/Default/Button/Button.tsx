import Link from 'next/link';
import { Button as MUIButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  text: string;
  className?: string;
}

// TODO: Use it in all project instead of importing MUI Button in every component
export default function Button({ text, className, ...props }: Props) {
  return (
    <div className={className}>
      <MUIButton
        LinkComponent={Link}
        {...props}>
        {text}
      </MUIButton>
    </div>
  );
}
