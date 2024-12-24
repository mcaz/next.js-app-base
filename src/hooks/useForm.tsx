import { configs } from '@/configs';
import * as dto from '@/data/rest/dto';
import * as enums from '@/types/enums';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo, useRef } from 'react';
import {
  FieldValues,
  UseFormProps,
  useForm as useReactHookForm,
} from 'react-hook-form';
import * as yup from 'yup';

const { field: fieldConfig } = configs.form;

export const useForm = <T extends FieldValues>(
  hookProps:
    | UseFormProps<T>
    | ((ctx: {
        yup: typeof yup;
        yupResolver: typeof yupResolver;
        fieldConfig: typeof fieldConfig;
        configs: Configs;
        enums: Enums;
        dto: Dto;
      }) => UseFormProps<T>)
) => {
  const reactHookFormOptions = useMemo(
    () =>
      hookProps instanceof Function
        ? hookProps({
            yup,
            yupResolver,
            fieldConfig,
            configs,
            enums,
            dto,
          })
        : hookProps,
    [hookProps]
  );

  const form = useReactHookForm<T>(reactHookFormOptions);
  const initialized = useRef(false);
  const defaultValues = useRef<T>();

  useEffect(() => {
    if (!form && initialized.current) {
      return;
    }

    defaultValues.current = form.getValues();
    initialized.current = true;
  }, [form]);

  return {
    ...form,
    fieldConfig,
    configs,
    defaultValues: defaultValues.current,
  };
};
