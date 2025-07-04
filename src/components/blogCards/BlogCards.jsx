import blogimg1 from "../../images/blogimg1.png";
import blogimg2 from "../../images/blogimg2.png";
import blogimg3 from "../../images/blogimg3.png";
import blogimg4 from "../../images/blogimg4.png";
import blogimg5 from "../../images/blogimg5.png";
import blogimg6 from "../../images/blogimg6.png";
import blogimg7 from "../../images/blogimg7.png";
import blogimg8 from "../../images/blogimg8.png";
import blogimg9 from "../../images/blogimg9.png";
import BlogCardsItem from "./BlogCardsItem";
import "./blogCards.scss";

const blogCardsData = [
  {
    name: "Don’t-Fall-for-These-Solar-Panel-Traps-What-to-Know-Before-Buying-From-RAAJ-Solar",
    image: blogimg1,
    heading:
      "Don’t Fall for These Solar Panel Traps: What to Know Before Buying From RAAJ Solar",
    content:
      "You’ve decided to go solar – awesome! Making your own clean energy and saving money on power bills sounds almost too good to be true. But hold up, before you sign that contract with RAAJ Solar or any other company, you need to watch out for some common traps that could seriously dim your solar excitement.",
    buttonText: "Read More",
  },
  {
    name: "RAAJ-Solar-Energizing-the-Future-at-REI-Expo-2023",
    image: blogimg2,
    heading: "RAAJ Solar : Energizing the Future at REI Expo 2023",
    date: "September 28, 2023",
    content:
      "RAAJ Solar, a well-known player in the solar energy industry, is gearing up to make a significant mark at the eagerly awaited Renewable Energy India Expo (REI Expo) 2023. Our involvement reflects our strong dedication to promoting sustainable energy solutions and supporting a greener future.",
    buttonText: "Read More",
  },
  {
    name: "Powering-Profit-How-Commercial-Solar-Panels-Supercharge-Businesses",
    image: blogimg3,
    heading:
      "Powering Profit: How Commercial Solar Panels Supercharge Businesses",
    date: "September 19, 2023",
    content:
      "You’ve probably heard about how solar panels can save homeowners money and help the environment. But did you know that solar energy can also significantly impact your business’s bottom line? Commercial solar panels are a smart investment that provides major benefits",
    buttonText: "Read More",
  },
  {
    name: "Residential-Solar-Panels-Everything-You-Need-to-Know-Before-Going-Solar",
    image: blogimg4,
    heading:
      "Residential Solar Panels: Everything You Need to Know Before Going Solar",
    date: "August 18, 2023",
    content:
      "So you’re thinking of going solar – excellent! Harnessing the power of the sun to generate electricity for your home is a smart move, both financially and environmentally. But before you sign on the dotted line to have those sleek panels installed on your roof, there are some key things you need to know.",
    buttonText: "Read More",
  },
  {
    name: "Top-10-Solar-Panel-Companies-in-India-you-should-know-them!",
    image: blogimg5,
    heading: "Top 10 Solar Panel Companies in India, you should know them!",
    date: "July 22, 2023",
    content:
      "Have you decided to go solar but aren’t sure which company to choose to install your panels? There are many great options in India, so we’ve compiled a list of the top 10 solar panel companies you should consider. These companies offer high-quality panels, competitive pricing, and skilled installation.",
    buttonText: "Read More",
  },
  {
    name: "Solar-Panels-in-Ahmedabad-Prices-and-Installation-Guide",
    image: blogimg6,
    heading: "Solar Panels in Ahmedabad: Prices and Installation Guide",
    date: "June 14, 2023",
    content:
      "If you’re looking to harness the power of the sun in the bustling city of Ahmedabad, you’re in the right place! Located in the heart of Gujarat, it has a rich cultural heritage and a strong entrepreneurial spirit. But did you know that Ahmedabad is also a great place to go for solar panels?",
    buttonText: "Read More",
  },
  {
    name: "Bring-Solar-Power-Home-Why-Solar-Panels-are-the-best-investment",
    image: blogimg7,
    heading: "Bring Solar Power Home: Why Solar Panels are the best investment.",
    date: "October 28, 2023",
    content:
      "You’ve been thinking about going solar for a while now, and it’s time to make it happen! Installing residential solar panels is one of the best investments you can make for your home and your wallet. Not only will you save thousands each year on your electric bills, but you’ll be doing your part for the environment by using clean, renewable energy.",
    buttonText: "Read More",
  },
  {
    name: "How-Does-Solar-Panels-Work",
    image: blogimg8,
    heading: "How Does Solar Panels Work?",
    date: "November 12, 2023",
    content:
      "In an era dominated by climate change concerns and the pursuit of sustainable energy solutions, solar panels have emerged as a beacon of hope for a cleaner, greener future. These innovative devices are designed to harness the inexhaustible power of the sun and convert it into usable electricity. In this comprehensive guide, we will explore the intricate workings of solar panels, providing an in-depth understanding of each step in the process.",
    buttonText: "Read More",
  },
  {
    name: "Solar-Panel-Maintenance-Guide",
    image: blogimg9,
    heading: "Solar Panel Maintenance Guide",
    date: "December 19, 2023",
    content:
      "So you’ve decided to go solar - congratulations! You’re doing your part for the environment and saving money in the long run. But now that the panels are up and running, do you actually know how to properly maintain them? There are some key terms and concepts you’ll want to understand to keep your system performing at its best for decades to come.",
    buttonText: "Read More",
  },
  {
    name: "Save-Monthly-Electric-Bill-with-Solar-Panels",
    image: blogimg1,
    heading: "Save Monthly Electric Bill with Solar Panels: A Comprehensive Guide",
    date: "May 12, 2024",
    content:
      "Reducing monthly electric bills is a concern for many households and businesses. With the increasing cost of electricity and the growing awareness of environmental issues, more people are turning to renewable energy solutions.",
    buttonText: "Read More",
  },
  {
    name: "Maximizing-Property-Value-with-RAAJ-Solar",
    image: blogimg5,
    heading: "Maximizing Property Value with RAAJ Solar: The Impact of Solar Panels on Real Estate",
    date: "April 12, 2024",
    content:
      "In recent years, the adoption of solar energy has surged as homeowners and businesses seek sustainable and cost-effective energy solutions.",
    buttonText: "R  ead More",
  },
  {
    name: "Exploring-Solar-Panel-Warranty-Fundamentals",
    image: blogimg6,
    heading: "Exploring Solar Panel Warranty Fundamentals: A Comprehensive Guide",
    date: "June 12, 2024",
    content:
      "In recent years, the adoption of solar energy has surged as homeowners and businesses seek sustainable and cost-effective energy solutions.",
    buttonText: "Read More",
  },
  // Blogs 13
  {
    name: "Exploring-Solar-Panel-Warranty-Fundamentals",
    image: blogimg6,
    heading: "Raaj Solar Panels: 7 Tips for Maximizing Your Solar Panel Efficiency",
    date: "February 12, 2024",
    content:
      "Are you looking to get the most out of your solar panel investment? As a property owner with solar panels, you've already taken a significant step towards energy independence and sustainability. However, to truly maximize the benefits of your solar energy system, it's crucial to optimize its efficiency. ",
    buttonText: "Read More",
  },
  //Blog 14
  {
    name: "Solar-Farms-Help-In-Reducing-Carbon-Footprints-Across-India",
    image: blogimg9,
    heading: "Solar Farms Help In Reducing Carbon Footprints Across India",
    date: "January 22, 2024",
    content:
      "India is making significant strides in renewable energy, particularly with solar power. Solar farms are a key part of this transformation, offering sustainable energy solutions and reducing the nation's carbon footprint. Raaj Solar Panels, a top solar panels manufacturer in India, plays a pivotal role in this green revolution.",
    buttonText: "Read More",
  },
  //Blog 15
  {
    name: "RAAJ-Solar-Leading-the-Way-as-a-Top-Solar-Panel-Manufacturer",
    image: blogimg1,
    heading: "RAAJ Solar: Leading the Way as a Top Solar Panel Manufacturer",
    date: "July 5, 2024",
    content:
      "Solar energy is not just a trend; it's the future of sustainable power. One company at the forefront of this revolution in India is Raaj Solar. Renowned for its innovation and commitment to quality, Raaj Solar stands tall as a top solar panel manufacturer. In this article, we’ll explore what makes Raaj Solar a leader in the industry and how their panels are changing the landscape of renewable energy in India.",
    buttonText: "Read More",
  },
  // Blog 16 
  {
    name: "A-Guide-to-PM-Surya-Ghar-Yojana-by-RAAJ-Solar",
    image: blogimg7,
    heading: "A Guide to PM Surya Ghar Yojana by RAAJ Solar",
    date: "March 22, 2024",
    content:"In an effort to promote sustainable energy and reduce the carbon footprint, the Indian government has launched the PM Surya Ghar Yojana. This initiative aims to make solar energy more accessible to households across the country. Raaj Solar, a leading provider of solar solutions, is at the forefront of this movement, offering high-quality solar panels and systems designed to maximize energy efficiency. This blog post will delve into the specifics of the PM Surya Ghar Yojana, the benefits of installing Raaj Solar Panels, and how you can take advantage of this scheme to make your home more eco-friendly and energy-efficient.",
    buttonText: "Read More",
  }

];
const BlogCards = () => {
  return (
    <div className="blogCards">
      <div className="blog_container">
        <div className="card-grid">
          {blogCardsData.map((card, index) => (
            <BlogCardsItem
              key={index}
              name={card.name}
              image={card.image}
              heading={card.heading}
              date={card.date}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogCards;
