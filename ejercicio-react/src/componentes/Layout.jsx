import Header from './Header'
import Header2 from './Header2'
import Article from './Article'
import Sidebar from './Sidebar'
import Posts from './Posts'
import Footer from './Footer'

function Layout() {
    return (
        <div className="todo">
            <div className="title">
                <Header />
            </div>
            <div className="container">
                <Header2 />
                <div className="content">
                    <div className="article">
                        <Article />
                    </div>
                    <div className="article">
                        <Article />
                    </div>
                    <div className="article">
                        <Article />
                    </div>
                </div>
                <div className="sidebar">
                    <Sidebar />
                    <Sidebar />
                    <Sidebar />
                </div>
                <div className="related-post">
                    <Posts />
                </div>
                <div className="related-post">
                    <Posts />
                </div>
                <div className="related-post">
                    <Posts />
                </div>
                <div className="related-post">
                    <Posts />
                </div>
                <div className="related-post">
                    <Posts />
                </div>
                <div className="footer">
                    <Footer />
                </div>







            </div>
        </div>
    )
}
export default Layout