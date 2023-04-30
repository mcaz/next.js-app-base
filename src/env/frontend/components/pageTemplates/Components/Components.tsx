import { A } from '@/atoms';
import { E } from '@/electrons';
import { F } from '@/forms';
import { useMessageModal, useNotice } from '@/hooks/component';
import { useForm } from '@/hooks/form';
import { useInfo } from '@/hooks/pageTemplate';

import { TEMPLATE_NAME } from './Components.const';
import { s } from './Components.styles';
import { TMessageFormFields, TNoticeFormFields } from './Components.types';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const notice = useNotice();
  const messageModal = useMessageModal();

  const modalForm = useForm<TMessageFormFields>({
    validate: ({ schema, validator }) => {
      return schema({
        message: validator.string().required(),
      });
    },
    defaultValues: { message: '' },
  });

  const noticeForm = useForm<TNoticeFormFields>({
    validate: ({ schema, validator }) => {
      return schema({
        notice: validator.string().required(),
      });
    },
    defaultValues: { notice: '' },
  });

  const handleClickModalButton = (fields: TMessageFormFields) => {
    messageModal.openModal(fields.message);
  };

  const handleAddNoticeButton = (fields: TNoticeFormFields) => {
    notice.enqueue(fields.notice);
  };

  return (
    <E.Container
      component={E.List}
      className={s.PageTemplate__List}
      division={{
        component: E.ListItem,
        className: s.PageTemplate__List__Item,
      }}
    >
      <E.Container
        component={E.Form}
        className={s.PageTemplate__Form}
        onSubmit={modalForm.handleSubmit(handleClickModalButton)}
        division={{ component: E.Division }}
      >
        <F.TextField
          required
          name="message"
          label="MessageModal"
          placeholder="メッセージを入力してください"
          control={modalForm.control}
          errors={modalForm.formState.errors.message}
        />

        <A.Button type="submit">Modal</A.Button>
      </E.Container>

      <E.Container
        component={E.Form}
        className={s.PageTemplate__Form}
        onSubmit={noticeForm.handleSubmit(handleAddNoticeButton)}
        division={{ component: E.Division }}
      >
        <F.TextField
          required
          name="notice"
          label="Notice"
          placeholder="メッセージを入力してください"
          control={noticeForm.control}
          errors={noticeForm.formState.errors.notice}
        />

        <A.Button type="submit">Notice</A.Button>
      </E.Container>
    </E.Container>
  );
};
