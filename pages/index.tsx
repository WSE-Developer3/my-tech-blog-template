import React from "react";
// import NavbarTwo from '../components/Layouts/NavbarTwo';
import Navbar from "../src/hp/Layouts/Navbar";
// import NavbarTwo from "../src/hp/Layouts/NavbarTwo";
// import Banner from "../src/hp/Freelancer/Banner";
import Banner from "../src/hp/Agency/Banner";
import Features from "../src/hp/Freelancer/Features";
import About from "../src/hp/Freelancer/About";
// import Services from "../src/hp/Freelancer/Services";
import Skill from "../src/hp/Freelancer/Skill";
// import Works from "../src/hp/Freelancer/Works";
// import Funfact from "../components/Freelancer/Funfact";
// import Testimonials from "../components/Freelancer/Testimonials";
// import Interests from "../components/Freelancer/Interests";
// import Cta from "../src/hp/Freelancer/Cta";
import Blog from "../src/hp/Freelancer/Blog";
import Contact from "../src/hp/Freelancer/Contact";
import Footer from "../src/hp/Freelancer/Footer";
import { Preloader, Placeholder } from "react-preloading-screen";
import Loader from "../src/hp/Layouts/Loader";
import GoTop from "../src/hp/Layouts/GoTop";
import { client } from "../libs/client";

export default function Freelancer(props: any) {
  return (
    <>
      <Preloader>
        <Navbar />
        {/* <NavbarTwo /> */}
        <Banner />
        <Features />
        <About />
        {/* <Services /> */}
        <Skill />
        {/* <Works /> */}
        {/* <Funfact /> */}
        {/* <Testimonials /> */}
        {/* <Interests /> */}
        {/* <Cta /> */}
        <Blog newPosts={props.newPosts} />
        <Contact />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />

        <Placeholder>
          <Loader />
        </Placeholder>
      </Preloader>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  /** 直近の記事 */
  const response: any = await client.get({
    endpoint: "blog",
    queries: {
      orders: "-publishedAt",
      limit: 3,
      fields: "id,publishedAt,featuredImage,category,body,title,description",
    },
  });

  // 使いやすいように整形
  const newPosts = response.contents.map((content: any) => {
    return {
      slug: content.id,
      imgUrl: content.featuredImage.url,
      // tag: content.tag,
      category: content.category,
      publishedAt: content.publishedAt,
      title: content.title,
      description: content.description,
    };
  });

  return {
    props: {
      newPosts,
    },
  };
};
