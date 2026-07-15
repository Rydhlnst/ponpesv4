import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"

function getR2Client() {
  const accountId = process.env.R2_ACCOUNT_ID
  const accessKeyId = process.env.R2_ACCESS_KEY_ID
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error("R2 credentials not configured. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, and R2_SECRET_ACCESS_KEY in .env.local")
  }

  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  })
}

export async function uploadToR2(
  buffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const client = getR2Client()
  const bucket = process.env.R2_BUCKET_NAME

  if (!bucket) throw new Error("R2_BUCKET_NAME not set in .env.local")

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    })
  )

  const publicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, "")
  if (!publicUrl) throw new Error("R2_PUBLIC_URL not set in .env.local")

  return `${publicUrl}/${key}`
}

export async function deleteFromR2(key: string): Promise<void> {
  const client = getR2Client()
  const bucket = process.env.R2_BUCKET_NAME
  if (!bucket) return

  await client.send(
    new DeleteObjectCommand({ Bucket: bucket, Key: key })
  )
}

export function keyFromUrl(url: string): string | null {
  const publicUrl = process.env.R2_PUBLIC_URL?.replace(/\/$/, "")
  if (!publicUrl || !url.startsWith(publicUrl)) return null
  return url.slice(publicUrl.length + 1)
}
