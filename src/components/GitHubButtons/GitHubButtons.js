import React from "react";
import "./GithubButtons.css";

const settings = {
  namepsace: "vinitshahdeo",
  repo: "50DaysOfJavaScript",
};

function GitHubButtons() {
  const [forkCount, setForkCount] = React.useState();
  const [starCount, setStarCount] = React.useState();

  React.useEffect(() => {
    function getCount(data, type) {
      return data[`${type}_count`];
    }
    ajaxGet(getRequestUrl(), (response) => {
      setStarCount(getCount(response, "stargazers"));
      setForkCount(getCount(response, "forks"));
    });
  }, []);

  function getRequestUrl() {
    return `//api.github.com/repos/${settings.namepsace}/${settings.repo}`;
  }
  function getRepoUrl() {
    return `//github.com/${settings.namepsace}/${settings.repo}/`;
  }

  return (
    <div className="github_buttons">
      <a
        href={`${getRepoUrl()}`}
        className="github_buttons__link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="star-btn.svg"
          className="github_buttons__icon"
          alt="stargazers"
        />
        <span className="github_buttons__text">{starCount}</span>
      </a>
      <a
        href={`${getRepoUrl()}`}
        className="github_buttons__link"
        target="_blank"
        rel="noreferrer"
      >
        <img src="fork-btn.svg" className="github_buttons__icon" alt="forks" />
        <span className="github_buttons__text">{forkCount}</span>
      </a>
    </div>
  );
}

function ajaxGet(url, callback) {
  if (typeof XDomainRequest !== "undefined") {
    callback(null);
    return null;
  }

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
  return xhr;
}

export default GitHubButtons;
