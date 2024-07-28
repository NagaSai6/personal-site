import React from "react";
import CarouselLayout from "../Generic/CarouselLayout";
import { Blog } from "@/types/blog";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOGS_QUERYResult } from "@/sanity.types";
import { BLOGS_QUERY } from "@/sanity/queries/sanity-queries";
// const blogs: Blog[] = [
//   {
//     title: "Innovations in AI and Machine Learning",
//     description:
//       "Exploring the latest breakthroughs in AI and machine learning technologies.",
//     content:
//       "The field of artificial intelligence (AI) and machine learning (ML) is advancing at an unprecedented pace, with new technologies emerging that promise to revolutionize various industries. This article delves into some of the most exciting innovations in AI and ML, examining their potential impacts and applications.",
//     tags: [
//       { name: "AI", url: "ai" },
//       { name: "Machine Learning", url: "machine-learning" },
//       { name: "Innovation", url: "innovation" },
//     ],
//     imageUrl: "https://picsum.photos/600/301",
//     slug: "innovations-in-ai-and-ml",
//     publishedDate: "2023-04-05",
//   },
//   {
//     title: "The Future of Remote Work",
//     description:
//       "How remote work is shaping the future of the global workforce.",
//     content:
//       "As companies around the world adapt to the new normal, remote work has become more than a temporary solution—it's shaping the future of work. This article explores the benefits, challenges, and long-term implications of remote work for employees and employers alike.",
//     tags: [
//       { name: "Remote Work", url: "remote-work" },
//       { name: "Future of Work", url: "future-of-work" },
//       { name: "Global Workforce", url: "global-workforce" },
//     ],
//     imageUrl: "https://picsum.photos/600/302",
//     slug: "the-future-of-remote-work",
//     publishedDate: "2023-04-12",
//   },
//   {
//     title: "Blockchain Beyond Cryptocurrency",
//     description:
//       "Discovering the potential of blockchain technology beyond its use in cryptocurrency.",
//     content:
//       "While blockchain is often associated with cryptocurrencies like Bitcoin, its potential applications extend far beyond digital currencies. This article explores the various ways blockchain technology is being used to innovate and solve problems across different industries.",
//     tags: [
//       { name: "Blockchain", url: "blockchain" },
//       { name: "Technology", url: "technology" },
//       { name: "Innovation", url: "innovation" },
//     ],
//     imageUrl: "https://picsum.photos/600/303",
//     slug: "blockchain-beyond-cryptocurrency",
//     publishedDate: "2023-04-19",
//   },
//   {
//     title: "The Impact of 5G Technology",
//     description: "Understanding the transformative potential of 5G technology.",
//     content:
//       "5G technology promises to revolutionize our digital world with faster speeds, lower latency, and the capacity to connect more devices than ever before. This article examines the impact of 5G on various sectors, including telecommunications, IoT, and beyond.",
//     tags: [
//       { name: "5G", url: "5g" },
//       { name: "Technology", url: "technology" },
//       { name: "Innovation", url: "innovation" },
//     ],
//     imageUrl: "https://picsum.photos/600/304",
//     slug: "the-impact-of-5g-technology",
//     publishedDate: "2023-04-26",
//   },
//   {
//     title: "Sustainable Tech: Green Computing",
//     description:
//       "Exploring the role of technology in promoting environmental sustainability.",
//     content:
//       "As environmental concerns become increasingly urgent, the tech industry is turning towards sustainable practices. This article highlights the concept of green computing, showcasing how technology can be leveraged to reduce environmental impact.",
//     tags: [
//       { name: "Sustainability", url: "sustainability" },
//       { name: "Green Computing", url: "green-computing" },
//       { name: "Technology", url: "technology" },
//     ],
//     imageUrl: "https://picsum.photos/600/305",
//     slug: "sustainable-tech-green-computing",
//     publishedDate: "2023-05-03",
//   },
//   {
//     title: "The Renaissance of Virtual Reality",
//     description:
//       "Virtual reality is making a comeback with more immersive experiences.",
//     content:
//       "After years of hype and gradual development, virtual reality (VR) is experiencing a renaissance. This article explores the latest advancements in VR technology, its current applications, and the potential it holds for transforming entertainment, education, and more.",
//     tags: [
//       { name: "Virtual Reality", url: "virtual-reality" },
//       { name: "Technology", url: "technology" },
//       { name: "Innovation", url: "innovation" },
//     ],
//     imageUrl: "https://picsum.photos/600/306",
//     slug: "the-renaissance-of-virtual-reality",
//     publishedDate: "2023-05-10",
//   },
//   {
//     title: "Cybersecurity in the Modern Age",
//     description:
//       "The evolving landscape of cybersecurity threats and defenses.",
//     content:
//       "As our lives become increasingly digitized, the importance of cybersecurity has never been more pronounced. This article examines the current state of cybersecurity, the evolving nature of threats, and the cutting-edge defenses being developed to counteract them.",
//     tags: [
//       { name: "Cybersecurity", url: "cybersecurity" },
//       { name: "Technology", url: "technology" },
//       { name: "Defense", url: "defense" },
//     ],
//     imageUrl: "https://picsum.photos/600/307",
//     slug: "cybersecurity-in-the-modern-age",
//     publishedDate: "2023-05-17",
//   },
//   {
//     title: "The Digital Transformation of Education",
//     description: "How technology is reshaping the educational landscape.",
//     content:
//       "The education sector is undergoing a significant transformation, driven by the integration of digital technologies. This article explores the impact of this digital transformation, highlighting the benefits and challenges of adopting tech-driven teaching and learning methods.",
//     tags: [
//       { name: "Education", url: "education" },
//       { name: "Digital Transformation", url: "digital-transformation" },
//       { name: "Technology", url: "technology" },
//     ],
//     imageUrl: "https://picsum.photos/600/308",
//     slug: "the-digital-transformation-of-education",
//     publishedDate: "2023-05-24",
//   },
//   {
//     title: "The Rise of Smart Cities",
//     description:
//       "Exploring how technology is creating smarter, more efficient urban environments.",
//     content:
//       "Smart cities use technology to improve the efficiency of urban services and the quality of life for their residents. This article delves into the concept of smart cities, examining how various technologies are being implemented to make cities more livable and sustainable.",
//     tags: [
//       { name: "Smart Cities", url: "smart-cities" },
//       { name: "Technology", url: "technology" },
//       { name: "Sustainability", url: "sustainability" },
//     ],
//     imageUrl: "https://picsum.photos/600/309",
//     slug: "the-rise-of-smart-cities",
//     publishedDate: "2023-05-31",
//   },
//   {
//     title: "The Evolution of Social Media",
//     description:
//       "Tracing the history and future trends of social media platforms.",
//     content:
//       "Social media has transformed the way we communicate, share information, and even perceive the world around us. This article traces the evolution of social media from its inception to the present day, speculating on future trends and their potential societal impacts.",
//     tags: [
//       { name: "Social Media", url: "social-media" },
//       { name: "Communication", url: "communication" },
//       { name: "Technology", url: "technology" },
//     ],
//     imageUrl: "https://picsum.photos/600/310",
//     slug: "the-evolution-of-social-media",
//     publishedDate: "2023-06-07",
//   },
// ];
export default async function Blogs() {
  const blogs = await sanityFetch<BLOGS_QUERYResult>({
    query: BLOGS_QUERY,
  });
  return (
    <CarouselLayout
      name="Latest Blogs"
      viewAllLink="/blog"
      viewAllText="View All Blogs"
      type="blog"
      blogs={blogs}
    />
  );
}
