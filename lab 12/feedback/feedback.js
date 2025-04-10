import React from "react";
import "../../index/index.css";

const User_feedback = function(props){
    return(
        <>
            <main className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content"><p>{props.username}</p></div>
                    <div className="description"><p>{props.children}</p></div>
                    <div className="cardfooter"><p className="addicon"><span>&#10011;</span>Add Feedback</p></div>
                </section>
            </main>

            <ModalWindow/>
        </>
    )
}

export default User_feedback