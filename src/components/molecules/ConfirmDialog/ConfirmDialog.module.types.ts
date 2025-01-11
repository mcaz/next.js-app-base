export type TProps = PropsWithChildren<{
  title: string;
  isOpen: boolean;
  submitLabel: string;
  submitColor?: 'primary' | 'secondary' | 'error';
  onSubmit: () => Promise<void>;
  onClose: () => void;
}>;
