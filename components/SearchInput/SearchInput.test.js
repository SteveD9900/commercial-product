import SearchInput from './SearchInput';
import { shallow } from 'enzyme'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SearchInput />);
});

describe('<SearchInput /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});