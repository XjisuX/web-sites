import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect, beforeEach } from "vitest";
import Form from "../src/components/Form";
describe("Form component", () => {
  let component;
  beforeEach(() => {
    component = render(<Form />);
  });
  test("render content", () => {
    component.getByText("Nombre");
    component.getByText("Ruta");
    const headerElement = screen.getByText("Ruta pública");
    expect(headerElement).toBeInTheDocument();
  });
});