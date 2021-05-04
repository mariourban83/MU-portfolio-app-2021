import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TheProjectsCard from "../components/TheProjectsCard";

const Projects = () => {
  const allReposAPI = "https://api.github.com/users/mariourban83/repos";
  const repoImageLink = "https://raw.githubusercontent.com/mariourban83/";

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
    <>
      <section className="projects fade-in-1s">
        <h2>My projects on Github</h2>
        <div className="row">
          <div className="container">
            {projectsArray.slice(8, 13).map((item) => (
              <TheProjectsCard
                key={item.id}
                name={item.name}
                description={item.description}
                url={item.html_url}
                img={repoImageLink + item.name + "/master/downloads/image.jpg"}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
