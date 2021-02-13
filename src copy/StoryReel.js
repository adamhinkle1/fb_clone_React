import React from 'react'
import './StoryReel.css'
import Story from './Story'
function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image='https://loremflickr.com/640/360'
            profileSrc = 'https://i.pravatar.cc/100'
            title='Josh'/>
            <Story image='http://placeimg.com/640/360/any'
            profileSrc = 'https://i.pravatar.cc/200'
            title='Omar'/>
            <Story image='https://placebear.com/640/360'
            profileSrc = 'https://i.pravatar.cc/300'
            title='Adam'/>
            <Story image='https://picsum.photos/seed/picsum/200/300'
            profileSrc = 'https://i.pravatar.cc/400'
            title='David'/>
            <Story image='https://picsum.photos/200/300.webp'
            profileSrc = 'https://i.pravatar.cc/500'
            title='JOAD'/>
        </div>
    )
}

export default StoryReel
