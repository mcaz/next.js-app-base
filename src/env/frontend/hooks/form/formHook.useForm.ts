import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useMemo } from 'react';
import { useForm as useReactHookForm, UseFormProps } from 'react-hook-form';
import * as Yup from 'yup';

export { useFieldArray, useWatch } from 'react-hook-form';

export type TResult<T extends object> = UseFormProps<T> & {
  validate?: (ctx: {
    schema: typeof Yup.object;
    validator: typeof Yup;
  }) => ReturnType<(typeof Yup)['object']>;
};

export const useForm = <T extends object>(props?: TResult<T>) => {
  const {
    reValidateMode = 'onSubmit',
    shouldUseNativeValidation = false,
    defaultValues,
    validate,
  } = props || {};

  const resolver = useMemo(() => {
    return validate
      ? yupResolver(validate({ schema: Yup.object, validator: Yup }))
      : void 0;
  }, [validate]);

  const { setValue, ...reactHookForm } = useReactHookForm<T>({
    reValidateMode,
    shouldUseNativeValidation,
    defaultValues,
    resolver,
  });

  const setValues = useCallback(
    (values: Partial<T> = {}) => {
      Object.entries(values).forEach(([key, value]) => {
        setValue(key as any, value as any);
      });
    },
    [setValue]
  );

  return {
    setValue,
    setValues,
    ...reactHookForm,
  };
};
