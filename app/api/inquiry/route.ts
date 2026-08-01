import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const siteUrl = "https://www.irma-apartments-baskavoda.com";


export async function POST(req: Request) {

  try {

    const body = await req.json();


    const {
      apartment,
      name,
      email,
      phone,
      guests,
      checkIn,
      checkOut,
      message,
      locale = "hr",
    } = body;



    const translations = {

      hr: {
  subject: `Hvala na upitu za ${apartment} - Apartmani Irma`,
        title: "Hvala na vašem upitu!",
        hello: `Poštovani/a ${name},`,
        text1:
          "zahvaljujemo vam na interesu za Apartmane Irma. Vaš upit je uspješno zaprimljen.",
        text2:
          "Provjerit ćemo dostupnost i javiti vam se u najkraćem mogućem roku.",
        apartment: "Apartman",
        arrival: "Dolazak",
        departure: "Odlazak",
        guests: "Broj osoba",
        checkin: "Prijava",
        checkout: "Odjava",
        deposit:
          "Za potvrdu rezervacije potrebna je akontacija.",
        cancel:
          "Besplatno otkazivanje moguće je do 21 dan prije dolaska.",
        goodbye:
          "Veselimo se vašem dolasku!",
          info:
  "Informacije"
      },


      en: {
  subject: `Thank you for your inquiry for ${apartment}`,
        title: "Thank you for your inquiry!",
        hello: `Dear ${name},`,
        text1:
          "Thank you for your interest in Apartments Irma. Your inquiry has been successfully received.",
        text2:
          "We will check availability and reply as soon as possible.",
        apartment: "Apartment",
        arrival: "Arrival",
        departure: "Departure",
        guests: "Number of guests",
        checkin: "Check-in",
        checkout: "Check-out",
        deposit:
          "A deposit is required to confirm your reservation.",
        cancel:
          "Free cancellation is possible up to 21 days before arrival.",
        goodbye:
          "We look forward to welcoming you!",
          info:
  "Information"
      },


     de: {
  subject: `Vielen Dank für Ihre Anfrage für ${apartment}`,
        title: "Vielen Dank für Ihre Anfrage!",
        hello: `Sehr geehrte/r ${name},`,
        text1:
          "Vielen Dank für Ihr Interesse an den Apartments Irma. Ihre Anfrage wurde erfolgreich erhalten.",
        text2:
          "Wir prüfen die Verfügbarkeit und melden uns schnellstmöglich bei Ihnen.",
        apartment: "Apartment",
        arrival: "Anreise",
        departure: "Abreise",
        guests: "Anzahl der Personen",
        checkin: "Check-in",
        checkout: "Check-out",
        deposit:
          "Für die Bestätigung der Reservierung ist eine Anzahlung erforderlich.",
        cancel:
          "Eine kostenlose Stornierung ist bis 21 Tage vor Anreise möglich.",
        goodbye:
          "Wir freuen uns auf Ihre Ankunft!",
          info:
  "Informationen"
      }

    };


    const lang =
      translations[locale as keyof typeof translations] ||
      translations.hr;



    // ==========================
    // MAIL VLASNIKU
    // ==========================

    const ownerEmail = await resend.emails.send({

      from:
"Apartmani Irma <info@irma-apartments-baskavoda.com>",

      to:
      "saric.irma68@gmail.com",

      replyTo:
      email,

      subject:
      `Novi upit za ${apartment}`,


      html: `

<div style="
font-family:Arial,Helvetica,sans-serif;
background:#f5f9fc;
padding:30px;
">

<div style="
max-width:650px;
margin:auto;
background:white;
border-radius:20px;
overflow:hidden;
">

<div style="
background:#075985;
color:white;
padding:30px;
text-align:center;
">

<img
src="${siteUrl}/images/logo.jpeg"
alt="Apartmani Irma"
style="
width:120px;
margin-bottom:15px;
"
/>

<h1>
Apartmani Irma
</h1>

<p>
Novi upit za rezervaciju
</p>

</div>


<div style="
padding:30px;
">


<h2 style="color:#075985;">
Detalji gosta
</h2>


<table width="100%" cellpadding="8">

<tr>
<td><b>Apartman</b></td>
<td>${apartment}</td>
</tr>

<tr>
<td><b>Ime i prezime</b></td>
<td>${name}</td>
</tr>

<tr>
<td><b>Email</b></td>
<td>${email}</td>
</tr>

<tr>
<td><b>Telefon</b></td>
<td>${phone}</td>
</tr>

<tr>
<td><b>Broj osoba</b></td>
<td>${guests}</td>
</tr>

</table>



<h2 style="
color:#075985;
margin-top:30px;
">
Termin boravka
</h2>


<div style="
background:#f0f9ff;
padding:20px;
border-radius:15px;
">


<p>
<b>Dolazak:</b> ${checkIn}
</p>


<p>
<b>Odlazak:</b> ${checkOut}
</p>


<p>
<b>Prijava:</b> 12:00 - 00:00
</p>


<p>
<b>Odjava:</b> do 09:30
</p>


</div>




<h2 style="
color:#075985;
margin-top:30px;
">
Poruka gosta
</h2>


<div style="
background:#f8fafc;
padding:20px;
border-radius:15px;
">

${message || "Nema dodatne poruke."}

</div>




<h2 style="
color:#075985;
margin-top:30px;
">
Uvjeti rezervacije
</h2>


<div style="
background:#ecfeff;
padding:20px;
border-radius:15px;
">


<p>
✓ Akontacija potrebna za potvrdu rezervacije
</p>


<p>
✓ Besplatno otkazivanje do 21 dan prije dolaska
</p>


<p>
✓ Nakon tog roka akontacija se ne vraća
</p>


</div>


</div>



<div style="
background:#082f49;
color:#bae6fd;
padding:20px;
text-align:center;
font-size:13px;
">

Apartmani Irma<br/>
Naputica 28, Baška Voda<br/>
+385 95 909 1695

</div>


</div>

</div>

`,
    });



    if(ownerEmail.error){

      return NextResponse.json(
        ownerEmail.error,
        {status:500}
      );

    }



    // ==========================
    // MAIL GOSTU
    // ==========================


    const guestEmail = await resend.emails.send({

     from:
"Apartmani Irma <info@irma-apartments-baskavoda.com>",


      to:
      email,


      subject:
      lang.subject,


      html: `

      <div style="
      font-family:Arial;
      background:#f5f9fc;
      padding:30px;
      ">


      <div style="
      max-width:600px;
      margin:auto;
      background:white;
      padding:30px;
      border-radius:20px;
      ">


      <img
src="${siteUrl}/images/logo.jpeg"
alt="Apartmani Irma"
style="
width:120px;
margin-bottom:20px;
"
/>

<h1 style="color:#075985;">
Apartmani Irma
</h1>


      <h2>
      ${lang.title}
      </h2>


      <p>
      ${lang.hello}
      </p>


      <p>
      ${lang.text1}
      </p>


      <p>
      ${lang.text2}
      </p>



      <div style="
      background:#f0f9ff;
      padding:20px;
      border-radius:15px;
      ">


      <p>
      <b>${lang.apartment}:</b>
      ${apartment}
      </p>


      <p>
      <b>${lang.arrival}:</b>
      ${checkIn}
      </p>


      <p>
      <b>${lang.departure}:</b>
      ${checkOut}
      </p>


      <p>
      <b>${lang.guests}:</b>
      ${guests}
      </p>


      </div>



      <h3 style="color:#075985;">
${lang.info}
</h3>


      <p>
      🕛 ${lang.checkin}: 12:00 - 00:00
      </p>


      <p>
      🕘 ${lang.checkout}: 09:30
      </p>


      <p>
      💳 ${lang.deposit}
      </p>


      <p>
      ✅ ${lang.cancel}
      </p>


      <p style="margin-top:30px;">
      ${lang.goodbye}
      </p>


<p>
Lijep pozdrav,<br/>
<strong>Apartmani Irma</strong><br/>
📍 Naputica 28, 21320 Baška Voda<br/>
📞 +385 95 909 1695<br/>
📧 saric.irma68@gmail.com
</p>


<div style="
text-align:center;
margin-top:30px;
">


<a
href="tel:+385959091695"
style="
display:inline-block;
background:#075985;
color:white;
padding:12px 25px;
border-radius:30px;
text-decoration:none;
font-weight:bold;
margin-right:10px;
"
>
📞 Call us
</a>


<a
href="${siteUrl}"
style="
display:inline-block;
background:#082f49;
color:white;
padding:12px 25px;
border-radius:30px;
text-decoration:none;
font-weight:bold;
"
>
🌐 Visit website
</a>


</div>


<p style="
text-align:center;
margin-top:25px;
">

Instagram:

<a
href="https://www.instagram.com/irma_apartments_baskavoda/"
style="color:#075985;"
>
@irma_apartments_baskavoda
</a>

</p>


      </div>

      </div>

      `,

    });



    if(guestEmail.error){

      return NextResponse.json(
        guestEmail.error,
        {status:500}
      );

    }



    return NextResponse.json({
      success:true
    });



  } catch(error){

    console.error(error);


    return NextResponse.json(
      {
        error:"Greška pri slanju."
      },
      {
        status:500
      }
    );

  }

}