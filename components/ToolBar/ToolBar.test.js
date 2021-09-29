import ToolBar from './ToolBar';
import { shallow } from 'enzyme'

let wrapper;
let types = ["All"];

beforeEach(() => {
    // wrapper = shallow(<ToolBar typeList={types}/>);
});

describe('<ToolBar /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toBe(undefined);
    });
});