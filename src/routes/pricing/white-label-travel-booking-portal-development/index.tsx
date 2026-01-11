import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
    const nav = useNavigate();

    return (
        <section class="py-20 px-6 bg-white min-h-screen relative">
            {/* Close Button */}
            <button
                onClick$={() => nav('/')}
                class="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors text-3xl font-bold z-10"
                aria-label="Close and return to homepage"
            >
                ×
            </button>

            <div class="max-w-7xl mx-auto text-center space-y-10">
                <h1 class="text-5xl font-bold text-gray-900">White-Label Travel Booking Portal Development</h1>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Launch your own branded travel agency platform with integrated flight, hotel, and holiday package booking systems. Powered by industry-leading APIs and built on robust CMS platforms.
                </p>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 lg:items-stretch">
                    {/* Starter Plan - WordPress */}
                    <div class="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-left flex flex-col">
                        <h3 class="text-2xl font-bold mb-4 text-gray-800">WordPress Travel Lite</h3>
                        <p class="text-gray-600 mb-4">Perfect for travel startups and small agencies entering the online booking market.</p>
                        
                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">CMS Platform</h4>
                            <p class="text-sm text-gray-700">WordPress with WP Travel Engine</p>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Flight Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Third-party Affiliate Integration</li>
                                <li>✔ Domestic & International Flights</li>
                                <li>✔ Real-time Fare Search</li>
                                <li>✔ One-way & Round Trip Booking</li>
                                <li>✔ Basic Booking Management</li>
                                <li>✔ Flight Status Tracking</li>
                                <li>✔ Price Alerts</li>
                                <li>✔ E-ticket Generation</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Hotel Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Booking.com Affiliate API</li>
                                <li>✔ 500K+ Properties Worldwide</li>
                                <li>✔ Hotel Search & Filters</li>
                                <li>✔ Commission-based Model</li>
                                <li>✔ Guest Reviews Display</li>
                                <li>✔ Photo Gallery Integration</li>
                                <li>✔ Location Maps</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Additional Services</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Basic Holiday Packages</li>
                                <li>✔ Tour Itinerary Builder</li>
                                <li>✔ Travel Blog Module</li>
                                <li>✔ Contact Form Integration</li>
                                <li>✔ Newsletter Subscription</li>
                            </ul>
                        </div>

                        <div class="mb-6 flex-grow">
                            <h4 class="font-bold text-gray-800 mb-2">Core Features</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li>✔ Custom WordPress Theme</li>
                                <li>✔ Responsive Mobile Design</li>
                                <li>✔ Payment Gateway Integration (2)</li>
                                <li>✔ Basic SEO Setup</li>
                                <li>✔ User Registration & Login</li>
                                <li>✔ Booking History Dashboard</li>
                                <li>✔ Email Notifications</li>
                                <li>✔ Google Maps Integration</li>
                                <li>✔ Social Media Integration</li>
                                <li>✔ WhatsApp Chat Widget</li>
                                <li>✔ Contact Form Builder</li>
                                <li>✔ Gallery & Portfolio</li>
                                <li>✔ Testimonials Section</li>
                                <li>✔ FAQ Management</li>
                                <li>✔ Basic Analytics Dashboard</li>
                                <li>✔ Search Engine Friendly URLs</li>
                                <li>✔ XML Sitemap Generation</li>
                                <li>✔ Image Optimization</li>
                                <li>✔ Caching Setup</li>
                                <li>✔ Speed Optimization</li>
                                <li>✔ SSL Certificate</li>
                                <li>✔ Spam Protection</li>
                                <li>✔ Cookie Consent Banner</li>
                                <li>✔ Privacy Policy Generator</li>
                                <li>✔ Terms & Conditions Template</li>
                                <li>✔ 1 Year Free Hosting</li>
                                <li>✔ 1 Year Free Domain</li>
                                <li>✔ 2 Months Free Support</li>
                                <li>✔ Admin Training (2 Sessions)</li>
                                <li>✔ 100 Page/Product Capacity</li>
                            </ul>
                        </div>

                        <div class="text-3xl font-bold text-orange-600 mb-4 mt-auto">₹1,50,000</div>
                        
                        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 text-sm text-gray-700">
                            <p class="font-semibold mb-1">Note:</p>
                            <p>This plan uses affiliate integrations. No additional API costs included.</p>
                        </div>
                        
                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Professional Plan - React */}
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left flex flex-col">
                        <h3 class="text-2xl font-bold mb-4 text-gray-800">React Travel Pro</h3>
                        <p class="text-gray-600 mb-4">Advanced solution for established travel agencies requiring comprehensive booking capabilities.</p>
                        
                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">CMS Platform</h4>
                            <p class="text-sm text-gray-700">React.js with Custom Travel Module</p>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Flight Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Flight API Integration</li>
                                <li>✔ Multi-airline Comparison</li>
                                <li>✔ Fare Rules & Baggage Info</li>
                                <li>✔ Seat Selection</li>
                                <li>✔ Meal Preferences</li>
                                <li>✔ Multi-city Booking</li>
                                <li>✔ PNR Management</li>
                                <li>✔ Ticketing & Cancellation</li>
                                <li>✔ Booking Modification</li>
                                <li>✔ Flight Schedule Updates</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Hotel Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Hotel API Integration</li>
                                <li>✔ 1M+ Properties Worldwide</li>
                                <li>✔ Room Type Selection</li>
                                <li>✔ Meal Plans & Amenities</li>
                                <li>✔ Instant Confirmation</li>
                                <li>✔ Modification & Cancellation</li>
                                <li>✔ Virtual Hotel Tours</li>
                                <li>✔ Price Match Guarantee</li>
                                <li>✔ Special Offers Display</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Bus Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Bus API Integration</li>
                                <li>✔ Interstate & Intercity Routes</li>
                                <li>✔ Seat Selection & Layout</li>
                                <li>✔ Live Bus Tracking</li>
                                <li>✔ Instant Booking Confirmation</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Additional Services</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Holiday Package Builder</li>
                                <li>✔ Custom Package Creation</li>
                                <li>✔ Visa Processing Module*</li>
                                <li>✔ Travel Insurance Integration*</li>
                                <li>✔ Airport Transfer Booking*</li>
                                <li>✔ Travel Guide Content</li>
                                <li>✔ Destination Information</li>
                            </ul>
                            <p class="text-xs text-gray-600 mt-2 italic">*Additional charges apply</p>
                        </div>

                        <div class="mb-6">
                            <h4 class="font-bold text-gray-800 mb-2">Core Features</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li>✔ Custom Drupal Theme Design</li>
                                <li>✔ Advanced Responsive Design</li>
                                <li>✔ Payment Gateway Integration (4)</li>
                                <li>✔ Advanced SEO & Analytics</li>
                                <li>✔ Multi-user Roles & Permissions</li>
                                <li>✔ Agent/Sub-agent Module</li>
                                <li>✔ Commission Management System</li>
                                <li>✔ B2B & B2C Portal</li>
                                <li>✔ Advanced Reporting Dashboard</li>
                                <li>✔ Email & SMS Notifications</li>
                                <li>✔ Multi-currency Support</li>
                                <li>✔ Multi-language Support (3)</li>
                                <li>✔ Coupon & Discount Engine</li>
                                <li>✔ Review & Rating System</li>
                                <li>✔ Blog & Content Marketing</li>
                                <li>✔ Social Media Marketing Tools</li>
                                <li>✔ Customer Feedback System</li>
                                <li>✔ Booking Invoice Generator</li>
                                <li>✔ Automated Email Campaigns</li>
                                <li>✔ Lead Management System</li>
                                <li>✔ Quote Request Module</li>
                                <li>✔ Wishlist & Saved Searches</li>
                                <li>✔ Price Comparison Tools</li>
                                <li>✔ Booking Calendar View</li>
                                <li>✔ SSL Certificate & Security</li>
                                <li>✔ Firewall & DDoS Protection</li>
                                <li>✔ Daily Automated Backups</li>
                                <li>✔ Two-Factor Authentication</li>
                                <li>✔ Activity Logs & Monitoring</li>
                                <li>✔ 1 Year Free Premium Hosting</li>
                                <li>✔ 1 Year Free Domain</li>
                                <li>✔ 4 Months Free Support</li>
                                <li>✔ Comprehensive Admin Training</li>
                                <li>✔ Video Tutorial Library</li>
                                <li>✔ Unlimited Pages/Products</li>
                            </ul>
                        </div>

                        <div class="text-3xl font-bold text-cyan-700 mb-4 mt-auto">₹2,75,000</div>
                        
                        <div class="bg-cyan-50 border-l-4 border-cyan-600 p-4 mb-4 text-sm text-gray-700">
                            <p class="font-semibold mb-2">Note:</p>
                            <ul class="space-y-1">
                                <li>• Flight, Hotel & Bus API integration () covered in this price</li>
                                <li>• Additional modules (Visa, Car Rentals, Insurance, etc.) require separate payments</li>
                                <li>• API annual maintenance charges must be paid to  from 2nd year onwards</li>
                            </ul>
                        </div>
                        
                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Enterprise Plan - Laravel */}
                    <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left flex flex-col">
                        <h3 class="text-2xl font-bold mb-4 text-gray-800">Laravel Travel Enterprise</h3>
                        <p class="text-gray-600 mb-4">Complete white-label solution with custom API integration and unlimited scalability for large agencies.</p>
                        
                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">CMS Platform</h4>
                            <p class="text-sm text-gray-700">Custom Laravel 11 Framework with Vue.js Frontend</p>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Flight Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Flight API Integration</li>
                                <li>✔ Multi-GDS Aggregation</li>
                                <li>✔ Low Fare Calendar</li>
                                <li>✔ Flexible Date Search</li>
                                <li>✔ Multi-city & Round Trip</li>
                                <li>✔ Group Booking Management</li>
                                <li>✔ Corporate Travel Module</li>
                                <li>✔ Ancillary Services</li>
                                <li>✔ Seat Map Visualization</li>
                                <li>✔ Special Assistance Requests</li>
                                <li>✔ API Rate Negotiation Support</li>
                                <li>✔ Fare Prediction Engine</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Hotel Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Hotel API Integration</li>
                                <li>✔ 2M+ Properties Worldwide</li>
                                <li>✔ Multi-supplier Aggregation</li>
                                <li>✔ Dynamic Pricing Engine</li>
                                <li>✔ Inventory Management</li>
                                <li>✔ Contract Rate Management</li>
                                <li>✔ Virtual Reality Tours</li>
                                <li>✔ AI-powered Recommendations</li>
                                <li>✔ Property Comparison Tool</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Bus Booking</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Bus API Integration</li>
                                <li>✔ Pan-India Route Coverage</li>
                                <li>✔ Real-time Seat Availability</li>
                                <li>✔ Dynamic Seat Pricing</li>
                                <li>✔ Boarding Point Selection</li>
                                <li>✔ GPS-based Bus Tracking</li>
                                <li>✔ Operator Rating System</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2">Additional Services</h4>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Train Booking Module*</li>
                                <li>✔ Car Rental Services*</li>
                                <li>✔ Holiday Package Builder</li>
                                <li>✔ Cruise Booking Module*</li>
                                <li>✔ Activities & Experiences*</li>
                                <li>✔ Event Ticketing*</li>
                                <li>✔ Visa Processing*</li>
                                <li>✔ Travel Insurance*</li>
                                <li>✔ Airport Transfer*</li>
                                <li>✔ Travel SIM Cards*</li>
                                <li>✔ Forex Exchange*</li>
                            </ul>
                            <p class="text-xs text-gray-600 mt-2 italic">*Additional charges apply</p>
                        </div>

                        <div class="mb-6">
                            <h4 class="font-bold text-gray-800 mb-2">Core Features</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li>✔ 100% Custom Design & Development</li>
                                <li>✔ Progressive Web App (PWA)</li>
                                <li>✔ Native Mobile Apps (iOS & Android)</li>
                                <li>✔ Unlimited Payment Gateways</li>
                                <li>✔ Advanced AI-powered Search</li>
                                <li>✔ Machine Learning Price Optimization</li>
                                <li>✔ Chatbot & Virtual Assistant</li>
                                <li>✔ Multi-level Agent Hierarchy</li>
                                <li>✔ White-label Branding</li>
                                <li>✔ B2B, B2C, B2E Portals</li>
                                <li>✔ Advanced Analytics & BI Tools</li>
                                <li>✔ Custom Report Generation</li>
                                <li>✔ Automated Invoice System</li>
                                <li>✔ GST & Tax Management</li>
                                <li>✔ Accounting Software Integration</li>
                                <li>✔ Wallet & Credit System</li>
                                <li>✔ Loyalty & Rewards Program</li>
                                <li>✔ Referral Program Module</li>
                                <li>✔ CRM Integration</li>
                                <li>✔ ERP Integration</li>
                                <li>✔ Live Chat Support System</li>
                                <li>✔ Video Call Support</li>
                                <li>✔ Email Marketing Integration</li>
                                <li>✔ SMS Gateway Integration</li>
                                <li>✔ Push Notifications</li>
                                <li>✔ Multi-currency & Multi-language</li>
                                <li>✔ API Documentation Portal</li>
                                <li>✔ Third-party API Access</li>
                                <li>✔ Webhook Integration</li>
                                <li>✔ Microservices Architecture</li>
                                <li>✔ Load Balancing & CDN</li>
                                <li>✔ Auto-scaling Infrastructure</li>
                                <li>✔ Enterprise Security Suite</li>
                                <li>✔ PCI DSS Compliance</li>
                                <li>✔ Fraud Detection System</li>
                                <li>✔ Real-time Backup & Disaster Recovery</li>
                                <li>✔ 99.9% Uptime SLA</li>
                                <li>✔ Penetration Testing</li>
                                <li>✔ GDPR Compliance Tools</li>
                                <li>✔ 2 Years Premium Cloud Hosting</li>
                                <li>✔ 2 Years Free Domain</li>
                                <li>✔ 6 Months Free Priority Support</li>
                                <li>✔ 24/7 Technical Support</li>
                                <li>✔ Dedicated Account Manager</li>
                                <li>✔ Quarterly Strategy Reviews</li>
                                <li>✔ Unlimited Scaling Capacity</li>
                                <li>✔ Source Code Ownership</li>
                                <li>✔ White-label Rights</li>
                                <li>✔ Custom Feature Development</li>
                            </ul>
                        </div>

                        <div class="text-3xl font-bold text-indigo-600 mb-4 mt-auto">₹4,37,000</div>
                        
                        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 text-sm text-gray-700">
                            <p class="font-semibold mb-2">Note:</p>
                            <ul class="space-y-1">
                                <li>• Flight, Hotel & Bus API integration (given by the respective API provider) covered in this price</li>
                                <li>• Additional modules (Train, Car Rentals, Visa, Insurance, Cruise, Activities, etc.) require separate payments</li>
                                <li>• API annual maintenance charges must be paid to  from 2nd year onwards</li>
                            </ul>
                        </div>
                        
                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-all"
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div class="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-xl">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">What's Included in All Plans</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div>
                            <h3 class="font-bold text-lg text-gray-800 mb-3">Security & Compliance</h3>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ SSL/TLS Encryption</li>
                                <li>✔ PCI DSS Ready Infrastructure</li>
                                <li>✔ GDPR Compliance Tools</li>
                                <li>✔ Regular Security Audits</li>
                                <li>✔ Malware Protection</li>
                                <li>✔ Data Encryption</li>
                                <li>✔ Secure Payment Processing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-gray-800 mb-3">Design & UX</h3>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Mobile-First Design</li>
                                <li>✔ Cross-browser Compatible</li>
                                <li>✔ ADA Accessibility Standards</li>
                                <li>✔ Fast Loading Speed</li>
                                <li>✔ Intuitive User Interface</li>
                                <li>✔ Modern UI/UX Design</li>
                                <li>✔ Brand Customization</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-gray-800 mb-3">Support & Maintenance</h3>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>✔ Regular Platform Updates by API Provider</li>
                                <li>✔ Bug Fixes & Patches by API Provider</li>
                                <li>✔ API Monitoring & Support by API Provider</li>
                                <li>✔ Performance Optimization by API Provider</li>
                                <li>✔ Technical Documentation & API Docs by API Provider</li>
                                <li>✔ Knowledge Base Access by API Provider</li>
                                <li>✔ Ticket Support System by API Provider</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div class="mt-12 text-center">
                    <p class="text-gray-600 mb-4">Need a custom solution or have specific requirements?</p>
                    <button
                        onClick$={() => nav("/contact")}
                        class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg text-lg"
                    >
                        Schedule a Consultation
                    </button>
                </div>
            </div>
        </section>
    );
});
