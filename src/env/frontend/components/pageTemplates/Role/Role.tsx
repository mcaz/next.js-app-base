import { C } from '@/controls';
import { E } from '@/electrons';

import { TEMPLATE_NAME } from './Role.const';
import { s } from './Role.styles';
import { useInfo } from '@/hooks/pageTemplate';
import { useRole } from '@/hooks/role';

export const PageTemplate: TPageProps = ({ router }) => {
  useInfo({ name: TEMPLATE_NAME, router });

  const masterAccountMock: TAccount = {
    profile: {
      role: 'MASTER',
    },
  };

  const generalAccountMock: TAccount = {
    profile: {
      role: 'GENERAL',
    },
  };

  const masterUser = useRole(masterAccountMock);
  const generalUser = useRole(generalAccountMock);

  const reply = (yes: boolean) => {
    return yes ? 'Yes' : 'No';
  };

  return (
    <C.Repeater component={E.DefinitionList} className={s.Row}>
      <>
        <E.DefinitionListTerm>MasterAccountRole</E.DefinitionListTerm>

        <C.Repeater component={E.DefinitionListDescription}>
          <>can update user : {reply(masterUser.can('update', 'news'))}</>
          <>can update news : {reply(masterUser.can('read', 'news'))}</>
        </C.Repeater>
      </>

      <>
        <E.DefinitionListTerm>GeneralAccountRole</E.DefinitionListTerm>

        <C.Repeater component={E.DefinitionListDescription}>
          <>can update news : {reply(generalUser.can('update', 'news'))}</>
        </C.Repeater>
      </>
    </C.Repeater>
  );
};
