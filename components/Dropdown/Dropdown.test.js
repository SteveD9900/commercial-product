import Dropdown from './Dropdown';
import { shallow } from 'enzyme'

let wrapper;
let typeList = ["All"];

beforeEach(() => {
    wrapper = shallow(<Dropdown options={typeList}/>);
});

describe('<Dropdown /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});