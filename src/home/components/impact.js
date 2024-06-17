import Carousel from 'react-multi-carousel';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


function Impact() {
  const data = [
    {
      "title": "Lingkungan",
      "body":"Dampak membuang sampah secara sembarangan terhadap lingkungan ini tentu mecemari air, tanah dan udara. Karena banyak sampah yang tidak terurai jika dibuang sembarangan akan mencemari air dan tanah, ujung-ujung nya sampah tersebut diabakar sehingga bisa menyebabkan polusi udara"
  },
  {
      "title": "Kesehatan Manusia",
      "body":"Sangat berdampak sekali untuk Kesehatan manusia karena jika Sampah yang tidak dikelola dengan baik dapat menyebabkan penyebaran penyakit misalnya melalui air, makanan yang terkontaminasi, dan sumber dari hewan yang memakan sampah bisa menyebarkan penyakit kepada manusia"
  },
  {
      "title": "Keselamatan",
      "body":"Karena banyaknya Tumpukan sampah yang tidak terkontrol dapat menjadi sumber kebakaran, membahayakan lingkungan dan masyarakat sekitarnya"
  },
  {
      "title": "Pengaruh Terhadap Ekosistem",
      "body":"Sampah dapat mengganggu siklus nutrien di ekosistem, mengakibatkan perubahan dalam ketersediaan sumber daya bagi organisme hidup"
  }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

    const container = {
    fontFamily: "'Poppins', sans-serif",
    color: "#323516",
    marginTop: "5vh",
    marginBottom: "15vh",
    alignItems: "center",
    textAlign: "center",
  };

  const box = {
    backgroundColor: "#B5C1A3",
    margin: "5vh 28% 5vh 28%",
    textAlign: "justify",
    textJustify: "inter-word",
    padding:"5vh 5vh 5vh 5vh",
    height:"100%"
  };

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="custom-button-group">
        <button className="buttonBox" onClick={previous}><SlArrowLeft size={30} /></button>
        <button className="buttonBox" onClick={next}><SlArrowRight size={30} /></button>
      </div>
    );
  };
  

    return (
      <section className={container}>
        <h1 className='text-black font-bold text-center text-3xl py-8'>
          DAMPAK
        </h1>
  
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container'
          // removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          itemClass='flex justify-center lg:px-20'
          customButtonGroup={<CustomButtonGroup />}
          renderArrowsWhenDisabled={true}
          renderButtonGroupOutside={true}
        >
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className='bg-primary/60 h-96 w-[600px] rounded-2xl p-6 my-3 justify-self-center'
              >
                <h1 className='text-black font-bold text-center text-2xl py-7'>
                  {item.title}
                </h1>
                <p className='text-black text-justify text-md px-5'>{item.body}</p>
              </div>
            );
          })}
        </Carousel>
      </section>
    );
};
  


// function Impact() {
//   const container = {
//     fontFamily: "'Poppins', sans-serif",
//     color: "#323516",
//     marginTop: "5vh",
//     marginBottom: "15vh",
//     alignItems: "center",
//     textAlign: "center",
//   };

//   const box = {
//     backgroundColor: "#B5C1A3",
//     margin: "5vh 28% 5vh 28%",
//     textAlign: "justify",
//     textJustify: "inter-word",
//     padding:"5vh 5vh 5vh 5vh",
//   };

//   return (
//     <section style={container}>
//       <h1 className='text-5xl'><strong>DAMPAK</strong></h1>
//       <div className='rounded-2xl' style={box}>
//         <h1 className='text-3xl' style={{textAlign: "center",marginBottom:"5vh"}}><strong>Lingkungan</strong></h1>
//         <CarouselDefault />
//       </div>
//       <div>
//       </div>
//     </section>
//   );
// }

export default Impact;