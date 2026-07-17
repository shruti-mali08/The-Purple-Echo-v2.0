import { createPortal } from 'react-dom';
import { AiFillCloseSquare } from 'react-icons/ai';

import './MemberModalPlaceholder.css'

function MemberModalPlaceholder({ onClose }) {
    // Creating a portal to display the pop up dialogue box design
    return createPortal(
        <div className='backdropOverlay' onClick={onClose}>
            <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
                <article className='wholeContainer'
                    onClick={(e) => e.stopPropagation()}>
                    <section style={{ display: "flex" }}>
                        <AiFillCloseSquare className='closeButton' onClick={onClose}></AiFillCloseSquare>
                    </section>
                    <section className='placeholder'>
                        <hr></hr>
                        <h3>🚧 Profile Under Development</h3>

                        <p>
                            This member's archive is currently being researched and documented.
                            <br></br>
                            More information coming in future updates.
                        </p>
                        <hr></hr>
                    </section>
                </article>
            </div>
        </div>
        , document.getElementById('modalRoot'));
}

export default MemberModalPlaceholder;