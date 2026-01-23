import BlogCard from "@/components/modules/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { blogServices } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types/blog.types";



export default async function Home() {

// const {data}= await userService.getSession()
//   console.log(data);

const {data}= await blogServices.getBlogPosts({
  isFeatured:false,
  search :'f',
},
{
  cache :'no-cache',
  // revalidate:10
}


)
console.log(data);

  
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
      {data?.result?.data?.map((post: BlogPost) => (
     
        
        <BlogCard key={post.id} post={post} />
        
      ))}
    </div>
  );
}
