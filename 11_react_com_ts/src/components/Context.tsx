import React, {useContext} from 'react'

import { AppContext } from '../App'

const Context = () => {
    const details = useContext(AppContext)
    return (
        <>
            {details && (
                <div>
                    <h2>Linguagem: {details.language}</h2>
                    <h4>FW: {details.framework}</h4>
                    <h5>Projects: {details.projects}</h5>
            </div>)}
        </>
  )
}

export default Context