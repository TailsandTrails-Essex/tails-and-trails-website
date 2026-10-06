import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const required = ['customerName', 'petName', 'species', 'serviceType', 'startDate'];
    const missing = required.filter((field) => !payload[field]?.toString().trim());

    if (missing.length) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 },
      );
    }

    console.log('Booking form submission:', payload);

    return NextResponse.json({ success: true, message: 'Your booking request has been submitted.' });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Something went wrong handling your booking request.' },
      { status: 500 },
    );
  }
}
