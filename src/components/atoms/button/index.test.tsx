import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

const PRIMARY_BUTTON = <Button label="primary button" />;
const SECONDARY_BUTTON = <Button type="secondary" label="secondary button" />;
const LINK_BUTTON = <Button type="link" label="link button" />;

describe("Button Atom", () => {
  it('renders a button with label "primary button"', () => {
    const { getByText } = render(PRIMARY_BUTTON);
    expect(getByText("primary button")).toBeDefined();
  });

  it("renders a primary class button", () => {
    const { container: button } = render(PRIMARY_BUTTON);
    const buttonElement = button.getElementsByClassName("button");
    expect(buttonElement[0]).toHaveClass("button__primary");
    expect(buttonElement[0].classList.length).toBe(2);
  });

  it("renders a secondary class button", () => {
    const { container: button } = render(SECONDARY_BUTTON);
    const buttonElement = button.getElementsByClassName("button");
    expect(buttonElement[0]).toHaveClass("button__secondary");
    expect(buttonElement[0].classList.length).toBe(2);
  });

  it("renders a link class button", () => {
    const { container: button } = render(LINK_BUTTON);
    const buttonElement = button.getElementsByClassName("button");
    expect(buttonElement[0]).toHaveClass("button__link");
    expect(buttonElement[0].classList.length).toBe(2);
  });

  it('call "onClickButton" one time', () => {
    const handleClick = jest.fn();
    render(<Button onClickButton={handleClick} label="onClick button" />);
    fireEvent.click(screen.getByText(/onClick button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
