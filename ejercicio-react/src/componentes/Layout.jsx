import Header from './Header'
import Header2 from './Header2'
import Article from './Article'

function Layout() {
    return (
        <div className="container">
            <Header />
            <Header2 />
                <div className="content">
                    <div className = "article">   
                        <Article />
                        <Article />
                        <Article />
                    </div>
                    <div className = "sidebar">   
                        
                    </div>
                </div>
                
            

        </div>
    )
}
export default Layout