/* global jest */

import "@babel/polyfill";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.setTimeout(10000);
Enzyme.configure({ adapter: new Adapter() });
