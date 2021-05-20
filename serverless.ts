import type {AWS} from '@serverless/typescript';

const serverlessConfiguration: AWS = {
    service: 'projects',
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true,
        },
    },
    plugins: ['serverless-webpack',
        'serverless-offline'],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
        lambdaHashingVersion: '20201221',
    },
    // import the function via paths
    functions: {
        test: {
            handler: './src/functions/test/handler.getRecords',
            events: [
                {
                    http: {
                        method: 'post',
                        path: 'getRecords',
                    }
                }
            ]
        },
        createTest: {
            handler: './src/functions/test/handler.createRecord',
            events: [
                {
                    http: {
                        method: 'post',
                        path: 'createRecord',
                    }
                }
            ]
        },
        updateTest: {
            handler: './src/functions/test/handler.updateRecord',
            events: [
                {
                    http: {
                        method: 'post',
                        path: 'updateRecord',
                    }
                }
            ]
        },
        deleteTest: {
            handler: './src/functions/test/handler.deleteRecord',
            events: [
                {
                    http: {
                        method: 'post',
                        path: 'deleteRecord',
                    }
                }
            ]
        },
        createuserpool: {
            handler: './src/functions/cignito/signup.CreateUser',
            events: [
                {
                    http: {
                        method: 'post',
                        path: 'createuserpool',
                    }
                }
            ]
        },
    },
};

module.exports = serverlessConfiguration;
