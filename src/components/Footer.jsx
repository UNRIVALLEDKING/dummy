/* eslint-disable react/prop-types */
import {
  Facebook,
  Instagram,
  LinkedinIcon,
  TwitterIcon,
  Youtube,
} from 'lucide-react';
import { mainLogo } from '../assets';

export default function Footer() {
  function FooterSection({ title, children }) {
    return (
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
        {children}
      </div>
    );
  }
  const socialLinks = [
    { icon: Youtube, href: '', label: 'YouTube' },
    { icon: Instagram, href: '', label: 'Instagram' },
    { icon: Facebook, href: '', label: 'Facebook' },
    { icon: TwitterIcon, href: '', label: 'Twitter' },
    { icon: LinkedinIcon, href: '', label: 'LinkedIn' },
  ];

  function SocialLinks() {
    return (
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="text-[#d0d0c4] hover:text-[#f37a1f] transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    );
  }

  function FooterLink({ href, children }) {
    return (
      <a
        href={href}
        className="block text-[#d0d0c4] hover:text-[#f37a1f] transition-colors py-1"
      >
        {children}
      </a>
    );
  }
  return (
    <footer className="bg-[#393939] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Section */}
          <FooterSection title="Company">
            <div className="space-y-2">
              <FooterLink href="/about">About us</FooterLink>
              <FooterLink href="/why-choose-us">Why choose us</FooterLink>
              <FooterLink href="/contact">Contact us</FooterLink>
              <FooterLink href="/careers">Career</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/feedback">Feedback & Suggestions</FooterLink>
            </div>
          </FooterSection>

          {/* For Investors Section */}
          <FooterSection title="For Investors">
            <div className="space-y-2">
              <FooterLink href="/vision">
                Vision, Mission & Milestones
              </FooterLink>
              <FooterLink href="/responsibility">
                Corporate Responsibility
              </FooterLink>
              <FooterLink href="/clients">Trusted Clients</FooterLink>
            </div>
          </FooterSection>

          {/* Services Section */}
          <FooterSection title="Services">
            <div className="space-y-2">
              <FooterLink href="/services/documentation">
                Documentation
              </FooterLink>
              <FooterLink href="/services/technical">Technical</FooterLink>
              <FooterLink href="/services/financial">Financial</FooterLink>
              <FooterLink href="/services/marketing">Marketing</FooterLink>
              <FooterLink href="/services/hiring">Hiring</FooterLink>
              <FooterLink href="/services/counseling">Counseling</FooterLink>
              <FooterLink href="/services/design">
                Designing & Packaging
              </FooterLink>
            </div>
          </FooterSection>

          {/* Quick Links Section */}
          <FooterSection title="Quick Links">
            <div className="space-y-2">
              <FooterLink href="/features">All Features</FooterLink>
              <FooterLink href="/trade-shows">
                Trade Shows & Broadcasting
              </FooterLink>
              <FooterLink href="/webinar">Free Webinar</FooterLink>
              <FooterLink href="/blog">Blogs</FooterLink>
              <FooterLink href="/news">News & Alerts</FooterLink>
              <FooterLink href="/events">Events & Sponsorships</FooterLink>
            </div>
          </FooterSection>

          {/* Pricing Section */}
          <FooterSection title="Pricing">
            <div className="space-y-2">
              <FooterLink href="/pricing/membership">
                Membership Plans
              </FooterLink>
              <FooterLink href="/pricing/assistance">
                Assistance Plans
              </FooterLink>
            </div>
          </FooterSection>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#d0d0c4]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img
                src={mainLogo}
                className="w-44 bg-white rounded-lg shadow-xl p-2 text-[#f37a1f]"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <SocialLinks />
              <p className="text-[#d0d0c4] text-sm">
                &copy; {new Date().getFullYear()} List2Ship. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
