import type {APIGatewayProxyEvent} from "aws-lambda";
import {formatJSONResponse} from "@libs/apiGateway";
const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

const getRecords = async (event: APIGatewayProxyEvent) => {

    const records= await docClient.scan({
        TableName: "todos-dev"
    }).promise();
    console.log(event)
    return formatJSONResponse({
        message: records,
    });
}

const createRecord = async (event: APIGatewayProxyEvent) => {

    console.log(event);
    const params = {
        TableName:"todos-dev",
        Item: {
            id: "42545647534",
            name: "new record",
            updatedAt: "1610623040157",
            userid: "7eea6c82-41fa-4130-a315-11463ade5884"
        }
    };

    console.log(params);

    const records = await docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    }).promise();
    console.log(records);
}

const updateRecord = async (event: APIGatewayProxyEvent) => {

    console.log(event);

    var params = {
        TableName:"todos-dev",
        Key:{
            id: "38e8ed70-57d2-11eb-b2d7-df9df9c1f931"
        },
        UpdateExpression: "SET userId = :label",
        ExpressionAttributeValues: {
            ":label": "777777777777777777777"
        },
        ReturnValues:"UPDATED_NEW",
    };

    console.log(params);

    const records = await docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
    }).promise();

    console.log(records);
}

const deleteRecord = async (event: APIGatewayProxyEvent) => {

    var params = {
        TableName:"todos-dev",
        Key:{
                id: "42545647534"
        },
    };

    const records = await docClient.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
        }
    }).promise();

    console.log(event,records);
}


export {
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord
}
