const Bloglist = ({blogs, title}) => {


    return ( 
        <div className="blog-list">
          <h2>{title}</h2>
             {blogs.map((blog) =>(
                      <div key={blog.id} className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>Written By: {blog.author}</p>
                      </div>
                      
                   ) )}
        </div>
     );
}
 
export default Bloglist;