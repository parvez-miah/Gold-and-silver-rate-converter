import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Button, Form } from "react-bootstrap";
import { FaCopy, FaTable, FaArrowRight } from "react-icons/fa";
import "./Gold.css"; // Ensure this file includes your custom styles

function Gold() {
  const [inputValue, setInputValue] = useState("");
  const [customText, setCustomText] = useState("");
  const [tableData, setTableData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  function getBanglaNumberWithCommas(num) {
    const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    const numWithCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numWithCommas
      .split("")
      .map((char) => (char === "," ? char : banglaNumbers[Number(char)]))
      .join("");
  }

  const handleGenerateTable = () => {
    if (!inputValue) return;

    const inputValueDividedBy100 = inputValue / 100;
    const banglaGram1 =
      getBanglaNumberWithCommas(inputValueDividedBy100 * 100) + " টাকা।";
    const banglaBoriValue = (inputValueDividedBy100 * 11.66).toFixed(2);
    const banglaBori = getBanglaNumberWithCommas(banglaBoriValue) + " টাকা।";
    const banglaAna =
      getBanglaNumberWithCommas((inputValueDividedBy100 * 0.72).toFixed(2)) +
      " টাকা।";
    const Tola =
      getBanglaNumberWithCommas((inputValueDividedBy100 * 11.66).toFixed(2)) +
      " টাকা।";
    const Roti =
      getBanglaNumberWithCommas((inputValueDividedBy100 * 0.12).toFixed(2)) +
      " টাকা।";
    const banglaGram10 =
      getBanglaNumberWithCommas((inputValueDividedBy100 * 10).toFixed(2)) +
      " টাকা।";
    const banglaKg =
      getBanglaNumberWithCommas((inputValueDividedBy100 * 100).toFixed(2)) +
      " টাকা।";

    const generatedTable = (
      <table className="table table-bordered table-hover mt-3 animated fadeIn">
        <thead className="table-dark">
          <tr>
            <th>{customText} সোনার পরিমাণ</th>
            <th>বাংলাদেশি টাকা ৳</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>১ গ্রাম</td>
            <td>{banglaGram1}</td>
          </tr>
          <tr>
            <td>১ ভরি</td>
            <td>{banglaBori}</td>
          </tr>
          <tr>
            <td>১ আনা</td>
            <td>{banglaAna}</td>
          </tr>
          <tr>
            <td>১ রতি</td>
            <td>{Roti}</td>
          </tr>
          <tr>
            <td>১ তোলা</td>
            <td>{Tola}</td>
          </tr>
          <tr>
            <td>১০ গ্রাম</td>
            <td>{banglaGram10}</td>
          </tr>
          <tr>
            <td>১ কেজি</td>
            <td>{banglaKg}</td>
          </tr>
        </tbody>
      </table>
    );

    setTableData(generatedTable);
  };

  const handleCopyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = tableData?.props.children; // Only copy the text content
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Table copied to clipboard!");
  };

  return (
    <div className="container mt-5 roboto">
      <header className="text-center mb-4">
        <h2>Gold Price Converter</h2>
      </header>
      <section className="animated fadeIn">
        <Form>
          <Form.Group controlId="formGoldAmount">
            <Form.Control
              type="number"
              placeholder="প্রতি গ্রাম সোনার দাম"
              value={inputValue}
              onChange={handleInputChange}
              className="mb-3"
            />
          </Form.Group>
          <Form.Group controlId="formCaratAmount">
            <Form.Control
              type="text"
              placeholder="কারেটের পরিমাণ"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="mb-3"
            />
          </Form.Group>
        </Form>

        <div className="button-here">
          <Button
            style={{ marginRight: "20px" }}
            variant="primary"
            className="mr-2"
            onClick={handleGenerateTable}
          >
            <FaTable className="me-1" /> Generate Table
          </Button>
          <Button variant="success" onClick={handleCopyToClipboard}>
            <FaCopy className="me-1" /> Copy Table
          </Button>
        </div>

        <div className="table-responsive mt-4">{tableData}</div>
      </section>
      <div className="text-center mt-4">
        <Link to="/silver">
          <Badge bg="warning" text="dark">
            Silver Rate
          </Badge>
        </Link>
      </div>
    </div>
  );
}

export default Gold;
