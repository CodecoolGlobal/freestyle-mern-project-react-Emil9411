import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Dropdown, Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Measurement(props) {
  const [value, setValue] = useState(0);
  const [measureFrom, setMeasureFrom] = useState("g");
  const [measureTo, setMeasureTo] = useState("g");
  const [result, setResult] = useState(0);

  const mass = [
    { name: "Gram", unit: "g" },
    { name: "Dekagram", unit: "dkg" },
    { name: "Kilogram", unit: "kg" },
    { name: "Ounce", unit: "oz" },
    { name: "Pound", unit: "lb" },
  ];
  const volume = [
    { name: "Milliliter", unit: "ml" },
    { name: "Centiliter", unit: "cl" },
    { name: "Deciliter", unit: "dl" },
    { name: "Liter", unit: "l" },
    { name: "Teaspoon", unit: "tsp" },
    { name: "Tablespoon", unit: "tbsp" },
    { name: "Fluid Ounce", unit: "floz" },
    { name: "Cup", unit: "cup" },
    { name: "Pint", unit: "pt" },
    { name: "Quart", unit: "qt" },
    { name: "Gallon", unit: "gal" },
  ];

  function calculate(value, measureFrom, measureTo) {
    const massConversions = {
      g: 1,
      dkg: 10,
      kg: 1000,
      oz: 28.3495,
      lb: 453.592,
    };
    const volumeConversions = {
      ml: 1,
      cl: 10,
      dl: 100,
      l: 1000,
      tsp: 4.92892,
      tbsp: 14.7868,
      floz: 29.5735,
      cup: 236.588,
      pt: 473.176,
      qt: 946.353,
      gal: 3785.41,
    };
    const commonValue = massConversions[measureFrom]
      ? value * massConversions[measureFrom]
      : value * volumeConversions[measureFrom];
    const result = massConversions[measureTo]
      ? commonValue / massConversions[measureTo]
      : commonValue / volumeConversions[measureTo];
    const roundedResult = Number(result.toFixed(2));
    return roundedResult;
  }

  useEffect(() => {
    console.log(value);
    console.log(measureFrom);
    console.log(measureTo);
  }, [value, measureFrom, measureTo]);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>Measurment exchange</Modal.Header>
      <Modal.Body>
        <table>
          <tbody>
            <tr>
              <td>
                <Form.Label>Enter value:</Form.Label>
              </td>
              <td colSpan={"3"}>
                <FormControl
                  type="number"
                  placeholder="Enter value"
                  onChange={(e) => setValue(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Label>Choose measure:</Form.Label>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    From: {measureFrom}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {mass.map((measure) => {
                      return (
                        <Dropdown.Item
                          key={measure.unit}
                          onClick={() => setMeasureFrom(measure.unit)}
                        >
                          {measure.name} ({measure.unit})
                        </Dropdown.Item>
                      );
                    })}
                    <hr />
                    {volume.map((measure) => {
                      return (
                        <Dropdown.Item
                          key={measure.unit}
                          onClick={() => setMeasureFrom(measure.unit)}
                        >
                          {measure.name} ({measure.unit})
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    To: {measureTo}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {mass.map((measure) => {
                      return (
                        <Dropdown.Item
                          key={measure.unit}
                          disabled={!mass.some((item) => item.unit === measureFrom)}
                          onClick={() => setMeasureTo(measure.unit)}
                        >
                          {measure.name} ({measure.unit})
                        </Dropdown.Item>
                      );
                    })}
                    <hr />
                    {volume.map((measure) => {
                      return (
                        <Dropdown.Item
                          key={measure.unit}
                          disabled={!volume.some((item) => item.unit === measureFrom)}
                          onClick={() => setMeasureTo(measure.unit)}
                        >
                          {measure.name} ({measure.unit})
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <button
                  onClick={() => setResult(calculate(value, measureFrom, measureTo))}
                >
                  Calculate
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Label>Result:</Form.Label>
              </td>
              <td colSpan={"3"}>
                <FormControl type="number" placeholder="Result" value={result} readOnly />
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
