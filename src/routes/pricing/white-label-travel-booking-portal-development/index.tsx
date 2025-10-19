import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
    const nav = useNavigate();

    return (
        <section class="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen relative">
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

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Starter Plan - WordPress */}
                    <div class="bg-white p-8 rounded-3xl shadow-2xl text-left hover:shadow-3xl transition-all border-2 border-gray-200 hover:border-blue-400">
                        <div class="bg-gradient-to-r from-green-400 to-emerald-500 text-white py-2 px-4 rounded-full inline-block text-sm font-semibold mb-4">
                            STARTER PLAN
                        </div>
                        <h3 class="text-3xl font-bold mb-2 text-gray-800">WordPress Travel Lite</h3>
                        <p class="text-gray-600 mb-6">Perfect for travel startups and small agencies entering the online booking market.</p>
                        
                        <div class="text-4xl font-bold text-green-600 mb-6">₹1,50,000</div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-blue-600 mr-2">🖥️</span> CMS Platform
                            </h4>
                            <p class="text-sm text-gray-700 ml-6">WordPress with WP Travel Engine</p>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-blue-600 mr-2">✈️</span> Flight Booking
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Amadeus Self-Service API Integration</li>
                                <li>• Domestic & International Flights</li>
                                <li>• Real-time Fare Search</li>
                                <li>• Basic Booking Management</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-blue-600 mr-2">🏨</span> Hotel Booking
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Booking.com Affiliate API</li>
                                <li>• 500K+ Properties Worldwide</li>
                                <li>• Hotel Search & Filters</li>
                                <li>• Commission-based Model</li>
                            </ul>
                        </div>

                        <div class="mb-6">
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
                                <li>✔ SSL Certificate</li>
                                <li>✔ 1 Year Free Hosting</li>
                                <li>✔ 1 Year Free Domain</li>
                                <li>✔ 2 Months Free Support</li>
                                <li>✔ Admin Training (2 Sessions)</li>
                                <li>✔ 100 Page/Product Capacity</li>
                            </ul>
                        </div>

                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold transition-all shadow-lg"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Professional Plan - Drupal */}
                    <div class="bg-white p-8 rounded-3xl shadow-2xl text-left hover:shadow-3xl transition-all border-4 border-blue-500 relative">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full text-sm font-bold shadow-lg">
                            MOST POPULAR
                        </div>
                        <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full inline-block text-sm font-semibold mb-4 mt-4">
                            PROFESSIONAL PLAN
                        </div>
                        <h3 class="text-3xl font-bold mb-2 text-gray-800">Drupal Travel Pro</h3>
                        <p class="text-gray-600 mb-6">Advanced solution for established travel agencies requiring comprehensive booking capabilities.</p>
                        
                        <div class="text-4xl font-bold text-blue-600 mb-6">₹2,75,000</div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-blue-600 mr-2">🖥️</span> CMS Platform
                            </h4>
                            <p class="text-sm text-gray-700 ml-6">Drupal 10 with Custom Travel Module</p>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-blue-600 mr-2">✈️</span> Flight Booking
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Amadeus Enterprise API</li>
                                <li>• Sabre GDS Integration</li>
                                <li>• Multi-airline Comparison</li>
                                <li>• Fare Rules & Baggage Info</li>
                                <li>• Seat Selection</li>
                                <li>• PNR Management</li>
                                <li>• Ticketing & Cancellation</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-blue-600 mr-2">🏨</span> Hotel Booking
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Expedia Rapid API</li>
                                <li>• TBO Holidays API</li>
                                <li>• 1M+ Properties Worldwide</li>
                                <li>• Room Type Selection</li>
                                <li>• Meal Plans & Amenities</li>
                                <li>• Instant Confirmation</li>
                                <li>• Modification & Cancellation</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-blue-600 mr-2">🎫</span> Additional Services
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Holiday Package Builder</li>
                                <li>• Visa Processing Module</li>
                                <li>• Travel Insurance Integration</li>
                            </ul>
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
                                <li>✔ SSL Certificate & Security</li>
                                <li>✔ Firewall & DDoS Protection</li>
                                <li>✔ Daily Automated Backups</li>
                                <li>✔ 1 Year Free Premium Hosting</li>
                                <li>✔ 1 Year Free Domain</li>
                                <li>✔ 4 Months Free Support</li>
                                <li>✔ Comprehensive Admin Training</li>
                                <li>✔ Unlimited Pages/Products</li>
                            </ul>
                        </div>

                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all shadow-lg"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Enterprise Plan - Laravel */}
                    <div class="bg-white p-8 rounded-3xl shadow-2xl text-left hover:shadow-3xl transition-all border-2 border-gray-200 hover:border-purple-400">
                        <div class="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-full inline-block text-sm font-semibold mb-4">
                            ENTERPRISE PLAN
                        </div>
                        <h3 class="text-3xl font-bold mb-2 text-gray-800">Laravel Travel Enterprise</h3>
                        <p class="text-gray-600 mb-6">Complete white-label solution with custom API integration and unlimited scalability for large agencies.</p>
                        
                        <div class="text-4xl font-bold text-purple-600 mb-6">₹4,50,000</div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-purple-600 mr-2">🖥️</span> CMS Platform
                            </h4>
                            <p class="text-sm text-gray-700 ml-6">Custom Laravel 11 Framework with Vue.js Frontend</p>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-purple-600 mr-2">✈️</span> Flight Booking
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Amadeus Enterprise API</li>
                                <li>• Sabre GDS Integration</li>
                                <li>• Travelport GDS Integration</li>
                                <li>• Multi-GDS Aggregation</li>
                                <li>• Low Fare Calendar</li>
                                <li>• Multi-city & Round Trip</li>
                                <li>• Group Booking Management</li>
                                <li>• Ancillary Services</li>
                                <li>• API Rate Negotiation Support</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-purple-600 mr-2">🏨</span> Hotel Booking
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Expedia Rapid API</li>
                                <li>• TBO Holidays API</li>
                                <li>• Agoda Partner API</li>
                                <li>• HotelBeds API</li>
                                <li>• 2M+ Properties Worldwide</li>
                                <li>• Multi-supplier Aggregation</li>
                                <li>• Dynamic Pricing Engine</li>
                                <li>• Inventory Management</li>
                                <li>• Contract Rate Management</li>
                            </ul>
                        </div>

                        <div class="mb-4">
                            <h4 class="font-bold text-gray-800 mb-2 flex items-center">
                                <span class="text-purple-600 mr-2">🎫</span> Additional Services
                            </h4>
                            <ul class="text-sm text-gray-700 ml-6 space-y-1">
                                <li>• Bus Booking Integration</li>
                                <li>• Car Rental Services</li>
                                <li>• Holiday Package Builder</li>
                                <li>• Cruise Booking Module</li>
                                <li>• Activities & Experiences</li>
                                <li>• Visa Processing</li>
                                <li>• Travel Insurance</li>
                                <li>• Airport Transfer</li>
                            </ul>
                        </div>

                        <div class="mb-6">
                            <h4 class="font-bold text-gray-800 mb-2">Core Features</h4>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li>✔ 100% Custom Design & Development</li>
                                <li>✔ Progressive Web App (PWA)</li>
                                <li>✔ Native Mobile Apps (iOS & Android)</li>
                                <li>✔ Unlimited Payment Gateways</li>
                                <li>✔ Advanced AI-powered Search</li>
                                <li>✔ Multi-level Agent Hierarchy</li>
                                <li>✔ White-label Branding</li>
                                <li>✔ B2B, B2C, B2E Portals</li>
                                <li>✔ Advanced Analytics & BI Tools</li>
                                <li>✔ Custom Report Generation</li>
                                <li>✔ Automated Invoice System</li>
                                <li>✔ GST & Tax Management</li>
                                <li>✔ Wallet & Credit System</li>
                                <li>✔ Loyalty & Rewards Program</li>
                                <li>✔ CRM Integration</li>
                                <li>✔ Live Chat Support System</li>
                                <li>✔ Email Marketing Integration</li>
                                <li>✔ SMS Gateway Integration</li>
                                <li>✔ Multi-currency & Multi-language</li>
                                <li>✔ API Documentation Portal</li>
                                <li>✔ Microservices Architecture</li>
                                <li>✔ Load Balancing & CDN</li>
                                <li>✔ Enterprise Security Suite</li>
                                <li>✔ PCI DSS Compliance</li>
                                <li>✔ Real-time Backup & Disaster Recovery</li>
                                <li>✔ 2 Years Premium Cloud Hosting</li>
                                <li>✔ 2 Years Free Domain</li>
                                <li>✔ 6 Months Free Priority Support</li>
                                <li>✔ Dedicated Account Manager</li>
                                <li>✔ Unlimited Scaling Capacity</li>
                                <li>✔ Source Code Ownership</li>
                            </ul>
                        </div>

                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 rounded-xl font-semibold transition-all shadow-lg"
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div class="mt-16 bg-white p-8 rounded-3xl shadow-xl">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">What's Included in All Plans</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div>
                            <h3 class="font-bold text-lg text-blue-600 mb-3">🔒 Security & Compliance</h3>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>• SSL/TLS Encryption</li>
                                <li>• PCI DSS Ready Infrastructure</li>
                                <li>• GDPR Compliance Tools</li>
                                <li>• Regular Security Audits</li>
                                <li>• Malware Protection</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-blue-600 mb-3">📱 Design & UX</h3>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>• Mobile-First Design</li>
                                <li>• Cross-browser Compatible</li>
                                <li>• ADA Accessibility Standards</li>
                                <li>• Fast Loading Speed</li>
                                <li>• Intuitive User Interface</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-blue-600 mb-3">🛠️ Support & Maintenance</h3>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>• Regular Platform Updates</li>
                                <li>• Bug Fixes & Patches</li>
                                <li>• API Monitoring</li>
                                <li>• Performance Optimization</li>
                                <li>• Technical Documentation</li>
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
