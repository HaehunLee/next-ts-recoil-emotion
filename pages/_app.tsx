import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Div } from '#/components/atoms';
import { Header } from '#/components/organisms';
import '#/styles/globalStyles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Div paddingTop="60px">
        <Component {...pageProps} />
      </Div>
    </RecoilRoot>
  );
}

export default MyApp;
