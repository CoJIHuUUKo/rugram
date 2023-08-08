import { useDispatch, useSelector } from "react-redux";
import DetailedCard from "../../components/DetailedCard/DetailedCard";
import Layout from "../../components/Layout/Layout";
import "../MainPage/MainPage.css";
import { useEffect, useState } from "react";
import { getPhotos } from "../../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import { Bars } from "react-loader-spinner";

const MainPage = () => {
  const photos = useSelector(state => state.photos.photos)
  const loading = useSelector(state => state.photos.isPhotosLoading)
  const total = useSelector(state => state.photos.totalPhotos)

  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPhotos(page))
    // РАЗОБРАТЬСЯ СО СТЕЙТОМ
  }, [page])

  const nextHandler = () => {
    setPage(page + 1)
  }

  return (
    <Layout nickName="Kirill" id={1}>
      <div className="cnMainPageRoot">
      {loading ? (<div className="cnMainPageLoaderContainer">
            <Bars color="#000BFF" height={80} width={80}/>
          </div>) :
        <InfiniteScroll dataLength={photos.length}
        next={nextHandler}
        hasMore={photos.length < total}
        loader={<div className="cnMainPageLoaderContainer">
        <Bars color="#000BFF" height={40} width={40}/>
      </div>}
        endMessage={
          <p>Thats all!</p>
        }>
           { photos.map(({author, imgUrl, likes, comments, id}) => (<DetailedCard
      key={id}
        nickname={author.nickname}
        avatarUrl={author.avatarUrl}
        userId={author.id}
        imgUrl={imgUrl}
        likes={likes.length}
        isLikedYou={true}
        comments={comments}
        className="cnMainPageCard"
      />))}
        </InfiniteScroll>}
      </div>
    </Layout>
  );
};
export default MainPage;
