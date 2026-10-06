import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const required = ['name', 'email', 'service', 'message'];
    const missing = required.filter((field) => !payload[field]?.toString().trim());

    if (missing.length) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 },
      );
    }

    console.log('Enquiry form submission:', payload);

    return NextResponse.json({ success: true, message: 'Your enquiry has been received.' });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Something went wrong handling your enquiry.' },
      { status: 500 },
    );
  }
}
