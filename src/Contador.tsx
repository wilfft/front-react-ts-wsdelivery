import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const aumenta = () => setContador(contador + 1);
  const diminui = () => setContador(contador - 1);

  return (
    <div>
      <h1> Valor: {contador} </h1>
      <button onClick={aumenta}>AUMENTA</button>
      <button onClick={diminui}>DIMINUI</button>
    </div>
  );
};

export default Contador;
