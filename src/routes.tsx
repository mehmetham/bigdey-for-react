import Home from "./pages/home/homePage";
import Contact from "./pages/contactPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/contact",
    exact: true,
    component: Contact
  }
 
];

export default routes;
