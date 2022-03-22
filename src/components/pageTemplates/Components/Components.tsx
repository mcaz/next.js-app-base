import { TEMPLATE_NAME } from './Components.const';
import { s } from './Components.styles';
import A from '~/components/atoms';
import E from '~/components/elements';
import F from '~/components/forms';
import { useMessageModal, useNotice } from '~/hooks/component';
import { useForm } from '~/hooks/form';
import { useInfo } from '~/hooks/pageTemplate';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const modalForm1 = useForm<{ message: string }>({
    defaultValues: { message: 'message1' },
  });
  const modalForm2 = useForm<{ message: string }>({
    defaultValues: { message: 'message2' },
  });
  const messageModal = useMessageModal();

  const handleClickModalButton1 = () => {
    messageModal.openModal(modalForm1.getValues().message);
  };

  const handleClickModalButton2 = () => {
    messageModal.openModal(modalForm2.getValues().message);
  };

  const { enqueueNotice, closeNotice } = useNotice();
  const notistackForm = useForm<{ notice: string }>();

  const handleAddNoticeButton = () => {
    enqueueNotice(notistackForm.getValues().notice);
  };

  const handleCloseNoticeButton = () => {
    closeNotice();
  };

  return (
    <E.Container
      components={{
        Division: E.List,
      }}
      classes={{
        Division: s.List,
      }}
    >
      <E.Iteration component={E.ListItem} className={s.ListItem}>
        <E.Heading weight="2">MessageModal2</E.Heading>

        <F.TextField
          name="message"
          placeholder="message"
          defaultValue={modalForm1.getValues().message}
          control={modalForm1.control}
        />

        <A.Button onClick={handleClickModalButton1}>Open Modal 1</A.Button>
      </E.Iteration>

      <E.Iteration component={E.ListItem} className={s.ListItem}>
        <E.Heading weight="2">MessageModal2</E.Heading>

        <F.TextField
          name="message"
          placeholder="message"
          control={modalForm2.control}
        />

        <A.Button onClick={handleClickModalButton2}>Open Modal 2</A.Button>
      </E.Iteration>

      <E.Iteration component={E.ListItem} className={s.ListItem}>
        <E.Heading weight="2">Notice</E.Heading>

        <F.TextField
          name="notice"
          placeholder="notice"
          control={notistackForm.control}
        />

        <A.Button onClick={handleAddNoticeButton}>Add Notice</A.Button>
        <A.Button onClick={handleCloseNoticeButton}>Close Notice</A.Button>
      </E.Iteration>
    </E.Container>
  );
};

export default PageTemplate;
