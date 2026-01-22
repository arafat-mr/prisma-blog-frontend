import { Button } from "@/components/ui/button";
import { blogServices } from "@/services/blog.service";
import { userService } from "@/services/user.service";



export default async function Home() {

// const {data}= await userService.getSession()
//   console.log(data);

const {data}= await blogServices.getBlogPosts()
console.log(data);

  
  return (
    <div >
      <Button variant="outline">Click me!</Button>
     
    </div>
  );
}
