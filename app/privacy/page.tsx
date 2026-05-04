import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Playground Studio',
  description: 'Privacy Policy for Playground Studio. Learn how we collect, store, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <article className="px-4 sm:px-8">
      {/* Header - matching other page styles */}
      <header className="py-12 md:py-20">
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-medium uppercase tracking-tight leading-[0.9]">
          Privacy
        </h1>
        <p className="mt-6 text-xs tracking-[0.15em] uppercase opacity-50">
          Last updated: September 2023
        </p>
      </header>
      
      <div className="max-w-3xl pb-16 md:pb-32">

      {/* Content */}
      <div className="prose prose-sm max-w-none space-y-8 text-sm leading-relaxed opacity-80">
        <Section title="Overview">
          <p>
            This privacy policy (&quot;Privacy Policy&quot;) sets out how PLAYGROUND CREATIVE PTY LTD ABN 60 628 625 488 trading as Playground Studio and our related bodies corporate (&quot;we&quot;,&quot;our&quot;,&quot;us&quot;) collect, store, use, protect, share and disclose your personal information. It applies to this website and all related websites, web and mobile applications, services and tools (together the &quot;Website&quot;). By visiting or using the Website you agree to the collection, storage, usage and disclosure of your personal information by us in the manner described in this Privacy Policy.
          </p>
          <p>
            From time to time we will review our Privacy Policy. We will notify you about any changes to our Privacy Policy at any time by posting an updated version of the Privacy Policy on the Website.
          </p>
        </Section>

        <Section title="Personal Information">
          <p>
            &apos;Personal information&apos; is any information or an opinion about an identified individual or an individual who can be reasonably identified from the information or opinion. Information or an opinion may be personal information regardless of whether it is true.
          </p>
        </Section>

        <Section title="How We Collect Personal Information">
          <p>We collect personal information in a number of ways, including:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>when you provide information directly to us through the Website, in person, by phone or in writing;</li>
            <li>when you visit and/or use the Website, in which case we record information sent to us by your computer, mobile device or other device you are using to access the Website;</li>
            <li>by dealing or contracting with us; and</li>
            <li>from third parties such as related entities and representatives, service providers to us, operators of linked websites, applications and advertising on the Website.</li>
          </ul>
        </Section>

        <Section title="What Personal Information We Collect and Hold">
          <p>We may collect the following types of personal information in order to provide you with our services:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>contact details including your name, address, email and telephone numbers;</li>
            <li>details of your agents and service providers such as your lawyer or finance provider;</li>
            <li>dates of birth, gender and information to verify your identity;</li>
            <li>bank account details, credit card details and other financial details;</li>
            <li>details of products and services that we previously supplied to you or which you have enquired about;</li>
            <li>personal information from your interaction with the Website and its content, including device identifiers, geo-location information, connection information, IP address and standard web log data; and</li>
            <li>any other information we consider may assist us in providing or marketing our Services.</li>
          </ul>
        </Section>

        <Section title="How Personal Information Is Used">
          <p>Our principal purpose in collecting, using and storing your personal information is to provide the Services in a personalised, safe and efficient manner. You consent to us collecting, using, storing, sharing and disclosing your personal information to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>provide you with an appropriate product or service;</li>
            <li>send marketing communication to you regarding new estates, developments and investment opportunities;</li>
            <li>conduct our business, generate content and provide customer support;</li>
            <li>provide, administer, market and manage the Services;</li>
            <li>research, develop and improve the Services;</li>
            <li>communicate with you;</li>
            <li>detect, investigate and prevent potentially unlawful acts;</li>
            <li>comply with our legal obligations and assist government and law enforcement agencies;</li>
            <li>resolve disputes and identify, test and resolve problems; and</li>
            <li>protect a person&apos;s rights, property or safety.</li>
          </ul>
        </Section>

        <Section title="Disclosure of Personal Information">
          <p>We may disclose your personal information to third parties for the purposes contained in this Privacy Policy, including to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>our representatives and your authorised representatives;</li>
            <li>related body corporates;</li>
            <li>service providers for the operation of our website or business;</li>
            <li>other companies or individuals who may assist us in providing you with an appropriate product;</li>
            <li>our professional advisors, auditors and insurers;</li>
            <li>third parties where we are required or authorized by law to do so.</li>
          </ul>
        </Section>

        <Section title="Use of Cookies">
          <p>
            We (or a third party providing services to us) may use cookies, pixel tags, &quot;flash cookies&quot;, or other local storage provided by your browser or associated applications. A Cookie is a small file that may be placed on your computer when you visit the Website. Cookies are used on some parts of the Website.
          </p>
          <p>
            Cookies may be used to provide you with the Services, including to identify you as a user of the Website, remember your preferences, customise and measure the effectiveness of the Website and our promotions, advertising and marketing, analyse your usage of the Website, and for security purposes.
          </p>
        </Section>

        <Section title="Storage and Security">
          <p>
            We store, protect and process your personal information by taking reasonable steps. The reasonable steps we take include protecting the information from misuse or loss and from unauthorised access, modification or disclosure. Where we no longer require your personal information, we will take reasonable steps to destroy it.
          </p>
        </Section>

        <Section title="Access to Information">
          <p>
            Subject to the Privacy Act, you may request to access the personal information we hold about you by emailing us at the address listed under &quot;Contact Us&quot; below. All requests for access will be processed within a reasonable time.
          </p>
        </Section>

        <Section title="Direct Marketing Materials">
          <p>
            We may send you direct marketing communications and information about our products and services that we consider may be of interest to you. At any time you may opt-out of receiving marketing communications from us by contacting us or by using opt-out facilities provided in the marketing communications.
          </p>
        </Section>

        <Section title="Complaints">
          <p>
            If you believe that your privacy has been breached, please contact us using the contact information below and provide details of the incident so that we can investigate it. We will deal with the complaint in accordance with our then current complaints handling procedure.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>If you have any questions about this privacy policy, any concerns or feedback regarding the treatment of your privacy, please contact our Privacy Officer:</p>
          <div className="mt-4 space-y-1">
            <p><strong>Post:</strong> 23 Union Street, South Melbourne, VIC 3205</p>
            <p><strong>Email:</strong> hello@playgroundstudio.com.au</p>
          </div>
        </Section>

        <Section title="Further Information">
          <p>If we do not resolve your enquiry to your satisfaction, please contact the Office of the Australian Information Commission:</p>
          <div className="mt-4 space-y-1">
            <p><strong>Telephone:</strong> 1300 363 992</p>
            <p><strong>Email:</strong> enquiries@oaic.gov.au</p>
            <p><strong>Website:</strong> www.oaic.gov.au</p>
          </div>
        </Section>

        {/* Acknowledgement */}
        <div className="border-t border-current/10 pt-8 mt-12">
          <p className="text-xs leading-relaxed opacity-60">
            We acknowledge First Nations peoples as the traditional custodians of lands, seas and waters throughout Australia. Our studio stands on the land of the Boon Wurrung people of the Kulin Nation, and we pay our respects to their elders past and present.
          </p>
        </div>

        {/* Back Link */}
        <div className="pt-8">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      </div>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-medium uppercase tracking-tight mb-4 opacity-100">
        {title}
      </h2>
      {children}
    </section>
  )
}
