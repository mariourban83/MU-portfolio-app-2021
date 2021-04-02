import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import TheProjectsCard from "../components/TheProjectsCard";

const Project = () => {
  const allReposAPI = "https://api.github.com/users/mariourban83/repos";

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      const response = await axios.get(allReposAPI);
      repoList = response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
    setProjectsArray(repoList);
  }, [allReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Container>
      <h2 className="m-5">Projects on my Github account</h2>
      <Row className="justify-content-around">
        {projectsArray.slice(14, 19).map((item) => (
          <TheProjectsCard
            key={item.id}
            name={item.name}
            description={item.description}
            url={item.html_url}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Project;
