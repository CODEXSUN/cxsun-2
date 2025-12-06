import { BlogPost, Blogs } from '@/data/blog';
import WebLayout from '@/layouts/web-layout';
import { usePage } from '@inertiajs/react';


function SingleBlog() {
    const { id } = usePage<BlogPost>().props;
    const post = Blogs.find((p) => p.id === id);
    const recentBlogs = Blogs.filter((p) => p.id !== id);
    if (!post) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold text-white">
                    Blog not found ❌
                </h1>
            </div>
        );
    }

    const handleBlog = (id: string) => {
        window.location.assign(`/blogs/${id}`);
    };
    return (
        <WebLayout title="SingleBlog">
            <div
                className="mt-20"
            >
                <div className="grid grid-cols-1 gap-8 px-5 md:px-[10%] lg:grid-cols-[70%_30%]">
                    <div>
                        <img
                            src={post.PostImage}
                            alt="Blog Cover"
                            className="w-full rounded-xl object-cover"
                        />

                        {/* Author */}
                        <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                            <img
                                src={post.author.avatar}
                                className="h-8 w-8 rounded-full object-cover"
                                alt="Author"
                            />
                            <p className="font-semibold text-foreground">
                                {post.author.name}
                            </p>
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 rounded-full border bg-primary"></span>
                                <p className="text-foreground/80">
                                    {post.date}
                                </p>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="my-5 text-2xl leading-tight font-bold text-foreground/80">
                            {post.title}
                        </h1>

                        {/* Tags & Category */}
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <p className="font-medium text-foreground">
                                Category:
                            </p>
                            <span className="rounded-full bg-foreground/10 px-3 py-1 text-foreground">
                                {post.category}
                            </span>
                            <p className="ml-4 font-medium text-foreground">
                                Tags:
                            </p>
                            {post.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="rounded-full bg-foreground/10 px-3 py-1 text-foreground"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Content HTML */}
                        <div
                            className="prose prose-neutral dark:prose-invert [&>h2]:text-gradient mt-5 max-w-none [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 [&_blockquote]:pl-4 [&_blockquote]:text-foreground/70 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&>a]:text-primary [&>a]:underline hover:[&>a]:text-primary/80 [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:py-2 [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:mt-5 [&>h3]:mb-3 [&>h3]:py-2 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-foreground/90 [&>h4]:mt-4 [&>h4]:mb-2 [&>h4]:py-2 [&>h4]:text-lg [&>h4]:font-medium [&>h4]:text-foreground/85 [&>img]:my-4 [&>img]:rounded-xl [&>img]:shadow-md [&>li]:mb-1 [&>li]:py-1 [&>li]:text-base [&>li]:leading-relaxed [&>li]:text-foreground/80 [&>p]:mb-4 [&>p]:py-2 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-foreground/80 [&>strong]:font-semibold [&>strong]:text-foreground [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:py-2 [&>ul]:pl-6"
                            dangerouslySetInnerHTML={{
                                __html: post.description,
                            }}
                        />

                        <div className="mb-20"></div>
                    </div>

                    {/* Sidebar */}
                    <div className="flex h-full flex-col gap-6 border-ring/30 pr-1 pb-20 md:pb-0 lg:border-l lg:pl-5">
                        <h2 className="border-b pb-2 text-xl font-semibold">
                            Recent Posts
                        </h2>
                        {recentBlogs.map((recent, idx) => (
                            <div
                                key={idx}
                                className="grid cursor-pointer grid-cols-[30%_70%] items-start gap-4"
                                onClick={() => {
                                    handleBlog(recent.id);
                                }}
                            >
                                <img
                                    src={recent.PostImage}
                                    alt="Thumbnail"
                                    className="h-full w-full rounded-md object-scale-down"
                                />
                                <div className="flex flex-col">
                                    <h3 className="line-clamp-2 text-lg font-bold text-foreground">
                                        {recent.title}
                                    </h3>
                                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                        <p className="font-medium">
                                            {recent.author.name}
                                        </p>
                                        <span>•</span>
                                        <p>{recent.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default SingleBlog;
