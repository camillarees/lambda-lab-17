const { S3 } = require("aws-sdk");
const s3 = new S3();

exports.handler = async (event) => {

    // const bucketName = event.Records[0].s3.bucket.name;
    // const filename = event.Records[0].s3.object.key;
    
    const params = {
        Bucket: 'camilla-rees-lambda-lab-17',
        Key: 'images.json',
    }
    

    let data = await s3.getObject(params).promise();
    let images = JSON.parse(data.Body.toString());
  
    console.log('images', images);
    
    const { name, size, type } = images.images;
    let result = name + size + type;
    console.log('this is what success looks like: ', result);
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
