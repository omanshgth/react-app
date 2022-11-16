module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/omanshgth/react-app",
    plugins: [
            '@semantic-release/commit-analyzer', 
            '@semantic-release/release-notes-generator', 
            '@semantic-release/npm', 
            ['@semantic-release/github', {
                assets: [
                    {path: "build.zip", label: "Build"},
                    {path: "cover.zip", label: "Cover"}
                ]
                }]
        ]
};