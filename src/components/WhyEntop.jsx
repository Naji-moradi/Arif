import React from "react";
import image from "../assets/whyentopPhoto.webp";

const WhyEntop = () => {
  return (
    <div className="container">
      <div className=" d-flex flex-column flex-lg-row ">
        <div className="order-2  order-lg-1 col-lg-6 col-12 p-2 align-self-center">
          <h3 className="py-2">Why Entop?</h3>
          <p className="fw-semibold  text-muted fs-6   ">
            Welcome to Entop Construct. You Dream We Build At Entop Construct
            our strengthen lies in our credibility and ability to prioritise in
            exceeding the expectations of our clients. Let your dreams be our
            project. We deliver with Confidence &amp; Simply the Best. There is
            more to building a house than just bricks and mortar. At Entop
            Construct we have created an unrivalled experience that puts you in
            control of your dream home. We are confident that you will be able
            to find the right home for you and your family through our unique
            &amp; professional services. We want you to Build with Confidence
            when building with Entop Construct, this is our commitment to you.
          </p>
          <h3 className="py-2">BUILD WITH CERTAINTY</h3>
          <p className="fw-semibold text-muted fs-6">
            When you choose to build with Entop Construct, we offer an
            unrivalled experience from the very first moment you sign and until
            after you get the keys for your brand new home. We will be there
            right beside you every step of this huge part of your life. When
            Entop Construct quotes you with a price for your new home, you are
            guaranteed to know that the total for your dream home will not
            change and you will know what you will be paying throughout your
            entire build.
          </p>
        </div>
        <div
          className="order-1  order-lg-2 col-lg-6 col-12"
          style={{ opacity: "0.4" }}
        >
          <img
            className="responsive-image w-100 h-auto  img-fluid"
            src={image}
            alt="image"
          />
        </div>
      </div>
      <div className="container-fluid d-flex flex-column flex-lg-row gap-5 pt-0">
        <div className="col-lg-6">
          <h3 className="py-2">BUILD WITH STYLE</h3>
          <p className="fw-semibold  text-muted fs-6   ">
            Build your new home of colour and design through our architecturally
            designed homes. See, Feel and experience the joy of creating your
            dream home. Our team will guide and assist you in every step of
            creating a home that reflects your style.
          </p>
        </div>
        <div className="col-lg-6">
          <h3 className="py-2">BUILD WITH QUALITY</h3>
          <p className="fw-semibold text-muted fs-6">
            Entop Construct is committed to ‘We Deliver With Confidence &amp;
            Simply The Best’. Quality Assurance &amp; Quality Control is on
            board with us everyday day and on each and every home we build. Our
            team maintain strict QA &amp; QC supervisions at all times. Rest
            assure that the final product will be everything you imagined.
          </p>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column flex-lg-row gap-5 pt-0">
        <div className="col-lg-6">
          <h3 className="py-2">BUILD WITH CARE</h3>
          <p className="fw-semibold text-muted fs-6">
            Our business model is structured around good old customer service.
            At Entop Construct, you will be given the attention you deserve. All
            enquiries have a strict 24-hour response procedure (Monday – Friday
            9 am to 5 pm) that is our promise. Our trained and friendly staff
            will hold your hand throughout the entire building process, from the
            initial consultation, customer service, color coordination, and site
            supervisions so all you need to do is tell us what you want in your
            Dream Home and we will turn it into reality & Simply The Best.
          </p>
        </div>
        <div className="col-lg-6">
          <h3 className="py-2">BUILD ON TIME</h3>
          <p className="fw-semibold text-muted fs-6">
            Building can be a stressful process mixed in with the immense
            pressures of expiring leases, home ownership responsibilities, and
            the tension of moving homes. At Entop Construct, we don’t put you in
            a queue waiting to start your build. We will get your dream home to
            site within 3-6 weeks of receiving your land settlement, finance
            documentation, and developer & building approval. We will guarantee
            your build time so you can begin making arrangements to move into
            your new home, secure in the knowledge that it will be finished on
            time.
          </p>
        </div>
      </div>
      <div className="container-fluid d-flex flex-column flex-lg-row gap-5 pt-0">
        <div>
          <h3 className="py-2">BUILD TO LAST</h3>
          <p className="fw-semibold  text-muted fs-6   ">
            At Entop Construct, we care about your happiness and we will help
            you settle into your new home well after we have handed over the
            keys. Your new home comes with the added assurance &amp; warranty.
            Our homes are built to last and we are confident about our homes. So
            have extra peace of mind.
          </p>
        </div>
        <div>
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default WhyEntop;
