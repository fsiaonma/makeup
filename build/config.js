var config = config || {
    unpackProjects: ["all"]      
};

config.projects = [{
    projectName: 'makeup',        
    rootPath: '../javascripts/',           
    buildPath: '../javascripts/product/',         
    js: {
        copyOnly: [{
            merge: false,
            dir: ['libs/']
        }, {
            merge: true,
            dir: ['common/', 'modules/', 'main.js']
        }]
    },
    css: {
        copyOnly: ['libs/'] 
    },
    resources: {
        copyOnly: ['libs/']
    }
}];

module.exports = config;