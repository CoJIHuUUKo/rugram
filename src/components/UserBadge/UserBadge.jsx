import { useNavigate } from "react-router-dom";
import "../UserBadge/UserBadge.css"

const UserBadge = ({nickname, avatarUrl, id}) => {

    const navigate = useNavigate();

    const userBadgeClick = () => {
        navigate(`${id}`)
    }
    return (<div className="cnUserBadgeRoot" onClick={userBadgeClick}>
        {avatarUrl ? <img src={avatarUrl} alt="logo" className="cnUserBadgeAvatar"/> : <div className="cnUserBadgePlaceholder" />}
        <span className="cnUserBadgeName">{nickname}</span>
        </div>
    )
}
export default UserBadge;