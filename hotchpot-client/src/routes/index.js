import Index from 'views/Index.js'
import ShowItem from 'views/ShowItem.js'
// import About from 'views/About.js'
import Show from 'views/Show.js'
import UpdateItem from 'views/UpdateItem.js'
// import Search from 'views/Search.js'
import NewItem from 'views/NewItem.js'

let indexRoutes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About
  // },
  {
    path: "/show-item",
    name: "ShowItem",
    component: ShowItem
  },
  {
    path: "/update-item",
    name: "UpdateItem",
    component: UpdateItem
  },
  // {
  //   path: "/search",
  //   name: "Search",
  //   component: Search
  // },
  {
    path: "/new-item",
    name: "NewItem",
    component: NewItem
  }
  // {
  //   path: "/collections",
  //   name: "Collections",
  //   component: Collections
  // }
];
export default indexRoutes;
