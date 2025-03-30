import { Home, User, Smartphone, Code, PenTool, Paintbrush, Hammer, Zap } from "lucide-react";
import { BlogProps, NavigationProps, ServiceProps, TestimonialProps } from "@/types";

export const services: ServiceProps[] = [
    {
        title: "Web Development",
        description: "We develop websites that are fast, secure, and easy to use. We use the latest technologies to create websites that are both functional and aesthetic.",
        icon: Code,
    },
    {
        title: "Mobile Development",
        description: "We develop mobile applications that are fast, secure, and easy to use. We use the latest technologies to create mobile applications that are both functional and aesthetic.",
        icon: Smartphone,
    },
    {
        title: "UI/UX Design",
        description: "We design websites and mobile applications that are both functional and aesthetic. We use the latest technologies to create websites and mobile applications that are both functional and aesthetic.",
        icon: PenTool,
    },
];

export const testimonials: TestimonialProps[] = [
    {
        name: "John Doe",
        review: "I am very satisfied with the work. The team was professional and delivered excellent results.",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Jane Doe",
        review: "Fantastic service! The developers understood our needs perfectly and delivered on time.",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        name: "Mike Smith",
        review: "High-quality work and great communication throughout the project. I highly recommend them!",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
];

export const blogs: BlogProps[] = [
    {
        title: "How to Build a Scalable Web App",
        description: "Discover best practices and technologies to build a scalable and maintainable web application.",
        image: "https://source.unsplash.com/600x400/?technology",
    },
    {
        title: "Top 10 UI/UX Design Trends in 2025",
        description: "A look at the latest trends in UI/UX design and how they can enhance user experience.",
        image: "https://source.unsplash.com/600x400/?design",
    },
    {
        title: "The Future of Mobile Development",
        description: "What's next for mobile development? Explore upcoming frameworks and technologies.",
        image: "https://source.unsplash.com/600x400/?mobile",
    },
];

export const navigationData: NavigationProps[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Services", url: "/services", icon: Zap },
    { name: "Testimonials", url: "/testimonials", icon: Hammer },
    { name: "Blogs", url: "/blogs", icon: Paintbrush },
];



