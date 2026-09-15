import Hero from "@/components/Home_Page_Components/Hero";
import Services from "@/components/Home_Page_Components/Services";
import Project from "@/components/Home_Page_Components/Project";
import Insights from "@/components/Home_Page_Components/Insights";
import Work from "@/components/Home_Page_Components/Work";
import News from "@/components/Home_Page_Components/News";
import Talk from "@/components/Home_Page_Components/Talk";

export const SECTION_REGISTRY = {
  hero: { label: "Hero", component: Hero },
  services: { label: "Services", component: Services },
  project: { label: "Featured Project", component: Project },
  insights: { label: "Insights", component: Insights },
  work: { label: "Work / Search", component: Work },
  news: { label: "News", component: News },
  talk: { label: "Talk To Us", component: Talk },
};

export const DEFAULT_SECTION_ORDER = [
  "hero",
  "services",
  "project",
  "insights",
  "work",
  "news",
  "talk",
];
