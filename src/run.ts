import { Upload } from '@aws-sdk/lib-storage'
import { S3Client } from '@aws-sdk/client-s3'
import * as glob from 'glob'
import { createReadStream } from 'fs'

export const run = async () => {
  const client = new S3Client({})

  const matches = glob.sync('node_modules/**/*', { nodir: true })
  for (const m of matches) {
    const stream = createReadStream(m)
    console.info(m)
    const upload = new Upload({
      client,
      params: {
        Bucket: 'hello-aws-sdk-client-s3',
        Key: m,
        Body: stream,
      },
    })
    await upload.done()
  }

  return
}
