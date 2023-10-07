# :ship:Todo List For Lab021
![todolist](https://github.com/DeveloperLeeSoyeon/Todo-List/assets/145194133/48b35f5e-2790-4f13-ac68-4b172825dc5e)
<br/><br/><br/>
## 📢 Introduction
- React 투두 리스트 구현 
<br/><br/><br/>

## 🛠 Tech stack
<img src="https://img.shields.io/badge/-React-61DAFB?style=flat-plastic&logo=React&logoColor=white"/>   <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-plastic&logo=JavaScript&logoColor=white"/>   <img src="https://img.shields.io/badge/-CSS-F59C54?style=flat-plastic&logo=CSS3&logoColor=white"/>   <img src="https://img.shields.io/badge/-HTML-E34F26?style=flat-plastic&logo=HTML5&logoColor=white"/>    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-plastic&logo=GitHub&logoColor=white"/>
<br/><br/><br/><br/>


## 👩‍💻 주요 기능 
 - 할 일 전체 목록 출력하기
 - 할 일 추가하기
 - 할 일 삭제하기
 - 할 일 상태 변경하기 (TO DO -> DONE)
 - 필터링 기능 제공하기 (ALL, TO DO, DONE)
 - 로컬 스토리지에 데이터 저장하기

<br/><br/><br/>


## :question: :exclamation: 어려웠던 점 및 해결방법


> ### (문제) 추가한 TO DO를 저장하는 방법
- 처음 useState안에 배열로 디폴트로 들어갈 할 일 몇 가지를 예시로 저장해 둠
- 그러다보니 TO DO 를 추가했으나 새로고침 했을 때 전부 사라지고 예시만 남음


> ### (해결) Localstorarge 사용하여 저장
- useEffect 의 LocalStorage 사용해서 저장함
- useState안의 배열을 지우고 LocalStorage 안에 Todos를 가져와 저장한 하는 함수를 만듬
- const [todos, setTodos] = useState(**readTodos()**);

<br/><br/>
  
> ### (문제) 하지만 컴포넌트가 랜더링 될 때마다 호출되서 초기값을 불필요하게 계속 읽어옴
- useState는 호출될 때마다 초기값을 불러오지만 내부적으로 업데이트 된 값이 있다면 초기값을 무시하고 내부적으로 사용하는 값을 가져옴
- 그래서 내부에 저장된 것을 보여주기 때문에 무리는 없어보이나 랜더링 될 때마다 계속해서 불필요하게 초기값을 읽어옴



> ### (해결) 호출한 값 자체를 전달하는 것이 아니라 콜백함수로 감싸줌
- 함수를 호출한 값 자체를 전달하는 것이 아니라 콜백함수로 감싸줘서 컴포넌트가 마운트될 때 딱 한번만 호출되도록 함
- const [todos, setTodos] = **useState(() => readTodos())**;
- 이렇게 작성하면 초기값이 필요한 경우에만 우리가 전달한 함수를 호출해서 초기값을 얻을 거고 함수를 아무리 많이 만들어서 전달해도 내부적으로 가지고 있는 상태가 있으면 초기값이 필요하지 않으므로 초기값을 반환하는 함수를 호출하지 않을 것임


<br/><br/><br/>




## :100: 느낀점


> ### 자바스크립트와 css의 기본기가 정말 중요하다
- 자바스크립트와 리액트를 독학하면서 느낀 것은 기본기가 정말 중요하다는 점
- 첫 프로젝트로 투두 리스트를 하면서 쉽게 완성할 수 있을거라고 생각했지만 생각보다 기본기가 탄탄하지가 않아 계속해서 다시 자바스크립트 문법 공부를 하러 돌아갔다. 프론트엔드 개발자로 성장하기 위해서 기본기 좀 더 튼튼하게 해야겠다 느낌

> ### 흔한 주제이나 컴포넌트 간의 통신과 상태 관리를 이해하고 쓰는데 적합한 프로젝트
- 흔하고 기능이 간단하여 특별한게 없어 보이지만, 컴포넌트 간에 정보를 주고 받는 로직을 이해하는데 큰 도움이 됨. 앞으로도 더욱 기본기에 충실한 프로젝트를 해 나가며 기본기가 탄탄한 개발자로 성장하고 싶다 다짐하게 됨
  
