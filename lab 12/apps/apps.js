import '../../index/index.css';
import '../apps/apps.css';
import User from '../comments/comments';
import User_feedback from '../feedback/feedback';
import cactusicon from '';
import facemanicon from '';
import headseticon from '';

function App(){
    return (
        <>
            <h1>User Comments</h1>
            <main className='maincontainer'>
                <User_feedback><User image={cactusicon} username="Mr.Cactus" date='04/01/25'></User></User_feedback> /*there's probably more*/
            </main>
        </>
    )
}