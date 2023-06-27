import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

export default function App() {

  const  times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7EB'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [colaboradores, setColaboradores] = useState( [] )

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <div className='App'>
        <Banner />
        <Formulario
          times={ times.map( time => time.nome ) }
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}>
        </Formulario>

        {times.map( time => 
          <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            /> )}
      </div>
    </>
  );
}
