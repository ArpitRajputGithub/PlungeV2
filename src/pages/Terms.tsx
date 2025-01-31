const Terms = () => {
  return (
    <div className="min-h-screen bg-[#030203]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-sans font-bold mb-8 text-center bg-[#DFE742] py-4 -mx-8 text-black">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Agreement to Our Legal Terms</h2>
              <p>We are Plunge Technologies Pvt Ltd ('Company', 'we', 'us', 'Plunge' or 'our'). We operate the website <a href="https://www.plunge.one" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.plunge.one</a> (the 'Site'), the mobile application Plunge - Find friends for anything (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').</p>
              <p>You can contact us by email at <a href="mailto:nikhil@plunge.one" className="text-blue-600 hover:underline">nikhil@plunge.one</a>, or by mail at House No. 42 Terrace Floor Sainik Vihar, Pitampura, New Delhi- 110034.</p>
              <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Plunge, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Our Services</h2>
              <h3 className="text-xl font-bold mb-2">a. Representations and Age Restriction</h3>
              <p>When you use our Services, you represent and warrant that: (a) the information and details you submit to the Services are true and correspond to reality; (b) your use of the Services does not violate any applicable law or regulation. You affirm that you are at least 18 years of age and a "natural person" in your country of residence and are fully able and competent to enter into the terms, conditions, obligations, representations and responsibilities set forth in these Terms.</p>
              
              <h3 className="text-xl font-bold mt-4 mb-2">b. Your Plunge Account</h3>
              <p>You need a Plunge account ("User Account") in order to use our Services. To create a User Account, you must be at least 18 years old, a "natural person" in your country of residence, and you must provide truthful and accurate information about yourself. You may not use another person's User Account.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Prohibited Use of Our Services</h2>
              <p>While using the Services, you are required to comply with all applicable statutes, orders, regulations, rules and other laws. You are prohibited from, or assisting any other persons to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use the Services to send or post harassing, abusive, or threatening messages</li>
                <li>Solicit passwords or personal information for commercial or unlawful purposes</li>
                <li>Attempt to conceal or misrepresent your identity</li>
                <li>Disrupt the normal flow of the Services</li>
                <li>Transmit any unlawful, harmful, threatening, abusive, or defamatory content</li>
                <li>Use the Services to stalk, harass, abuse, or harm others</li>
                <li>Post intentionally misleading or false information</li>
                <li>Post content that may harm or endanger minors</li>
                <li>Post discriminatory content</li>
                <li>Send spam or unsolicited marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Privacy Policy</h2>
              <p>We care about data privacy and security. Please review our Privacy Policy: <a href="https://www.plunge.one/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.plunge.one/privacy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p>If you have questions or comments about these terms, please contact us at:</p>
              <p className="mt-2">
                Plunge Technologies Private Limited<br />
                House No. 42, terrace floor, Sainik Vihar<br />
                Pitampura, New Delhi- 110034
              </p>
            </section>
          </div>

          <footer className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} PLUNGE TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Terms; 