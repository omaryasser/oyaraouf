"use client";

import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import Script from "next/script";
import "./mailchimp.css";
import { usePathname } from "next/navigation";

// Extend Window interface for Mailchimp
declare global {
  interface Window {
    fnames?: string[];
    ftypes?: string[];
  }
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <ToastContainer />

      <footer className="bg-grey relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/20 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-white/10 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center text-white">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Let's Stay Connected 🤝
                </h2>
              </div>

              <div className="relative">
                <blockquote className="italic text-lg px-4 pt-4 pb-8 max-w-3xl mx-auto relative">
                  "The best way to keep up with someone's updates is to save
                  their channel's link and visit it regularly on your own
                  schedule, without relying on recommendation algorithms."
                </blockquote>
              </div>

              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                Save my links if you are interested in my updates or subscribe
                to my mailing list to receive collective updates
              </p>
            </div>

            <div className="flex justify-center gap-6 md:gap-8">
              <Link
                href="https://www.linkedin.com/in/oyaraouf/"
                target="_blank"
                className="group relative"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full transform scale-0 transition-transform duration-300"></div>
                  <div className="relative p-4 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform  border border-white border-opacity-20 hover:border-opacity-40 backdrop-blur-sm">
                    <FaLinkedinIn className="text-2xl md:text-3xl group-hover:text-blue-300 transition-colors relative z-10" />
                  </div>
                </div>
              </Link>
              <Link
                href="https://twitter.com/oyaraouf/"
                target="_blank"
                className="group relative"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full transform scale-0  transition-transform duration-300"></div>
                  <div className="relative p-4 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform  border border-white border-opacity-20 hover:border-opacity-40 backdrop-blur-sm">
                    <FaTwitter className="text-2xl md:text-3xl group-hover:text-blue-300 transition-colors relative z-10" />
                  </div>
                </div>
              </Link>
              <Link
                href="https://github.com/omaryasser/"
                target="_blank"
                className="group relative"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full transform scale-0  transition-transform duration-300"></div>
                  <div className="relative p-4 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform  border border-white border-opacity-20 hover:border-opacity-40 backdrop-blur-sm">
                    <FaGithub className="text-2xl md:text-3xl group-hover:text-white transition-colors relative z-10" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-md mx-auto border border-white border-opacity-20 hover:border-opacity-30 transition-all duration-300 shadow-2xl">
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
                      <div class="mc-field-group">
                        <label id="mce-email-label" for="mce-email">Email Address</label>
                        <input type="email" name="EMAIL" class="required email" id="mce-email" required="" value="">
                      </div>
                      <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display: none;"></div>
                        <div class="response" id="mce-success-response" style="display: none;"></div>
                      </div>
                      <div class="text-black" aria-hidden="true" style="position: absolute; left: -5000px;">
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
            </div>
          </div>

          {pathname === "/" && (
            <div className="mt-12 pt-8 border-t border-white border-opacity-20">
              <div className="flex justify-center">
                <Link
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm font-light hover:underline decoration-white/50 underline-offset-4"
                  href="/privacy"
                  passHref
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="mt-4 text-xs text-white/50">
                © {new Date().getFullYear()} Omar Yasser
              </div>
            </div>
          )}
        </div>
        <Script
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          strategy="lazyOnload"
        />
        <Script id="mc-validate" strategy="lazyOnload">
          {`
          (function($) {
            if (typeof window !== 'undefined') {
              window.fnames = window.fnames || [];
              window.ftypes = window.ftypes || [];
              window.fnames[0] = 'EMAIL'; window.ftypes[0] = 'email';
              window.fnames[1] = 'FNAME'; window.ftypes[1] = 'text';
              window.fnames[2] = 'LNAME'; window.ftypes[2] = 'text';
              window.fnames[3] = 'ADDRESS'; window.ftypes[3] = 'address';
              window.fnames[4] = 'PHONE'; window.ftypes[4] = 'phone';
              window.fnames[5] = 'BIRTHDAY'; window.ftypes[5] = 'birthday';
              window.fnames[6] = 'COMPANY'; window.ftypes[6] = 'text';
            }
          }(typeof jQuery !== 'undefined' ? jQuery : undefined));
        `}
        </Script>
      </footer>
    </>
  );
}
