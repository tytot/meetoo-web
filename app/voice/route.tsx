import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const content = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say>Thanks for calling!</Say>
</Response>`;
    return new Response(content, {
        headers: {
            'Content-Type': 'application/xml',
        }
    });
}
