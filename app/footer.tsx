"use client";

import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import Script from "next/script";
import "./mailchimp.css";

export default function Footer() {
  return (
    <footer className=" flex justify-center  ">
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <style>{`
          #mc_embed_signup {
            background: #F03000;
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
            width: 600px;
          }
        `}</style>
      </Head>

      <ToastContainer />
      <div className=" relative max-w-3xl w-full p-8 md:p-10 text-center text-white rounded-xl ">
        <h2 className="text-3xl font-semibold">
          Let’s Stay Connected{" "}
          <span role="img" aria-label="Handshake">
            🤝
          </span>
        </h2>

        <blockquote className="italic text-lg px-16 pt-4 pb-8">
          The best way to keep up with someone’s updates is to save their
          channel’s link and visit it regularly on your own schedule, without
          relying on a recommended algorithm.
        </blockquote>

        <p className="text-lg">
          Save my links if you are interested in my updates subscribe to my
          mailing list to receive collective updates:
        </p>

        <div className="flex justify-center pt-4 gap-6">
          <Link href="https://www.linkedin.com/in/oyaraouf//" target="_blank">
            <FaLinkedinIn className="text-2xl hover:text-black transition-colors border-white" />
          </Link>
          <Link href="https://twitter.com/oyaraouf/" target="_blank">
            <FaTwitter className="text-2xl hover:text-black transition-colors" />
          </Link>
          <Link href="https://github.com/omaryasser/" target="_blank">
            <FaGithub className="text-2xl hover:text-black transition-colors" />
          </Link>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `
          <div id="mc_embed_signup">
            <form 
              action="https://oyaraouf.us12.list-manage.com/subscribe/post?u=4a78d3608a955361debfb7561&amp;id=502c1cf015&amp;f_id=00c7e6e1f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              class="validate" 
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">

                <div class="mc-field-group"><label id="mce-email-label" for="mce-email">Email Address</label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
                <div id="mce-responses" class="clear foot">
                  <div class="response" id="mce-error-response" style="display: none;"></div>
                  <div class="response" id="mce-success-response" style="display: none;"></div>
                </div>

                <div class="text-black" aria-hidden="true" style="position: absolute; left: -5000px;">
                  <!-- real people should not fill this in -->
                  <input 
                    type="text" 
                    name="b_4a78d3608a955361debfb7561_502c1cf015" 
                    tabindex="-1" 
                    value=""
                  >
                </div>

                <div class="optionalParent">
                  <div class="clear foot">
                    <input 
                      type="submit" 
                      name="subscribe" 
                      id="mc-embedded-subscribe" 
                      class="button" 
                      value="Subscribe"
                    >

                  </div>
                </div>
              </div>
            </form>
          </div>
        `,
          }}
        />
        <Script
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          strategy="lazyOnload"
        />
        <Script id="mc-validate" strategy="lazyOnload">
          {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = 'EMAIL'; ftypes[0] = 'email';
            fnames[1] = 'FNAME'; ftypes[1] = 'text';
            fnames[2] = 'LNAME'; ftypes[2] = 'text';
            fnames[3] = 'ADDRESS'; ftypes[3] = 'address';
            fnames[4] = 'PHONE'; ftypes[4] = 'phone';
            fnames[5] = 'BIRTHDAY'; ftypes[5] = 'birthday';
            fnames[6] = 'COMPANY'; ftypes[6] = 'text';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);
        `}
        </Script>

        {/* <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <label className="text-sm md:text-base" htmlFor="email">
            Add to mailing list:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-2 md:mt-0 md:ml-2 px-6 py-2 rounded-md border border-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Submit
          </button>
        </form> */}
      </div>
    </footer>
  );
}
