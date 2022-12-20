import React, { useReducer }  from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" 
                        onClick={() => login(dispatch, 'Eduardo')}>Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'number_Mult7'})}>*7</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'number_Div25'})}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'number_Int'})}>Int</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'number_addN', payload: 11})}>+11</button>                                        
                </div>
            </div>
        </div>
    )
}

export default UseReducer
