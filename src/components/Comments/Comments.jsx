import "../Comments/Comments.css"

const Comments = ({nickname, text}) => {
    return (<div className="cnCommentsRoot">
       <span className="cnCommentsName">{nickname}</span>
       <span>{text}</span>
        </div>
    )
}
export default Comments;