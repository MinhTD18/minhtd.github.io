---
title: AWS Lambda and AWS SQS A Powerful Combination 
author: MinhTD
description: AWS Lambda and AWS SQS are two powerful AWS services that can be used together to create a variety of event-driven applications. Lambda is a serverless compute service that allows you to run code without provisioning or managing servers. SQS is a message queuing service that allows you to decouple applications and scale microservices.
tag:
  - AWS
category:
  - Guide
date: 2023-07-29
---
AWS Lambda and AWS SQS are two powerful AWS services that can be used together to create a variety of event-driven applications. Lambda is a serverless compute service that allows you to run code without provisioning or managing servers. SQS is a message queuing service that allows you to decouple applications and scale microservices.

### How do they work together?

Lambda and SQS work together by using Lambda functions to process messages that are sent to SQS queues. When a message is sent to an SQS queue, Lambda can be configured to be triggered to process the message. The Lambda function can then process the message and take any necessary actions, such as storing the message in a database, sending an email, or making a web request.

### Why use them together?

There are several reasons why you might want to use Lambda and SQS together. First, Lambda and SQS can help you to create event-driven applications. This means that your applications can respond to events as they occur, without having to be constantly polling for new data. This can help to improve the performance and scalability of your applications.

Second, Lambda and SQS can help you to decouple applications. This means that your applications can be independent of each other, and they can communicate with each other without having to be directly connected. This can help to improve the reliability and maintainability of your applications.

Third, Lambda and SQS can help you to scale microservices. Microservices are small, independent services that can be scaled independently. By using Lambda and SQS, you can distribute messages across multiple Lambda functions, which can help you to scale your microservices horizontally.

### Sample Code of JS v3 AWS SDK

#### Here is a sample code of JS v3 AWS SDK that shows how to use Lambda and SQS together:

```javascript
const AWS = require("aws-sdk");

const sqs = new AWS.SQS({
  region: "us-east-1",
});

const lambda = new AWS.Lambda({
  region: "us-east-1",
});

const queueUrl = "https://sqs.us-east-1.amazonaws.com/123456789012/my-queue";

const functionName = "my-lambda-function";

const message = {
  body: "This is a message from Lambda!",
};

sqs.sendMessage({
  QueueUrl: queueUrl,
  MessageBody: JSON.stringify(message),
}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Message sent!");

    // Invoke the Lambda function
    lambda.invoke({
      FunctionName: functionName,
      Payload: JSON.stringify(message),
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Lambda function invoked!");
      }
    });
  }
});
```
This code first creates a SQS client and a Lambda client. Then, it sends a message to the SQS queue. The message body contains a string that says "This is a message from Lambda!".

Next, the code invokes the Lambda function. The Lambda function is defined in a separate file, and it simply prints the message body to the console.

Finally, the code logs the results of the SQS sendMessage and Lambda invoke operations.

#### How to run the code

To run this code, you will need to create an SQS queue and a Lambda function. You can do this using the AWS Management Console or the AWS CLI.

Once you have created the queue and function, you can run the code by saving it as a .js file and running it from the command line.

### For more information

For more information on how to use Lambda and SQS together, please see the following documentation:

- AWS Lambda documentation: https://docs.aws.amazon.com/lambda/
- AWS SDK for JavaScript v3 documentation: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/
- AWS SQS documentation: https://docs.aws.amazon.com/sqs/

