import React from "react";
import { Link as Hash } from "react-scroll"
const AboutK = () => {
  return (
    <div>
      <div className="mb-16">
        <p>
          The University Counseling Center (UCC) contributes to the overall
          academic mission of the University of Notre Dame within the context of
          the Division of Student Affairs. UCC staff recognizes that the stress
          associated with a high pressure academic environment at a critical
          developmental period often leads to or reveals problems which can be
          alleviated through therapeutic intervention.
        </p>
        <p>
          Our mission is to provide counseling and crisis intervention to the
          students of the University, consultation services to the campus
          community, and supervision and training opportunities for future
          psychologists. While sensitive to the unique characteristics of an
          intelligent, highly motivated, predominantly Catholic student body, we
          remain committed to the practice of psychology as determined by the
          ethical code of the American Psychological Association and the laws of
          the state of Indiana. We affirm diversity and are committed to
          creating an environment that recognizes the inherent value and dignity
          of each person. All UCC services are confidential, free, and available
          to all enrolled undergraduate and graduate students.
        </p>
      </div>
      <div className="w-[70%] grid mb-16  grid-cols-2 ">
        <Hash
          className="p-3 rounded-md cursor-pointer hover:bg-primary-300 ease-in duration-200 hover:scale-95"
          to="CTT"
          smooth={true}
          duration={500}
        >
          Consent to Treatment &darr;
        </Hash>
        <Hash
          className="p-3 rounded-md cursor-pointer hover:bg-primary-300 ease-in duration-200 hover:scale-95"
          to="ROI"
          smooth={true}
          duration={500}
        >
          {" "}
          Release of Information &darr;
        </Hash>
        <Hash
          className="p-3 rounded-md cursor-pointer hover:bg-primary-300 ease-in duration-200 hover:scale-95"
          to="CO"
          smooth={true}
          duration={500}
        >
          {" "}
          Consultation & Outreach &darr;
        </Hash>
      </div>
      <section className="text-primary-100 mb-14" id="CTT">
        <h1 className="text-4xl font-semibold">Consent to Treatment</h1>
        <p>
          The UCC works to be transparent in the services we offer and to
          empower students to take an active role in the counseling process. To
          this end, all students seeking services at the UCC are asked to read
          and sign our informed consent form. This helps to protect your rights
          and inform you about how the UCC works and what to expect in
          counseling. Students are asked to read and sign the consent to
          treatment form prior to receiving services. Reading this form in
          advance of seeking services for the first time can help to expedite
          your Drop-In appointment. Students who receive telehealth counseling
          are required to sign an additional consent form.
        </p>
      </section>
      <section className="text-primary-100  mb-14" id="ROI">
        <h1 className="text-4xl font-semibold">Release of Information</h1>
        <p>
          All treatment at the UCC is confidential. With a student’s written
          permission, in the form of a signed Release of Information Form (ROI),
          the UCC is able to share information about the student’s care with a
          specific person or agency, including a campus partner, off-campus
          provider, parent/guardian, etc. A ROI includes the person to whom the
          information will be released, the information to be released, the
          purpose of the release, and an expiration date. If there is a valid
          ROI on-file with the UCC, we will be able to process a request to
          share information. If a request involves coordination of care with a
          new provider, a new ROI must be completed. If a ROI is expired it must
          be updated before information can be released. Students can retract a
          ROI at any time by contacting the UCC. Please note that the UCC does
          not email clinical records. Please provide a fax number to ensure
          timely delivery of your records. A blank ROI as well as pre-populated
          ROI forms that are commonly utilized are provided here for your
          convenience. Simply download the ROI that you need, complete the form,
          sign it, and return a copy to the UCC.
        </p>
      </section>
      <section className="text-primary-100  mb-14" id="CO">
        <h1 className="text-4xl font-semibold">Consultation & Outreach</h1>
        <p>
        The Student Health and Wellness Unit, which includes the UCC, University Health Services, the Center for Student Support and Care, and the McDonald Center for Student Well-Being, are all committed to supporting University programs designed to create an atmosphere conducive to the well-being, personal growth, and mental health of Notre Dame students. To help achieve this goal, the departments in the Student Health and Wellness Unit are available to provide various outreach and consultation programs that promote student health and well-being, including group presentations, workshops, and panels to any University employee, student, or organization. If you are interested, please complete this form to request a program, so that we can best meet your outreach needs.
        </p>
      </section>
    </div>
  );
};

export default AboutK;
