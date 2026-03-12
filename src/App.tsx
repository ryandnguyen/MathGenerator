import { useState, useEffect } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Worksheet from './components/Worksheet';
import AnswerKey from './components/AnswerKey';
import { generateEquations } from './utils/equationGenerator';
import type { Grade, Operation, Equation } from './utils/equationGenerator';
import './styles/App.css';

function App() {
  const [grade, setGrade] = useState<Grade>('1st');
  const [operation, setOperation] = useState<Operation>('Addition');
  const [count, setCount] = useState<number>(20);
  const [equations, setEquations] = useState<Equation[]>([]);

  const handleGenerate = () => {
    const newEquations = generateEquations(grade, operation, count);
    setEquations(newEquations);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Controls
          grade={grade}
          setGrade={setGrade}
          operation={operation}
          setOperation={setOperation}
          count={count}
          setCount={setCount}
          onGenerate={handleGenerate}
          onPrint={handlePrint}
        />
        <section className="worksheet-preview">
          <div className="container">
            <Worksheet 
              equations={equations} 
              grade={grade} 
              operation={operation} 
            />
            <AnswerKey 
              equations={equations} 
              grade={grade} 
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
