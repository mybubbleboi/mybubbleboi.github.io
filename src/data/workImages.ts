interface WorkImageData {
  url: string;
  id: string;
  category: string;
}

const workImages: WorkImageData[] = [
  
  {
    url: "https://yihui-work.s3.us-east-2.amazonaws.com/personas_work_image.png",
    id: "personas",
    category: "design",
  },
  {
    url: "https://yihui-work.s3.us-east-2.amazonaws.com/figma_plugin.webp",
    id: "f-c-d",
    category: "code design",
  },
  {
    url: "https://yihui-work.s3.us-east-2.amazonaws.com/y0p_veiled.webp",
    id: "y0p",
    category: "code",
  },
];

export default workImages;
