/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const isBrowser = typeof window !== "undefined";

export const onClientEntry = () => {
  // set adobe analytics window object
  if (isBrowser) {
    window._satellite = window._satellite || {};
    window.alloy_all = window.alloy_all || {};
    window.alloy_all.data = window.alloy_all.data || {};
    window.alloy_all.data._adobe_corpnew = window.alloy_all.data._adobe_corpnew || {};
    window.alloy_all.data._adobe_corpnew = window.alloy_all.data._adobe_corpnew || {};
    window.alloy_all.data._adobe_corpnew.web = window.alloy_all.data._adobe_corpnew.web || {};
    window.alloy_all.data._adobe_corpnew.web.webPageDetails = window.alloy_all.data._adobe_corpnew.web.webPageDetails || {};
  }
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (isBrowser) {
    // check if on localhost or deployed somewhere
    if (window.location.pathname === "/") {
      document
        .querySelector(".index-hero")
        ?.setAttribute("daa-lh", "index-hero");

      document
        .querySelectorAll(".index-hero a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-minicards")
        ?.setAttribute("daa-lh", "index-minicards");

      document
        .querySelectorAll(".index-minicards a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-developer-products")
        ?.setAttribute("daa-lh", "index-developer-products");

      document
        .querySelectorAll(".index-developer-products a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-developer-products")
        ?.setAttribute("daa-lh", "index-developer-products");

      document
        .querySelectorAll(".index-developer-products a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-exchange-adobe")
        ?.setAttribute("daa-lh", "index-exchange-adobe");

      document
        .querySelectorAll(".index-exchange-adobe a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-adobe-tech-blog")
        ?.setAttribute("daa-lh", "index-adobe-tech-blog");

      document
        .querySelectorAll(".index-adobe-tech-blog a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-adobe-max")
        ?.setAttribute("daa-lh", "index-adobe-max");

      document
        .querySelectorAll(".index-adobe-max a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-app-builders")
        ?.setAttribute("daa-lh", "index-app-builder");

      document
        .querySelectorAll(".index-app-builder a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-express")
        ?.setAttribute("daa-lh", "index-express");

      document
        .querySelectorAll(".index-express a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });

      document
        .querySelector(".index-learn-more")
        ?.setAttribute("daa-lh", "index-learn-more");

      document
        .querySelectorAll(".index-learn-more a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });
    
      document
        .querySelectorAll("[data-cy='create-new-credential']")
        .forEach(button => {
            button.setAttribute("daa-ll", "create-new-credential");
        });
          
        document
        .querySelectorAll("[data-cy='generate-token']")
        .forEach(button => {
            button.setAttribute("daa-ll", "generate-token");
        });

      document
        .querySelectorAll("[data-cy='try-it']")
        .forEach(button => {
            button.setAttribute("daa-ll", button.parentElement.textContent.trim().slice(0, -6))
        })

      document
        .querySelectorAll(".useCaseCard a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent.trim());
        });
    }

    function watchAndFireAnalytics() {
      // eslint-disable-next-line no-undef
      if (typeof window._satellite !== 'undefined' && typeof window._satellite.track === 'function') {
        // eslint-disable-next-line no-undef
        _satellite.track('state',
          {
            xdm: {},
            data: {
              _adobe_corpnew: {
                web: {
                  webPageDetails: {
                    customPageName: location.href
                  }
                }
              }
            }
          }
        );

        clearInterval(intervalId);
      }
    }

    // watch if analytics is online then track page
    const intervalId = setInterval(watchAndFireAnalytics, 1000);
  }
};