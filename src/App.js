import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <h1 className="text-center mt-4">SEARCH FILTER : CARTRABBIT</h1>
      <Form>
        <InputGroup className="my-3">
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contacts"
          />
        </InputGroup>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => 
              search.toLowerCase() === "" 
                ? true 
                : item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
