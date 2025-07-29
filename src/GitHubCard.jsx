
import React, { useEffect, useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const GitHubCard = () => {
  const [repoData, setRepoData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/kanweitech/etl_bookstore_pipeline")
      .then((res) => res.json())
      .then((data) => setRepoData(data));

    fetch("https://api.github.com/users/kanweitech")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  if (!repoData || !userData) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto shadow-md rounded-2xl p-4 border">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-light text-gray-600">
            {userData.login}/<span className="font-bold">{repoData.name}</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {repoData.description || "No description provided."}
          </p>
        </div>
        <img
          src={userData.avatar_url}
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-4 border-t pt-2">
        <div className="text-center">
          <p className="font-semibold">1</p>
          <p>Contributor</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{repoData.open_issues_count}</p>
          <p>Issues</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{repoData.stargazers_count}</p>
          <p>Stars</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{repoData.forks_count}</p>
          <p>Forks</p>
        </div>
        <div className="flex items-center">
          <a
            href={repoData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 border-t pt-2">
        <p className="text-sm text-gray-400">github.com</p>
        <button
          onClick={() => window.open(repoData.html_url, "_blank")}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          View File
        </button>
      </div>

      <div className="h-1 mt-4 rounded-b-xl w-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600" />
    </div>
  );
};

export default GitHubCard;
