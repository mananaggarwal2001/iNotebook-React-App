import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                <div class="alert alert-primary" role="alert">
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Alert;