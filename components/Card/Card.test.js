import Card from './Card';
import { shallow } from 'enzyme'

let wrapper;
let detailInfo = {
    "index": 0,
    "isSale": false,
    "price": "$49.99",
    "productImage": "Product_1.jpeg",
    "productName": "Pure Blonde Crate",
    "type": "Beer"
};

beforeEach(() => {
    wrapper = shallow(<Card details={detailInfo}/>);
});

describe('<Card /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});