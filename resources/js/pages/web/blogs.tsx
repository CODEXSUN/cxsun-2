import BlogList from '@/components/blog/BlogList';
import { Blogs } from '@/data/blog';
import WebLayout from '@/layouts/web-layout';

function Blog() {
    const AllBlog = [...Blogs];
    return (
        <WebLayout title="Blog">
            <div className="">
                <BlogList
                    blogs={AllBlog}
                    banner={{
                        title: 'Blogs',
                        description: `Explore insightful articles, practical tips, and fresh
              perspectives on topics that matter — curated to inform, inspire,
              and ignite conversation.`,
                        image: '/images/home/slider/textile4.jpg',
                    }}
                />
            </div>
        </WebLayout>
    );
}

export default Blog;
