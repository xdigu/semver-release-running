module.exports = {
  branches: ["main"], // Or your release branch, e.g., "master"
  plugins: [
    "@semantic-release/commit-analyzer", // Analyzes commit messages to determine release type
    "@semantic-release/release-notes-generator", // Generates release notes
    "@semantic-release/changelog", // Updates CHANGELOG.md
    "@semantic-release/github", // Creates GitHub release and updates package.json
    [
      "@semantic-release/git", // Commits and pushes changes (e.g., CHANGELOG.md, package.json)
      {
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
