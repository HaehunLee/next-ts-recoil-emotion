# Boilerplate with NextJs ( Feat. TypeScript )

```shell
$ npx create-next-app --example with-typescript project-name
```

---

---

## husky & lint-staged

- husky를 통해 git hooks인 pre-commit을 통해 git commit을 할때, 특정 script를 실행시킬 수 있다.

( commit, push 등 다양한 git script에 hook을 걸 수 있음. )

- lint-staged를 통해 eslint, prettier 검사 및 수정을 하게된다.

```shell
$ npm install --save-dev husky lint-staged
```

1. modify package.json
   ```json
   // package.json
   {
       ...
       "scripts": {
           ...
           "prepare": "husky install",
       },
       "husky": {
           "hooks": {
               "pre-commit": "lint-staged"
           }
       },
       "lint-staged": {
           "*.{ts,tsx,js,jsx}": [
           "eslint --fix",
           "prettier --write",
           "git add"
           ]
       },
   }
   ```

---

## ESLint & Prettier

- ESLint는 자바스크립트의 문법 에러를 표시해줌.

- Prettier는 코드를 저장할 때, 정해놓은 규칙에 맞게 자동으로 정렬해서 가독성을 높이고 코드 스타일을 통일시켜줌.

```shell
$ npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next eslint-config-prettier eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier
```

- next와 typescript 사용으로 인한 eslint, prettier 추가 plugin 및 parser 설치

1. [.eslintrc.js 파일 작성](/.eslintrc.js)
2. [.prttierrc 파일 작성](/.prttierrc)

---

## [Emotion.js](https://emotion.sh/docs/introduction)

- Css in JS 스타일링 라이브러리.

```shell
$ npm install @emotion/react @emotion/styled
$ npm install --save-dev @emotion/babel-plugin
```

1. usage

```js
import styled from '@emotion/styled';

const EmotionDiv = styled.div`
  background-color: yellow;
`;

const Component = () => (
  <div>
    <EmotionDiv>이렇게 사용한다.</EmotionDiv>
  </div>
);
```

2. dev 환경 className 세팅

- [.babelrc 편집](/.babelrc)
- 개발 환경에서 아래와 같이 styled한 컴포넌트의 이름을 className으로 지정하여 유지보수의 용이함을 더할 수 있음.

- 적용 전
  ![적용 전](/emotion_usage_02.png)

- 적용 후
  ![적용 후](/emotion_usage_01.png)

3. ThemeProvider

- 작성 중...

---

## Recoil.Js

- facebook 개발팀에서 만든 react 전용 Global-State 관리 라이브러리.

```shell
npm install recoil
```

1. provider 세팅

```js
import { RecoilRoot } from 'recoil';

// 앱의 최상단 컴포넌트에 RecoilRoot Provider로 Wrapping해주면 끝.
function RootApp() {
  return <RecoilRoot>...</RecoilRoot>;
}

export default RootApp;
```

2. usage

```js
// /recoil/board/atoms.js
import { atom } from 'recoil';

export const TestState = atom({
  key: 'TestState',
  default: '기본값',
});

// Compoentns.jsx
import { useRecoilState } from 'recoil';
import { TestState } from 'recoil/board/atoms';

const Component = () => {
  const [test, setTest] = useRecoilState(TestState);

  return (
    <div>
      <button onClick={() => setTest('변경값')}>변경</button>
      <p>test: {test}</p>
    </div>
  );
};
```
