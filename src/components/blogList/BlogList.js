import "./BlogList.css";
import BlogListContentLeft from "./blogListContent/BlogListContentLeft";
import BlogListContentRight from "./blogListContent/BlogListContentRight";

function BlogList() {
  return (
    <div className="blog-section container">
      <BlogListContentLeft />
      <BlogListContentRight />
    </div>  
  );
}
export default BlogList;
