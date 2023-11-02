import React from 'react';
import { FaHome, FaPhone, FaEnvelope, FaMapMarker, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const company = 'Kraft INterioers';
  const contact = 'Contacts';
  const phone = '850-123-5021';
  const email = 'info@lorem.mail';
  const address = '312 Lovely Street, NY';

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8 shadow-lg border-b">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title={company} className="inline-flex items-center">
            <FaHome className="w-8 text-deep-purple-accent-400" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              {company}
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">{contact}</p>
          <div className="flex">
            <FaPhone />
            <p className="mr-1 text-gray-800">Phone:</p>
            <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              {phone}
            </a>
          </div>
          <div className="flex">
            <FaEnvelope />
            <p className="mr-1 text-gray-800">Email:</p>
            <a href={`mailto:${email}`} aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              {email}
            </a>
          </div>
          <div className="flex">
            <FaMapMarker />
            <p className="mr-1 text-gray-800">Address:</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              {address}
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <FaInstagram />
            </a>
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <FaFacebook />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
