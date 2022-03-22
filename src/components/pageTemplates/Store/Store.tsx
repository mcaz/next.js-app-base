import { TEMPLATE_NAME } from './Store.const';
import { s } from './Store.styles';
import A from '~/components/atoms';
import E from '~/components/elements';
import F from '~/components/forms';
import { useForm } from '~/hooks/form';
import { useInfo } from '~/hooks/pageTemplate';
import { useStore } from '~/hooks/store';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const { control, handleSubmit } = useForm<{ name: string }>();
  const { userStore } = useStore();

  const handleClickChangeName = (data: { name: string }) => {
    userStore.dispatch.changeName(data.name);
  };

  return (
    <E.Iteration component={E.Division} className={s.Row}>
      {/* state参照 */}
      {'userStore.state.name: ' + userStore.state.name}

      {/* state更新 */}
      <F.TextField name="name" placeholder="名前" control={control} />
      <A.Button onClick={handleSubmit(handleClickChangeName)}>
        changeName
      </A.Button>
    </E.Iteration>
  );
};

export default PageTemplate;
