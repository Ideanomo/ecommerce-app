import { shallow } from "enzyme";
import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

describe("<Home />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("has a single paragraph", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("p")).toHaveLength(1);
  });

  it("should have a `Link` element", () => {
    expect(wrapper.containsMatchingElement(<Link to="/">Category</Link>));
  });

  it("contains the text, 'This is the Home page.'", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph.text()).toEqual("This is the Home page.");
  });
  it("contains the text, 'This is the home page.'", () => {
    expect(wrapper.find("p")).toBe("This is the home page.");
  });
});
