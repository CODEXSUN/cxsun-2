"use client"

import { BlogPost } from "@/data/blog";

interface BannerInfo {
  title: string;
  description: string;
  image: string;
}

interface BlogListProps {
  blogs: BlogPost[];
  banner: BannerInfo;
}
function BlogList({ blogs, banner }: BlogListProps) {
  const categories = [...new Set(blogs.map((blog) => blog.category))];
  const tags = [...new Set(blogs.flatMap((blog) => blog.tags))];


const handleBlog = (id: string) => {
  window.location.assign(`/blogs/${id}`);
};


  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] w-full hidden md:block">
        <img
          src={banner.image}
          alt="Sample"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="md:w-2/3 px-5 lg:px-[10%] text-foreground space-y-4">
            <h1 className="text-2xl text-white lg:text-6xl font-bold animate__animated animate__fadeIn animate__fast">
              {banner.title}
            </h1>
            <p className="text-sm sm:text-md text-white lg:text-lg text-justify animate__animated animate__fadeIn animate__slow">
              {banner.description}
            </p>
          </div>
        </div>
      </div>

      {/* 📱 Simplified Banner for mobile */}
      <div className="block md:hidden text-foreground px-5 py-5 space-y-3 text-center">
        <h1 className="text-4xl font-bold">{banner.title}</h1>
        <p className="text-sm text-justify">{banner.description}</p>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-[70%_30%] gap-5 px-5 md:px-[10%]">
        {/* Blog List */}
        <div className="space-y-5 pt-20 md:pb-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleBlog(blog.id)}
              className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-5 p-3 border border-ring/30 rounded-md hover:shadow cursor-pointer transition"
            >
              <img
                src={blog.PostImage}
                alt={blog.title}
                loading="lazy"
                className="object-scale-down w-full h-full"
              />
              <div className="flex flex-col justify-between pr-4">
                <div>
                  <h2 className="text-xl font-bold line-clamp-2">
                    {blog.title}
                  </h2>
                  <div
                    className="text-sm line-clamp-2 md:line-clamp-3 mt-1 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground flex flex-wrap gap-2">
                  <span className="font-semibold">{blog.author.name}</span>
                  <span>{blog.date}</span>
                  <span className="bg-foreground px-2 rounded text-primary">
                    {blog.category}
                  </span>
                  {/* <span>👍 {blog.l}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:border-l py-20 lg:pl-5 border-ring/30">
          <hr className="lg:hidden border-ring/30" />
          {/* <GlobalSearch
            onSearchApi={""}
            onNavigate={function (path: string): void {
              throw new Error("Function not implemented.");
            }}
          /> */}

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-primary cursor-pointer">
                  • {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold bg-foreground text-background px-2 py-1 rounded cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
