import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'blue', 'green', 'yellow']
    const randCol = colors[Math.floor(Math.random() * 3)]
    const className = randCol + '-text'
    
    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent { ...props }/>
            </div>
        )
    }
}

export default Rainbow