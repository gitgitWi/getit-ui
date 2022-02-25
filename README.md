# GetIt-UI

개인 프로젝트를 위한 Component Design System

## Structure

- Atomic Design with Monorepo
  - `yarn berry`

### Components

- `atoms`, `molecules`, `organisms`

### Storybook

- Builder

  - CRA + [Webpack5 빌더](https://storybook.js.org/blog/storybook-for-webpack-5/) 사용
    - 설치 후 반드시 ESLint 관련 설정 수정
      - storybook 실행시 기본으로 ESLint 실행
      - `package.json`에 ESlint config 있는 경우 삭제
      - `eslintrc` 파일 추가
      - 참고: <https://github.com/eslint/eslint/issues/13283#issuecomment-628962032>
    - ESBuild 활용할 수 있는 addon `storybook-addon-turbo-build`
      - <https://storybook.js.org/addons/storybook-addon-turbo-build/>
  - Vite + [Vite 빌더](https://storybook.js.org/blog/storybook-for-vite/)의 경우 yarn berry에서 의존성 제대로 못 찾는 문제 있음
    - <https://github.com/eirslett/storybook-builder-vite/issues/141>
