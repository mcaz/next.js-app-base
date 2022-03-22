import { TEMPLATE_NAME } from './Role.const';
import { s } from './Role.styles';
import E from '~/components/elements';
import { useInfo } from '~/hooks/pageTemplate';
import { useRole } from '~/hooks/role';

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

  masterUser.can('foo', 'news');

  const reply = (yes: boolean) => {
    return yes ? 'Yes' : 'No';
  };

  return (
    <E.Iteration component={E.DefinitionList} className={s.Row}>
      <>
        <E.DefinitionListTerm>MasterAccountRole</E.DefinitionListTerm>

        <E.DefinitionListDescription>
          can readAll user : {reply(masterUser.can('foo', 'news'))}
          can readAll user : {reply(masterUser.can('foo', 'news'))}
        </E.DefinitionListDescription>

        <E.DefinitionListDescription>
          can update news : {reply(masterUser.can('read', 'news'))}
        </E.DefinitionListDescription>
      </>

      <>
        <E.DefinitionListTerm>GeneralAccountRole</E.DefinitionListTerm>

        <E.DefinitionListDescription>
          can readAll user : {reply(generalUser.can('readAll', 'user'))}
        </E.DefinitionListDescription>

        <E.DefinitionListDescription>
          can update news : {reply(generalUser.can('update', 'news'))}
        </E.DefinitionListDescription>
      </>
    </E.Iteration>
  );
};

export default PageTemplate;
