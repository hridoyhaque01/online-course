import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

const page = () => {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Courses></Courses>
      <Work></Work>
      <Team></Team>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </main>
  );
};

export default page;
