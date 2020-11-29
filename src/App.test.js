import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("checking the counter module", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent).toHaveLength(1);
  });

  test("should render increment button", () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "increment-button");
    expect(incrementButton).toHaveLength(1);
  });

  test("should render count display", () => {
    const wrapper = setup();
    const countDisplay = findByTestAttr(wrapper, "counter-display");
    expect(countDisplay).toHaveLength(1);
  });

  test("should start at 0", () => {
    const wrapper = setup();
    const countDisplay = findByTestAttr(wrapper, "counter-display").text();
    expect(countDisplay).toBe("0");
  });

  test("should increment count on clicking button", () => {
    const wrapper = setup();

    const incrementButton = findByTestAttr(wrapper, "increment-button");

    incrementButton.simulate("click");

    const countDisplay = findByTestAttr(wrapper, "counter-display").text();

    expect(countDisplay).toBe("1");
  });
});
