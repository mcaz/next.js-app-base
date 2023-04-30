import { A } from '@/atoms';
import { E } from '@/electrons';
import { F } from '@/forms';
import { useNotice } from '@/hooks/component';
import { useForm } from '@/hooks/form';
import { useInfo } from '@/hooks/pageTemplate';
import { useRender } from '@/hooks/react';

import { TEMPLATE_NAME } from './Login.const';
import { s } from './Login.styles';
import { TFields } from './Login.types';

export const PageTemplate: TPageProps = ({ router, pages }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const { request } = useRender();
  const notice = useNotice();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFields>({
    validate: ({ schema, validator }) => {
      return schema({
        email: validator.string().required(),
        password: validator.string().required(),
      });
    },
    defaultValues: {
      email: 'foo@gmail.com',
      password: 'password',
    },
  });

  const submit = async (fields: TFields) => {
    const { error } = await request(({ authRepo }) => {
      return authRepo.login(fields);
    });

    if (error) {
      return notice.enqueue('ログインに失敗しました。');
    }

    router.push(pages.home.path);
  };

  return (
    <E.Container
      component={E.Form}
      className={s.PageTemplate__Form}
      division={{
        component: E.Division,
        className: s.PageTemplate__Form__Division,
      }}
      onSubmit={handleSubmit(submit)}
    >
      <F.TextField
        required
        type="email"
        name="email"
        control={control}
        errors={errors.email}
        disabled={isSubmitting}
      />

      <F.TextField
        name="password"
        type="password"
        control={control}
        errors={errors.password}
        disabled={isSubmitting}
      />

      <A.Button type="submit" disabled={isSubmitting}>
        ログイン
      </A.Button>
    </E.Container>
  );
};
