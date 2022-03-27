import "./App.css";
//import DemoComponent from "./Components/Performance Enhancement - useCallback, useMemo/useMemo/DemoComponent";
// import CounterUseReducer from "./Components/CounterUseReducer";
// import Counter from "./Components/Counter";
// import TimerUseRef from "./Components/useRef/TimerUseRef";
// import DemoUseLayoutEffect from "./Components/DemoUseLayoutEffect";
// import DemoDocumentTitle from "./Components/CustomHooks/useDocumentTitle/DemoDocumentTitle";
// import DemoUseInput from "./Components/CustomHooks/useInput/DemoUseInput";
// import UpdatingPhase from "./Components/LifeCycle Methods/UpdatingPhase";
// import Parent from "./Components/React Memo/Parent";
// import DemoRef from "./Components/Refs/DemoRef";
// import Parent from "./Components/Refs/Parent to child/Parent";
// import Parent from "./Components/Refs/Forwarding Refs/Parent";
// import DemoComponent from "./Components/Error Boundaries/DemoComponent";
// import ClickCounter from "./Components/Higher Order Components/ClickCounter";
// import HoverCounter from "./Components/Higher Order Components/HoverCounter";

import Counter from "./Components/Render Props/Counter";
import ClickCounter from "./Components/Render Props/ClickCounter";
import HoverCounter from "./Components/Render Props/HoverCounter";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import counterReducer from "./redux/reducer";

// const store = createStore(counterReducer);
// store.subscribe(() => console.log('Connected'));

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Counter />
    //   </div>
    // </Provider>
    // <div className="App">
    //   <CounterUseReducer />
    // </div>
    <div className="App">
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
