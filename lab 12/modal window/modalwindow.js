import React from 'react';
import '../../index/index.css';

const ModalWindow = function(props){
    const closemodalwindow = function(){
        const closemodal = document.querySelector(".modalwindow")
        ModalWindow.style.display = `none`
    }
    return(
        <>
            <section className='modalwindow'>
                <div className='modalcontent'>
                    <header className='modalheader'>
                        <p>Add Feedback</p>
                        <p className='closemodal' onClick={closemodalwindow}>&#x58;</p>
                    </header>
                    <main className='modalbody'>
                        <input className='commentarea' type='text' placeholder='Type your comments'/>
                        <p className='description_comment'>Max 200 Characters</p>
                        <button className='btnpostfeedback'>Post Feedback</button>
                    </main>
                </div>
            </section>
        </>
    )
}

export default ModalWindow