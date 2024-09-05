interface WorkListItem {
  title: string;
  description: string;
  blurb: string;
  year: string;
  category: string;
  url: string;
  new: boolean;
  wip: boolean;
}

export const works: WorkListItem[] = [
  {
    title: "personas",
    description: "collection of my in-game characters",
    blurb: "in-game personas",
    year: "2024",
    category: "design art",
    url: "/personas",
    new: true,
    wip: false,
  },
  {
    title: "f-c-d",
    description: "figma plugin for competitive designing",
    blurb: "figma plugin",
    year: "2023–",
    category: "code design",
    url: "/works/f-c-d",
    new: false,
    wip: true,
  },
  {
    title: "y0p",
    description: "experiments in text-highlighting",
    blurb: "text-highlighting",
    year: "2023",
    category: "code",
    url: "/works/y0p",
    new: false,
    wip: false,
  },
];
