import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  phone: string;
  vehicle: string;
  product: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name?.trim() || !body.phone?.trim() || !body.vehicle?.trim() || !body.product?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Phone validation (basic - accepts 10 digits or +country code format)
    if (!/^\d{10}$|^\+\d{1,3}\d{9,}/.test(body.phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // TODO: In production, integrate with:
    // - Email service (Resend, SendGrid, Mailgun)
    // - WhatsApp API (Twilio, WhatsApp Cloud API)
    // - Database storage
    
    console.log('Form submission received:', body);

    // For now, just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry submitted successfully! We will contact you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
