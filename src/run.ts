import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

export const run = async () => {
  const client = new S3Client({})

  await client.send(
    new PutObjectCommand({
      Bucket: 'hello-aws-sdk-client-s3',
      Key: 'hello-aws-sdk-client-s3',
    })
  )

  return
}
