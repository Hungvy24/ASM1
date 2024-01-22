import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import data from '../../db.json' assert {type: 'json'}
import Details from '../components/product_detail'
import Banner from '../components/banner'
const Product =()=>{
    return `
      ${HeaderComponent()}
      ${Banner()}
      ${Details()}
      ${FooterComponent()}
    `;
}
export default Product