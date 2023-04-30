import { A } from '@/atoms';
import { C } from '@/controls';
import { E } from '@/electrons';
import { F } from '@/forms';
import { useForm } from '@/hooks/form';
import { useInfo } from '@/hooks/pageTemplate';
import { useStore } from '@/hooks/store';

import { TEMPLATE_NAME } from './Store.const';
import { s } from './Store.styles';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const { control, handleSubmit } = useForm<{ name: string }>();
  const { userStore } = useStore();

  const handleClickChangeName = (data: { name: string }) => {
    userStore.dispatch.changeName(data.name);
  };

  return (
    <C.Repeater component={E.Division} className={s.Row}>
      {/* state参照 */}
      {'userStore.state.name: ' + userStore.state.name}

      {/* state更新 */}
      <F.TextField name="name" placeholder="名前" control={control} />
      <A.Button onClick={handleSubmit(handleClickChangeName)}>
        changeName
      </A.Button>
    </C.Repeater>
  );
};
