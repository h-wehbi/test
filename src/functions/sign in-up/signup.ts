const AWS = require("aws-sdk");

var params = {
    UserPoolId: 'eu-west-1_eWKVnUjrC', /* required */
    Username: 'hadi2@gmail.com', /* required */
    ForceAliasCreation: true,
    TemporaryPassword: 'Hwqwqw1234343esw1@E',
    UserAttributes: [
        {
            Name: 'email', /* required */
            Value:'hadi2@gmail.com'
        },
        /* more items */
    ],
    ValidationData: [
        {
            Name: 'email', /* required */
            Value: 'hadi2@gmail.com'
        },
        /* more items */
    ]
};

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
cognitoidentityserviceprovider.adminCreateUser(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
}).promise();
