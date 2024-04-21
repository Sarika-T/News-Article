import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className='slidershow' {...settings}>
      <div className="slideshow-block">
        <div className='slideshow-block-image'>
          <img src="https://tse1.mm.bing.net/th?id=OIF.fBo2xSqY2fA%2f7S%2fTNimZvw&pid=Api&P=0&h=220" alt="Photo 1" />
          <img src='https://tse3.mm.bing.net/th?id=OIF.QzrzHzuwY4ttyGoE3JP%2fUg&pid=Api&P=0&h=220' alt='Photo 2'/>
        </div>
        <span className='slideshow-block-text'>NCB SIT chief Sanjay Singh, who gave clean chit to Shah Rukh Khan's son Aryan Khan In jail. </span>
      </div>
      <div className="slideshow-block">
        <div className='slideshow-block-image'>
          <img src="https://up.yimg.com/ib/th?id=OIP.sWY44wEQgpmU-Q8R87y-LQHaFj&pid=Api&rs=1&c=1&qlt=95&w=160&h=119" alt="Photo 2" />
          <img src="https://up.yimg.com/ib/th?id=OIP.Y4BytiQ7f4l-0dsI80sxigHaFj&pid=Api&rs=1&c=1&qlt=95&w=158&h=118" alt="Photo 3" />
        </div>
        <span className='slideshow-block-text'> In Bangladesh, sunflower grows where other crops don’t amid increasing salinity. by Farhana Parvin  </span>
      </div>
      <div className="slideshow-block">
        <div className='slideshow-block-image'>
          <img src="https://up.yimg.com/ib/th?id=OIP.Df0wrqWDByLqaPB-x0qdnQHaEo&pid=Api&rs=1&c=1&qlt=95&w=154&h=96" alt="Photo 3" />
          <img src="https://up.yimg.com/ib/th?id=OIP.1x7RH3WKerWIZuthcg72fgHaE1&pid=Api&rs=1&c=1&qlt=95&w=148&h=96" alt="Photo 4" />
        </div>
        <span className='slideshow-block-text'> Kohli and Shami lead India into Cricket World Cup final after 70-run win over New Zealand.</span>
      </div>
    </Slider>
  );
}

export default SliderShow;
