import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {

    const [nome, setNome] = useState('Digite seu nome');
    const [cargo, setCargo] = useState('Digite seu cargo');
    const [imagem, setImagem] = useState('add imagem');
    const [time, setTime] = useState('Programação');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Formulário de cadastro</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto 
                    oobrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o path da imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa 
                    oobrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario