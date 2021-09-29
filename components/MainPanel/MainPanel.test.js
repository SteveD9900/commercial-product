import MainPanel from './MainPanel';
import { shallow } from 'enzyme'

let wrapper;
let filteredProducts = [
    {
        "index": 0,
        "isSale": false,
        "price": "$49.99",
        "productImage": "Product_1.jpeg",
        "productName": "Pure Blonde Crate",
        "type": "Beer"
    },
    {
        "index": 1,
        "isSale": true,
        "price": "$14.99",
        "productImage": "Product_2.jpeg",
        "productName": "Victoria Bitter 4x6x375ml",
        "type": "Beer"
    }
];

beforeEach(() => {
    wrapper = shallow(<MainPanel products={filteredProducts}/>);
});

describe('<MainPanel /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});