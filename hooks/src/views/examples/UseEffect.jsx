import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFactorial(n - 1) * n
}

const UseEffect = (props) => {
    //Ex #01
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    //efeito colateral - mudar o dado da aplicacao
    useEffect(function(){
        setFactorial(calcFactorial(number))
    }, [number])
    //quando o valor é modificado a funcao é chamada

    useEffect(function(){
        if(factorial > 1000000)
            document.title = "Eita!!!"
    }, [factorial])

    //Ex #02
    const [status, setStatus] = useState(1)

    useEffect(function(){
        setStatus(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? 'Não existe' : factorial}</span>
                </div>
                <input type="number" className="input" value={number} 
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
               
            </div>
        </div>
    )
}

export default UseEffect
