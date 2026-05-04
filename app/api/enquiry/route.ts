export async function POST(request: Request) {
  const body = await request.json()
  console.log('=== NEW PROJECT ENQUIRY ===')
  console.log(JSON.stringify(body, null, 2))
  return Response.json({ success: true })
}
