import { parse } from "@babel/parser";

// TMP JS code
const code = `
const linearFunc = (inputArr) => {
  const currMax = -Infinity;
  
  for (let el of inputArr) {
    if (el > currMax) currMax = el;
  }

  return currMax;
}
`;

const App = () => {
  const result = parse(code);
  console.log(result.program.body[0].declarations);
};

export default App;
