import React from 'react';
import { add ,mul , divi , sub} from './Calc';
function App(){
    return (
        <>

        <ul>
            <li>{add(40,4)}</li>
            <li>{mul(40,4)}</li>
            <li>{divi(40,3)}</li>
            <li>{sub(40,4)}</li>
        </ul>
    
    
        </>
    )
}

export default App;