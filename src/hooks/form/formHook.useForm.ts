import { useForm as useReactHookForm, UseFormProps } from 'react-hook-form';

export const useForm = <T>(props?: UseFormProps<T, any>) => {
  const reactForm = useReactHookForm<T>(props);

  if (props?.defaultValues) {
    console.log('useForm defaultValues', props.defaultValues);
  }

  return {
    ...reactForm,
  };
};
