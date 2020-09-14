# 시작하기

## Redux?
데이터를 중앙에서 관리하기 위한 기술.  
Context 와 비슷하다. 하지만 React에는 Context API 또한 존재하며 Context 보다 복잡하지나 성능은 더 뛰어나며 
React 뿐만 아니라 다른 JS 라이브러리에서도 사용할 수 있는 기술이다.

## Install Redux devtools
설치: [Chrome 웹스토어 - Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related)   
createStore()의 2번째 인자로 다음의 내용 추가 필요.
```javascript
const store = createStore(
     reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

Chrome 개발자도구에서 Redux 창으로 이동하면 Redux 관련 이벤트 발생 시 Redux의 State 값을 확인 가능.
* 참조사이트: [zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#installation)

## Redux Hook

* 참조사이트: [react-redux 에서 Hooks 사용하기](https://velog.io/@velopert/react-redux-hooks)