import styled from '@emotion/styled';
import Link from 'next/link';
import { useRecoilState } from 'recoil';

import Layout from '../components/Layout';

import { TestState } from 'recoil/board/atoms';

const IndexPage = () => {
  const [test, setTest] = useRecoilState(TestState);

  return (
    <Layout title="Home | BoilterPlate - Next.js + TypeScript + Emotion + Recoil">
      <EmotionDiv>
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
      </EmotionDiv>
    </Layout>
  );
};

export default IndexPage;

const EmotionDiv = styled.div`
  background-color: yellow;
`;
