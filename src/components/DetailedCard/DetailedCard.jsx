import "../DetailedCard/DetailedCard.css";
import cn from "classnames"

import { nanoid } from "nanoid";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

import UserBadge from "../UserBadge/UserBadge";
import Comments from "../Comments/Comments";
import { useState } from "react";

const DetailedCard = ({
  nickname,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedYou,
  comments,
  className
}) => {
  const [isCommentsShow, setIsCommentsShow] = useState(false);

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShow) {
      const commentsCopy = [...comments]; // после splice осталось 6 элементов
      const commentsSplice = commentsCopy.splice(- 2, 2);
      return (
        <>
          <span
            className="cnDetailedCardCommentTitle"
            onClick={() => setIsCommentsShow(true)}
          >{`Показать еще ${
            comments.length - commentsSplice.length
          } комментариев`}</span>
          {commentsSplice.map((comment) => (
            <Comments {...comment} key={nanoid()}/>
          ))}
        </>
      );
    }
    return comments.map((comment) => <Comments {...comment} key={nanoid()}/>);
  };

  return (
    <div className={cn("cnDetailedCardRoot", className)}>
      <div className="cnDetailedCardHeader">
        <UserBadge
          nickname={nickname}
          avatarUrl={avatarUrl}
          userId={userId}
        />
      </div>
      <div>
        <img className="cnDetailedCarImg" src={imgUrl} alt="img" />
      </div>
      <div className="cnDetailedCardButtons">
        {isLikedYou ? (
          <AiFillHeart className="cnDetailedCardIcon" />
        ) : (
          <AiOutlineHeart className="cnDetailedCardIcon" />
        )}
        <FaComment className="cnDetailedComment" />
      </div>
      <div className="cnDetailedCardLikes">{`Оценили ${likes} человек`}</div>
      <div className="cnDetailedCardComments">
        {renderComments()}
      </div>
      <textarea className="cnDetailedCardTextarea" />
    </div>
  );
};
export default DetailedCard;
