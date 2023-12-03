import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img scr='https://img.favpng.com/20/5/24/social-media-computer-icons-avatar-user-internet-png-favpng-DwdFSAXdR58nGmLe4y67jEej0_t.jpg' />
            {props.message}
            <div>
                <button>like</button> {props.likesCount}
            </div>
        </div>
    )      
}     
export default Post;

//const Post = () => {1

//     const [count, setCount] = useState(0)

//     const handlePlus = () => {
//         setCount(count + 1)
//     }

//     return (
//         <div className="counter">
//             <div className="count">
//                 <div>{count}</div>
//                 <button onClick={handlePlus}>like</button>
//             </div>
//         </div>
//     )
// };

// export default Post;