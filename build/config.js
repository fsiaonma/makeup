var config = config || {
    unpackProjects: ["all"]      
};

config.projects = [{
    projectName: 'makeup',        
    rootPath: '../javascripts/dev/',           
    buildPath: '../javascripts/product/',         
    js: {
        copyOnly: [{
            merge: true,
            dir: ['common/', 'modules/', 'utils/', 'main.js']
        }]
    }
}];

module.exports = config;