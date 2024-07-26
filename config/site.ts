export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mua bán Rao vặt Đà Lạt, Bảo Lộc, Lâm Đồng",
  description: "Mua bán Rao vặt Đà Lạt, Bảo Lộc, Lâm Đồng",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Giới thiệu",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "#",
    twitter: "#",
    docs: "#",
    discord: "#",
    sponsor: "https://ictdalat.vn",
  },
};
