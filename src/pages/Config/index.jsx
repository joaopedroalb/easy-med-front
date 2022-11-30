import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { ConfigContext } from '../../context/ConfigContext';
import { PageBg } from './style';

function ConfigPage() {
    const [baseUrl, setBaseUrl] = useState(localStorage.getItem('baseUrl'))

    const {handleChangeUrlLocalStorage} = useContext(ConfigContext)

    return (
        <PageBg>
            <h1>Mude a url da API</h1>
            <input value={baseUrl} onChange={({target})=>setBaseUrl(target.value)}/>
            <button onClick={()=>handleChangeUrlLocalStorage(baseUrl)}>Salvar</button>
        </PageBg>
    )
}

export default ConfigPage;