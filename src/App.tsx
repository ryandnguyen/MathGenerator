import { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Worksheet from './components/Worksheet';
import AnswerKey from './components/AnswerKey';
import { generateEquations } from './utils/equationGenerator';
import type { Grade, Operation, Category } from './utils/equationGenerator';
import './styles/App.css';

function App() {
  const [grade, setGrade] = useState<Grade>('1st');
  const [category, setCategory] = useState<Category>('Arithmetic');
  const [operation, setOperation] = useState<Operation>('Addition');
  const [count, setCount] = useState<number>(20);
  const [useDecimals, setUseDecimals] = useState<boolean>(false);
  const [seed, setSeed] = useState<number>(0);

  const equations = useMemo(() => {
    return generateEquations(grade, category, operation, count, useDecimals);
  }, [grade, category, operation, count, useDecimals, seed]);

  const handleGenerate = useCallback(() => {
    setSeed(s => s + 1);
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
          category={category}
          setCategory={setCategory}
          operation={operation}
          setOperation={setOperation}
          count={count}
          setCount={setCount}
          useDecimals={useDecimals}
          setUseDecimals={setUseDecimals}
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
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
