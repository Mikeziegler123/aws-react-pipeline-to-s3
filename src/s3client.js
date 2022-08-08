// Load the required clients and packages
const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
const {
  fromCognitoIdentityPool,
} = require("@aws-sdk/credential-provider-cognito-identity");
const { S3Client } = require("@aws-sdk/client-s3");

// Initialize the Amazon Cognito credentials provider
const REGION = "us-east-1"; //e.g., 'us-east-1'
export const s3Client = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: "us-east-1:948c922c-4d58-470a-aa3e-04d5de2bea12"
  }),
});