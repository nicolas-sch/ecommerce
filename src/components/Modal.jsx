import React from 'react'

export default function Modal({open, onClose}) {
    if(!open) return null
    return (
        <div className="modalContainer">
            
            <div className="content">
                <i onClick={onClose} className="fa fa-close fa-2x" />
                <h2>Product successfully added to your cart</h2>
            </div>
        </div>
    )
}
