import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../UI/Pages/WelcomePage";
import About from "../UI/Pages/About";
import Projects from "../UI/Pages/Projects";
import SoftwareEng from "../UI/Pages/Software";
import Entreprener from "../UI/Pages/Entreprener";
import Tech from "../UI/Pages/Tech";
import ErrorPage from "../UI/Pages/Error";
import Articles from "../UI/Pages/Articles";
import Libary from "../UI/Pages/Library";
import Posts from "../UI/Pages/Posts";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
interface routes {
  postId: any
}
const Index: React.FunctionComponent = () => {

const routes = {
    home: "/",
    about: "/aboutme",
    projects: "/projects",
    software: "/software-eng",
    ent: "/entrepreneur",
    tech: '/tech',
    pricing: "/pricing",
    error: "*",
    libary: "/library",
    articles: "/library/articles",
    read: "/library/articles/posts/:articleId"
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={routes.home} element={<WelcomePage />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.software} element={<SoftwareEng />} />
        <Route path={routes.ent} element={<Entreprener />} />
        <Route path={routes.tech} element={<Tech />} />
        <Route path={routes.pricing} element={<Tech />} />
        <Route path={routes.articles} element={<Articles />} />
        <Route path={routes.libary} index element={<Libary />} />
        <Route path={routes.read} element={<Posts />} />
        <Route path={routes.error} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
