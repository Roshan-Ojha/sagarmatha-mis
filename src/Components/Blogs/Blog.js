import { useState } from "react";
import "./Blogs.css"
import Bipin from "../../assets/bipin.jpg"
function Blog()
{
const [blogData, setBlogData] = useState("");
const[printData, setPrintData] = useState("");


    return(
        <div className="mainBlogs">
            <div className="Blogs">
                {
                    printData
                }
            </div>

            <div className="inputPart">

                <div className="Bipin">
                    <img src={Bipin} alt = "" style={{height:"30px",width:"30px",padding:"15px 2px 0px 0px",}} ></img>
                </div>
                <textarea onChange={e=>setBlogData(e.target.value)}></textarea>
            </div>
            <div>
                <button onClick={e=>setPrintData(blogData)}>Add</button>
            </div>
        </div>
    );
}
export default Blog;