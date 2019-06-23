import React, { Component } from 'react'
import healtyImage from '../images/healty-square.jpg'
import honey from '../images/honey.jpeg'
import olive from '../images/olive.jpg'
import leaf from '../images/sarma.jpg'

import cards from './Helpers'
import { Container, Row } from 'reactstrap'

class Products extends Component{
  render(){
    return(
      <div>
        <h1 className='details-heading'>ÜRÜNLER</h1>
        <Container>
          <Row>
            {cards(
              healtyImage,
              'Gezen Tavuk Yumurtası',
              'Serbest gezen tavuklar özgürdür. Doğanın sunduğu doğal besinlerle beslenen, doğada serbest dolaşan ve doğasına uygun şartlarda yaşayan, doğal döllenme yöntemleri ile üreyen tavuklardan elde edilen yumurtalardır. Doğal besinlerle beslendiği için; sağlıklıdır, besin değeri yüksektir ve diğer yumurtalara göre daha lezzetlidir.'
              )
            }
            {cards(
              leaf,
              'Tokat Sarma Yaprağı',
              'Tokat’ özgü bu yaprağın tadı kendine has ekşiliği ile diğer yaprak çeşitlerinden çok daha farklıdır. Narince cinsine dâhil olan beyaz üzüm bağlarından özenle toplanan bu asma yaprakları, dilimsiz, yumuşak ve ince olmasından dolayı çok fazla tercih edilmektedir.'
              )
            }
            {cards(
              olive,
              'Soguk Sıkım Zeytinyağı',
              'Soğuk sıkım zeytinyağı, zeytinin içeriğinde yer alan faydalı vitamin ve minerallerin en az kayıpla yağa dönüştürülmesini sağlayan yöntemin adıdır. Soğuk sıkım tekniği ile çıkarılan yağ, özellikle erken hasat dönemi denilen Ekim-Kasım ayları aralığında toplanan zeytinlerin 20-24 santigrat derecenin altında, “soğuk sıkım” adı verilen teknikle sıkılmasıyla elde edilir.'
              )
            }
            {cards(
              honey,
              'Bingöl Balı',
              'Dünyanın en köklü ve prestijli organizasyonlarından olan 45. Apimondia Uluslararası Arıcılık Kongresi’nde Bingöl Balı 120 Ülke 600 yarışmacı arasında dünya 2.’si oldu..  '
              )
            }
          </Row>
        </Container>
      </div>
      
      )
    }
  }
  
  export default Products;