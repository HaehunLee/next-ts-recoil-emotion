import Link from 'next/link';
import { useRecoilState } from 'recoil';

import { Div } from '#/components/atoms';
import Layout from 'components/Layout';
import { TestState } from 'recoil/board/atoms';

const IndexPage = () => {
  const [test, setTest] = useRecoilState(TestState);

  return (
    <Layout title="Home | BoilterPlate - Next.js + TypeScript + Emotion + Recoil">
      <Div backgroundColor="yellow">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
        <button
          onClick={() => {
            setTest('변경값');
          }}
        >
          테스트 값 변경
        </button>
        <p>test: {test}</p>
      </Div>
    </Layout>
  );
};

export default IndexPage;
