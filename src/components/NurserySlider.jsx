import n1 from "../assets/n1.jpg";
import n2 from "../assets/n2.jpg";
import n3 from "../assets/n3.jpg";
import n4 from "../assets/n4.jpg";
import n5 from "../assets/n5.jpg";
import n6 from "../assets/n6.jpg";
import n7 from "../assets/n7.jpg";
import n8 from "../assets/n8.jpg";
import n9 from "../assets/n9.jpg";
import n10 from "../assets/n10.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NurserySlider.css";

function NurserySlider() {
  const stories = [
    {
      id: 1,
      image: n1,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 2,
      image: n2,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 3,
      image: n3,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 4,
      image: n4,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 5,
      image: n5,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 6,
      image: n6,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 7,
      image: n7,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 8,
      image: n8,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 9,
      image: n9,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
    {
      id: 10,
      image: n10,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum.",
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-8 mx-auto">
      <Slider {...settings}>
        {stories.map((story) => (
          <div key={story.id}>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={story.image}
                alt={`story-${story.id}`}
                className="object-cover w-[120px] rounded-full h-[120px]"
              />
              <p className="text-[#838383] px-4 font-[500] text-sm mt-4">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NurserySlider;
