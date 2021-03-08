import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";
const Blog = (props) => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Blogs</h1>
      <h7 class="mx-5 text-danger">*All my blogs will be based on my experience, what I have read and What I think. There will not be any copy paste.I will share all my ideas on this platform.</h7>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            index={index}
          />
        );
      })}
    </div>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {/* <img src={image} className="card-img" alt="..." /> */}
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <Link to={`${process.env.PUBLIC_URL}blog/${index}`}>
                Read more...{" "}
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog, BlogBuilder };
