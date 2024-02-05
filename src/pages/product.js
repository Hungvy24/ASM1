import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import data from '../../db.json' assert {type: 'json'}
import Details from '../components/product_detail'

const Product =()=>{
    return `
      ${HeaderComponent()}
      ${Details()}
      ${FooterComponent()}
    `;
}
export default Product