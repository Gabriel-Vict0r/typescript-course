import React, { createContext } from "react";
import "./App.css";
//4 - importação de componentes
import Greeting from "./components/Greeting";
//5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";
import Context from "./components/Context";

//8 - type
type textOrNull = string | null;
//9 - context
interface IAppContext {
  language: string
  framework: string
  projects: number
}
export const AppContext = createContext<IAppContext | null>(null)
function App() {
  //1 - variáveis
  const name: string = "gabriel";
  const age: number = 20;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };
  //8 - type
  const mytext: textOrNull = "teste";
  let mySecondText: textOrNull = null;
  type fixed = "isso" | "ou" | "e";
  const testingFixed: fixed = "isso";

  //9 - context
  const contextValue: IAppContext = {
    language: "javascript",
    framework: "express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript</h1>
        <p>{name}</p>
        <p>{age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <Greeting />
        <SecondComponent name="gabriel" />
        <Destructuring
          title="primeiro post"
          content="Teste"
          commentsQty={10}
          tags={["post", "teste"]}
          category={Category.P}
        />
        <State />
      </div>
      <Context />
    </AppContext.Provider>
  );
}

export default App;
