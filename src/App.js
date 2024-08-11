import { Accordion, Badge, ListGroup } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";

function App() {
  const [veri, veriGuncelle] = useState({ hits: [] });

  useEffect ( ()=> {
    const veriCek = async () =>{
      const request = await fetch("https://hn.algolia.com/api/v1/search?query=javascript")
      const jsSonuc = await request.json()
      veriGuncelle(jsSonuc)
    }
    veriCek()
  }, [] )  // [] 1 kez çalışır

  console.log(veri.hits)

  return (
    <section className="container mt-5">
      <div className="row mb-5">
        <div className="col">

          <h1>Javascript Haberleri</h1>

          <ListGroup as="ol" numbered>
            {veri.hits.map((haber) => {
              return (
                <ListGroup.Item
                key={haber.story_id}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{haber.title}</div>
                  <strong>Yazar:</strong> {haber.author}  <a target="blank" href={haber.title}><BoxArrowUpRight/> </a> 
                </div>
                <Badge bg="primary" pill>
                  {haber.points}
                </Badge>
              </ListGroup.Item>
              )
            })}
          </ListGroup>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default App;
