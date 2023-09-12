const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
});

const s3 = new AWS.S3();

exports.handler = async () => {
  const fileContent = 'hellooooo, this is testing';
  const params = {
    Bucket: 'destination-bucket-852',
    Key: 'data/test.txt',
    ACL: 'bucket-owner-full-control',
    Body: fileContent,
    ContentEncoding: 'utf8'
  };

  try {
    await s3.putObject(params).promise();
    console.log('Successfully uploaded file to S3');
  } catch (error) {
    console.error('Error: ', error);
  }
};
