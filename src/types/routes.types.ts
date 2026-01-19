// export const userRoutes=[
//     {
//       title: "Blog Management",
//       url: "#",
//       items: [
//         {
//           title: "Create a blog ",
//           url: "/user-dash",
//         }
       
//       ],
//     },
  
//   ]

export interface Route {
    title : string;
    items :{
        title : string;
        url : string;
    } []
}