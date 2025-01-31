const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#030203]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-sans font-bold mb-8 text-center bg-[#DFE742] py-4 -mx-8 text-black">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p>This Privacy Notice for Plunge Technologies Pvt Ltd ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Visit our website at <a href="https://www.plunge.one" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.plunge.one</a>, or any website of ours that links to this Privacy Notice.</li>
                <li>Download and use our mobile application (Plunge - Find friends for anything), or any other application of ours that links to this Privacy Notice.</li>
                <li>Use Plunge - Find friends for anything. A platform to make new friends daily, by connecting users based on similar daily life activities.</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
              <p>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:nikhil@plunge.one" className="text-blue-600 hover:underline">nikhil@plunge.one</a>.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Summary of Key Points</h2>
              <p>This summary provides key points from our Privacy Notice.</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
                <li><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example, your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</li>
                <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
                <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p>If you have questions or comments about this notice, you may email us at <a href="mailto:nikhil@plunge.one" className="text-blue-600 hover:underline">nikhil@plunge.one</a> or contact us by post at:</p>
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

export default PrivacyPolicy; 
