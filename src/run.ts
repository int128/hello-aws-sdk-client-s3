import { Upload } from '@aws-sdk/lib-storage'
import { S3Client } from '@aws-sdk/client-s3'

export const run = async () => {
  const client = new S3Client({})

  const upload = new Upload({
    client,
    params: {
      Bucket: 'hello-aws-sdk-client-s3',
      Key: 'hello-aws-sdk-client-s3',
      Body: 'test',
    },
  })
  upload.on('httpUploadProgress', (progress) => {
    console.log(progress)
  })
  await upload.done()

  return
}
