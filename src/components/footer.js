import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './TabAnimation';

const Footer = () => {
    const footerLinks = {
        product: [
            { name: 'Features', href: '/features/' },
            { name: 'Video tutorials', href: '/video-tutorial/' },
            { name: 'Pricing', href: '/pricing/' }
        ],
        partners: [
            { name: 'Affiliate program', href: '/affiliate-program/' }
        ],
        software: [
            { name: 'Drip Campaigns', href: '/features/drip-campaigns/' },
            { name: 'LinkedIn analytics', href: '/features/advanced-analytics/' },
            { name: 'Team management', href: '/features/team-management/' },
            { name: 'Hyper-personalized outreach', href: '/features/hyper-personalized-outreach/' },
            { name: 'Linkedin messenger tool', href: '/features/personal-inbox/' },
            { name: 'Extra profile security', href: '/features/extra-safety-algorithm/' }
        ],
        resources: [
            { name: 'Blog', href: '/blog/' },
            { name: 'FAQ', href: '/faq/' },
            { name: 'Profile makeover', href: '/linkedin-profile-makeover/' },
            { name: 'Talk to sales', href: '/book-a-demo/' },
            { name: 'Help center', href: 'https://help.dripify.io/en/' },
            { name: 'Contact us', href: '/contact-us/' }
        ],
        compare: [
            { name: 'Dripify VS Dux Soup', href: '/comparison/why-choose-dripify-over-dux-soup/' },
            { name: 'Dripify VS Expandi', href: '/comparison/why-choose-dripify-over-expandi/' },
            { name: 'Dripify VS Meet Alfred', href: '/comparison/why-choose-dripify-over-meet-alfred/' },
            { name: 'Dripify VS Phantombuster', href: '/comparison/why-choose-dripify-over-phantombuster/' },
            { name: 'Dripify VS Linked Helper', href: '/comparison/why-choose-dripify-over-linked-helper/' },
            { name: 'Dripify VS Waalaxy', href: '/comparison/why-choose-dripify-over-waalaxy/' },
            { name: 'Dripify VS Zopto', href: '/comparison/why-choose-dripify-over-zopto/' }
        ]
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/sales-automation-software/',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.11914 11.1001V16.5001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.11814 7.83799C7.99414 7.83799 7.89314 7.93899 7.89414 8.06299C7.89414 8.18699 7.99514 8.28799 8.11914 8.28799C8.24314 8.28799 8.34414 8.18699 8.34414 8.06299C8.34414 7.93799 8.24314 7.83799 8.11814 7.83799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        // Add other social icons similarly
    ];

    return (
        <div className="bg-neutral-700 text-white p-8 rounded-3xl mx-8 my-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="w-48">
                        <a href="https://dripify.io/" className="block">
                            <img 
                                src="https://dripify.io/wp-content/uploads/2023/11/logo.svg"
                                alt="Dripify"
                                className="h-8 w-auto mb-4"
                            />
                        </a>
                        <p className="text-gray-400 text-sm">
                            A smarter way to crush sales
                        </p>
                    </div>

                    <div className="flex gap-24">
                        <div className="flex flex-col items-start">
                            <h3 className="font-bold text-neutral-400 mb-4">Product</h3>
                            <div className="flex flex-col items-start">
                                <a href="/features" className="text-white hover:text-blue-400 text-sm py-1">Features</a>
                                <a href="/video-tutorial" className="text-white hover:text-blue-400 text-sm py-1">Video tutorials</a>
                                <a href="/pricing" className="text-white hover:text-blue-400 text-sm py-1">Pricing</a>
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="font-bold text-neutral-400 mb-4">Software</h3>
                            <div className="flex flex-col items-start">
                                <a href="/drip-campaigns" className="text-white hover:text-blue-400 text-sm py-1">Drip Campaigns</a>
                                <a href="/analytics" className="text-white hover:text-blue-400 text-sm py-1">LinkedIn analytics</a>
                                <a href="/team" className="text-white hover:text-blue-400 text-sm py-1">Team management</a>
                                <a href="/outreach" className="text-white hover:text-blue-400 text-sm py-1">Hyper-personalized outreach</a>
                                <a href="/messenger" className="text-white hover:text-blue-400 text-sm py-1">Linkedin messenger tool</a>
                                <a href="/security" className="text-white hover:text-blue-400 text-sm py-1">Extra profile security</a>
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="font-bold text-neutral-400 mb-4">Resources</h3>
                            <div className="flex flex-col items-start">
                                <a href="/blog" className="text-white hover:text-blue-400 text-sm py-1">Blog</a>
                                <a href="/faq" className="text-white hover:text-blue-400 text-sm py-1">FAQ</a>
                                <a href="/profile-makeover" className="text-white hover:text-blue-400 text-sm py-1">Profile makeover</a>
                                <a href="/book-demo" className="text-white hover:text-blue-400 text-sm py-1">Talk to sales</a>
                                <a href="https://help.dripify.io/en/" className="text-white hover:text-blue-400 text-sm py-1">Help center</a>
                                <a href="/contact" className="text-white hover:text-blue-400 text-sm py-1">Contact us</a>
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="font-bold text-neutral-400 mb-4">Compare</h3>
                            <div className="flex flex-col items-start">
                                <a href="/vs-dux-soup" className="text-white hover:text-blue-400 text-sm py-1">VS Dux Soup</a>
                                <a href="/vs-expandi" className="text-white hover:text-blue-400 text-sm py-1">VS Expandi</a>
                                <a href="/vs-alfred" className="text-white hover:text-blue-400 text-sm py-1">VS Meet Alfred</a>
                                <a href="/vs-phantombuster" className="text-white hover:text-blue-400 text-sm py-1">VS Phantombuster</a>
                                <a href="/vs-linked-helper" className="text-white hover:text-blue-400 text-sm py-1">VS Linked Helper</a>
                                <a href="/vs-waalaxy" className="text-white hover:text-blue-400 text-sm py-1">VS Waalaxy</a>
                                <a href="/vs-zopto" className="text-white hover:text-blue-400 text-sm py-1">VS Zopto</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-600 flex justify-between items-center">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                        © 2025 All rights reserved. Dripify – SALES automation Software.{' '}
                        <a href="/privacy-policy" className="hover:text-white">Privacy</a>
                        {' '}and{' '}
                        <a href="/terms" className="hover:text-white">Terms</a>.
                    </p>

                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/company/sales-automation-software/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.11914 11.1001V16.5001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.11814 7.83799C7.99414 7.83799 7.89314 7.93899 7.89414 8.06299C7.89414 8.18699 7.99514 8.28799 8.11914 8.28799C8.24314 8.28799 8.34414 8.18699 8.34414 8.06299C8.34414 7.93799 8.24314 7.83799 8.11814 7.83799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Footer Column Component


export default Footer;
