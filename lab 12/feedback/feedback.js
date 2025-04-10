import React from "react";
import "../../index/index.css";

const User_feedback = function(props){
    const openmodalwindow = function(){
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = `block`;
    }
    return(
        <>
            <main className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content"><p>{props.username}</p></div>
                    <div className="description"><p>{props.children}</p></div>
                    <div className="cardfooter"><p className="addicon" onClick={openmodalwindow}><span>&#10011;</span>Add Feedback</p></div>
                </section>
            </main>

            <ModalWindow/>
        </>
    )
}

export default User_feedback