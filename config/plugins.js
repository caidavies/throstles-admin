module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  'strapi-blurhash-plugin': {
    enabled: true,
    config: {
        regenerateOnUpdate: true
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: 'https://throstles.s3.eu-west-2.amazonaws.com', // Or your CDN URL if different
        rootPath: '', // Set this if you're using a specific path inside your bucket as the root for uploads
        s3Options: {
          accessKeyId: 'AKIASCFUFUS4TDTQBBEV',
          secretAccessKey: 'OyFp9WDm4uvPziAYJu3vANJM3+88N7kKspDPlBlw',
          region: 'eu-west-2', // Extracted from your S3 bucket URL
          params: {
            ACL: env('AWS_ACL', 'public-read'), // Default to public-read if not specified
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60), // Default to 15 minutes if not specified
            Bucket: 'throstles', // Extracted from your S3 bucket URL
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  
});