import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("should render header", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});