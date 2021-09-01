import React, {useState} from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from './StateProvider'
import db from './firebase'
import firebase from 'firebase'
function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // send data to database
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        // clear form
        setInput('');
        setImageUrl('');
    }
    return (
        <div className = 'messageSender'>
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    
                    <input className='messageSender_input' 
                    placeholder={`What's on your mind ${user.displayName}`}
                    value={input}
                    onChange = {(e) => setInput(e.target.value)}/>
                    <input placeholder='image URL (Optional)' 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}/>
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoLibraryIcon style= {{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
