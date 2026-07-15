import { NextRequest, NextResponse } from "next/server"
import { uploadToR2 } from "@/lib/r2"
import { randomUUID } from "crypto"
import path from "path"

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"]
const MAX_SIZE_MB = 5

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get("file") as File | null
  const folder = (formData.get("folder") as string | null) ?? "uploads"

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Tipe file tidak didukung. Gunakan JPEG, PNG, WebP, atau GIF." },
      { status: 400 }
    )
  }

  const sizeMB = file.size / (1024 * 1024)
  if (sizeMB > MAX_SIZE_MB) {
    return NextResponse.json(
      { error: `Ukuran file melebihi batas ${MAX_SIZE_MB}MB.` },
      { status: 400 }
    )
  }

  const ext = path.extname(file.name).toLowerCase() || ".jpg"
  const key = `${folder}/${randomUUID()}${ext}`

  const buffer = Buffer.from(await file.arrayBuffer())
  const url = await uploadToR2(buffer, key, file.type)

  return NextResponse.json({ url, key })
}
