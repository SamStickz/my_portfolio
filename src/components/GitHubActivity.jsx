import { useState, useEffect } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";

function GitHubActivity() {
  const [repos, setRepos] = useState([
    {
      name: "my_portfolio",
      description:
        "Personal portfolio website built with React and Tailwind CSS",
      stars: 5,
      forks: 2,
      language: "JavaScript",
      updated: "2 days ago",
      url: "https://github.com/SamStickz/my_portfolio",
    },
    {
      name: "coinTracker",
      description: "Real-time cryptocurrency price tracker application",
      stars: 3,
      forks: 1,
      language: "React",
      updated: "1 week ago",
      url: "https://github.com/SamStickz/coinTracker",
    },
    {
      name: "home-savvy",
      description: "Real estate property listing platform",
      stars: 4,
      forks: 1,
      language: "JavaScript",
      updated: "2 weeks ago",
      url: "https://github.com/SamStickz/home-savvy",
    },
  ]);

  // In production, fetch from GitHub API
  // useEffect(() => {
  //   fetch('https://api.github.com/users/SamStickz/repos?sort=updated&per_page=3')
  //     .then(res => res.json())
  //     .then(data => setRepos(data));
  // }, []);

  return (
    <section className="bg-transparent py-16 px-6" id="github-activity">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f9cb80] flex items-center gap-3">
            <FaGithub size={32} />
            Recent GitHub Activity
          </h2>
          <a
            href="https://github.com/SamStickz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-[#f9cb80] transition-colors"
          >
            View Profile →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240] dark:bg-[#112240] light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-200 rounded-lg p-5 hover:border-[#f9cb80] transition-all duration-300 hover:shadow-lg hover:shadow-[#f9cb80]/10 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-[#f9cb80] group-hover:underline">
                  {repo.name}
                </h3>
                <FaGithub
                  className="text-gray-400 group-hover:text-[#f9cb80] transition-colors"
                  size={20}
                />
              </div>

              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 line-clamp-2">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" size={12} />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch size={12} />
                  <span>{repo.forks}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span>{repo.language}</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-700 dark:border-gray-700 light:border-gray-200">
                <span className="text-xs text-gray-500">
                  Updated {repo.updated}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubActivity;
