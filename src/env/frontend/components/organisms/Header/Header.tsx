import { A } from '@/atoms';
import { E } from '@/electrons';
import { useNotice } from '@/hooks/component';
import { useRender } from '@/hooks/react';
import { useRouter } from '@/hooks/router';

import { s } from './Header.styles';
import { TProps } from './Header.types';

export const Header: TFC<TProps> = ({ title, titleLinkPath }) => {
  const { c, request } = useRender();
  const { router, pages } = useRouter();
  const notice = useNotice();

  const handleClickLogout = async () => {
    const { error } = await request(({ authRepo }) => authRepo.logout());

    if (error) {
      notice.enqueue('ログアウトに失敗しました。');
    }

    router.push(pages.login.path);
  };

  return (
    <E.Header className={s.Header}>
      <E.Division className={s.Header__Inner}>
        <E.Division className={c(s.Header__Cell, s.Header__Cell_title)}>
          <E.Heading weight={1}>
            <E.Anchor href={titleLinkPath}>
              <E.Button color="red">{title}</E.Button>
            </E.Anchor>
          </E.Heading>
        </E.Division>
        <E.Division className={c(s.Header__Cell, s.Header__Cell_user)}>
          <A.IconButton
            icon={({ Logout }) => <Logout className={s.Header__LogoutIcon} />}
            onClick={handleClickLogout}
          />
        </E.Division>
      </E.Division>
    </E.Header>
  );
};
