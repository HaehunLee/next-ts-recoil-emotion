import styled from '@emotion/styled';
import Link from 'next/link';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <EmotionDiv>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </EmotionDiv>
  </Layout>
);

export default IndexPage;

const EmotionDiv = styled.div`
  background-color: yellow;
`;
