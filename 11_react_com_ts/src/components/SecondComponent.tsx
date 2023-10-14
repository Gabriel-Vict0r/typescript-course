import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
      <div>
          <p>Meu segundo componente</p>
          <p>{props.name}</p>
    </div>
  )
}

export default SecondComponent