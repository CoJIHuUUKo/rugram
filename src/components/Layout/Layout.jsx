import "../Layout/Layout.css"
import Navbar from "../Navbar/Navbar";

const Layout = ({nickName, avatarUrl, id, children}) => {
    return (<div className="cnLayoutRoot">
        <div>
            <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id}/>
        </div>
        <div className="cnLayoutBody">{children}</div>
        </div>
    )
}
export default Layout;