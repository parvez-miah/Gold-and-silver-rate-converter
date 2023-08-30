import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';



function TableBuilder() {
  const [inputValue, setInputValue] = useState('');
  const [customText, setCustomText] = useState('');
  const [tableData, setTableData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  function getBanglaNumberWithCommas(num) {
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const numWithCommas = num.toLocaleString('en-IN');
    return numWithCommas
      .split('')
      .map((char) => (char === ',' ? char : banglaNumbers[Number(char)]))
      .join('');
  }

  const handleGenerateTable = () => {
    if (!inputValue) return;

    const inputValueDividedBy100 = inputValue / 100;
    const banglaGram1 = getBanglaNumberWithCommas(inputValueDividedBy100 * 100) + ' টাকা।';
    const banglaBoriValue = (inputValueDividedBy100 * 11.66).toFixed(2);
    const banglaBori = getBanglaNumberWithCommas(banglaBoriValue) + ' টাকা।';
    const banglaAna = getBanglaNumberWithCommas((inputValueDividedBy100 * 0.72).toFixed(2)) + ' টাকা।';
    const Tola = getBanglaNumberWithCommas((inputValueDividedBy100 * 11.66).toFixed(2)) + ' টাকা।';
    const Roti = getBanglaNumberWithCommas((inputValueDividedBy100 * 0.12).toFixed(2)) + ' টাকা।';
    const banglaGram10 = getBanglaNumberWithCommas((inputValueDividedBy100 * 10).toFixed(2)) + ' টাকা।';
    const banglaKg = getBanglaNumberWithCommas((inputValueDividedBy100 * 100).toFixed(2)) + ' টাকা।';



    const generatedTable = (
      
      <table className="table">
        <thead>
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
            <td>১  রতি</td>
            <td>{Roti}</td>
          </tr>
          <tr>
            <td>১ তোলা </td>
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
    const el = document.createElement('textarea');
    el.value = tableData;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Table copied to clipboard!');
  };

  return (
    <div className="container , roboto">
      <header className="header">
        <Badge pill bg="danger">
          Gold Price Converter
        </Badge>

      </header>
      <section className="section">
        <input
          type="number"
          placeholder="Gold Amount"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Amount of carat"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          className="form-control mb-2"
        />

        <div className="text-center">
          <button className="btn btn-primary mr-2" onClick={handleGenerateTable}>
            Generate Table
          </button>
          <button style={{ marginLeft: '10px' }} className="btn btn-success" onClick={handleCopyToClipboard}>
            Copy Table
          </button>
        </div>
        <div className="table-responsive mt-4">
          {tableData}
        </div>
      </section>
      <div className="text-center mt-4">
        <Link to="/silver">
          <Badge bg="warning" text="dark">Silver Rate</Badge>
        </Link>
      </div>
    </div>
  );
}

export default TableBuilder;
