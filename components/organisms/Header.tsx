import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Div } from '../atoms';

const auth = false;
const Header = () => {
  const router = useRouter();

  const handleProfileClick = () => {
    if (auth) router.push('/login');
    else router.push('/');
  };

  return (
    <header>
      <Div
        position="fixed"
        width="100%"
        height="60px"
        padding="0 24px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        border="1px solid #f3f3f3"
        zIndex="50"
      >
        <HeaderLogo />
        <Div flex="1" display="flex" justifyContent="space-around" color="blue">
          <Link href="/test1">
            <span>test1</span>
          </Link>
          <Link href="/test2">
            <span>test2</span>
          </Link>
        </Div>
        <Div display="flex" gap="4px">
          {/* <HeaderModalButtons /> */}
          <Link href="/me">
            <Image
              width="40px"
              height="40px"
              src={'/assets/icons/default_profile.svg'}
              alt={'profile image'}
              onClick={handleProfileClick}
            />
          </Link>
        </Div>
      </Div>
    </header>
  );
};

export default Header;

const HeaderLogo = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <section>
      <Link href="/">
        <Div display="flex" justifyContent="flex-start" alignItems="center">
          <Image
            src="/assets/images/copotter_logo.png"
            alt="Hezy: Hey it's easy"
            width="190px"
            height="36px"
          />
          <Button
            fontSize="18px"
            lineHeight="28px"
            marginLeft="16px"
            css={css`
              transition: all 0.15ms;
              ${path === '/'
                ? css`
                    transition: all 0.15ms;
                    color: rgb(17 24 39/1);
                  `
                : css`
                    transition: all 0.15ms;
                    color: rgb(156 163 175/1);
                    :hover {
                      color: rgb(0 200 100/1);
                    }
                  `}
            `}
            onClick={() => router.push('/')}
          >
            BETA
          </Button>
        </Div>
      </Link>
    </section>
  );
};
