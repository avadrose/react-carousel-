import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders Carousel without crashing", function() {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

it("matches Carousel snapshot", function() {
  const { asFragment } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

it("renders Card without crashing", function() {
  render(
    <Card
      caption="testing image"
      src="test.com"
      currNum={1}
      totalNum={3}
    />
  );
});

it("matches Card snapshot", function() {
  const { asFragment } = render(
    <Card
      caption="testing image"
      src="test.com"
      currNum={1}
      totalNum={3}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});