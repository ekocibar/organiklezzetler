import React, { Component } from 'react';
import honey from '../images/honey.jpeg'
import olive from '../images/olive.jpg'
import leaf from '../images/sarma.jpg'
import healtyImage from '../images/healty-square.jpg'


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: olive,
    altText: 'SOĞUK SIKIM ZEYTİNYAĞI',
    caption: 'Soğuk sıkım tekniği ile çıkarılan yağ, özellikle erken hasat dönemi denilen Ekim-Kasım ayları aralığında toplanan zeytinlerin 20-24 santigrat derecenin altında, “soğuk sıkım” adı verilen teknikle sıkılmasıyla elde edilir.'
  },
  {
    src: honey,
    altText: 'BİNGÖL BALI',
    caption: 'Sağlıklı doğal muhteşem Bingol balı'
  },
  {
    src: leaf,
    altText: 'TOKAT ASMA YAPRAĞI',
    caption: 'Narince cinsine dâhil olan beyaz üzüm bağlarından özenle toplanan bu asma yaprakları, dilimsiz, yumuşak ve ince olmasından dolayı çok fazla tercih edilmektedir.'
  },
  {
    src: healtyImage,
    altText: 'GEZEN TAVUK YUMURTASI',
    caption: 'Doğal besinlerle beslendiği için; sağlıklıdır, besin değeri yüksektir ve diğer yumurtalara göre daha lezzetlidir.'
  }
];

class Carousell extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="fullWidth"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Carousell;