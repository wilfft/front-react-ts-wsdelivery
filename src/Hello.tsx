type Props = {
  mensagem: string;
};

function Hello({ mensagem }: Props) {
  return <h1> ola {mensagem}</h1>;
}

export default Hello;
