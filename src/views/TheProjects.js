import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import TheProjectsCard from "../components/TheProjectsCard";


const Projects = () => {
  const allReposAPI = "https://api.github.com/users/mariourban83/repos";
  const repoImageLink = "https://raw.githubusercontent.com/mariourban83/"

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
    <Container fluid className="projects-main mt-4 fade-in-1s">
      <h2 className="mb-5 pt-3">My projects on Github</h2>
      <Row className="justify-content-around">
        {projectsArray.slice(12, 17).map((item) => (
          <TheProjectsCard
            key={item.id}
            name={item.name}
            description={item.description}
            url={item.html_url}
            img={ repoImageLink + item.name + "/master/downloads/image.png"}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
