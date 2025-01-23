import { createClient } from "next-sanity";


const client = createClient({
    projectId:"nrcjqxsf",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-10-10"
})
export async function sanityFetch({query , params={}}:{query:string , params?:any }){
    return await client.fetch(query,params)
}














// import { createClient } from "next-sanity";

// const client = createClient({
//   projectId: "nrcjqxsf",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2023-10-10",
// });

// // Generic function to fetch data
// export async function sanityFetch({
//   query,
//   params = {},
// }: {
//   query: string;
//   params?: any;
// }) {
//   return await client.fetch(query, params);
// }

// // Fetch all categories
// export async function fetchCategories() {
//   const query = `
//     *[_type == "food"].category | order(category asc) | unique()
//   `;
//   return await sanityFetch({ query });
// }

// // Fetch all food items
// export async function fetchAllFoodItems() {
//   const query = `
//     *[_type == "food"] {
//       _id,
//       name,
//       category,
//       price,
//       originalPrice,
//       tags,
//       "image": image.asset->url,
//       description,
//       available
//     }
//   `;
//   return await sanityFetch({ query });
// }