import * as AiIcons from "react-icons/ai";

export const getSideBarData = (isAuthenticated) => {
  const data = [
    {
      title: "Home",
      path: "/LandingPage",
      icon: AiIcons.AiFillHome,
      cName: "nav-text",
    },
  ];

  if (!isAuthenticated) {
    data.unshift({
      title: "Login",
      path: "/",
      icon: AiIcons.AiFillHome,
      cName: "nav-text",
    });

    data.push({
      title: "Register",
      path: "/Register",
      icon: AiIcons.AiFillHome,
      cName: "nav-text",
    });
  }

  if (isAuthenticated) {
    data.push({
      title: "Profile",
      path: "/Profile",
      icon: AiIcons.AiFillHome,
      cName: "nav-text",
    });
  }

  return data;
};