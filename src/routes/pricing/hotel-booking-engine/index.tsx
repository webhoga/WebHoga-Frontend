import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
    const nav = useNavigate();

    return (
        <section class="py-20 px-6 bg-white min-h-screen relative">
            {/* Close Button */}
            <button
                onClick$={() => nav('/')}
                class="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors text-3xl font-bold"
                aria-label="Close and return to homepage"
            >
                ×
            </button>

            <div class="max-w-6xl mx-auto text-center space-y-10">
                <h1 class="text-5xl font-bold text-gray-900">Hotel Booking Engine Pricing</h1>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Build a powerful hotel booking website with integrated reservation systems—designed for seamless guest experiences, secure bookings, and efficient property management.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Zoho Sites Hotel Express Plan */}
                    <div class="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-left">
                        <h3 class="text-2xl font-bold mb-4 text-gray-800">Zoho Sites Hotel Express</h3>
                        <p class="text-gray-600 mb-4">Perfect for small hotels and guesthouses starting their online booking journey.</p>
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li>✔ Zoho Sites Customization</li>
                            <li>✔ Room Listings Page</li>
                            <li>✔ Booking Form Integration</li>
                            <li>✔ Basic SEO Setup</li>
                            <li>✔ Mobile-Friendly Design</li>
                            <li>✔ Google Maps Integration</li>
                            <li>✔ Social Media Links</li>
                            <li>✔ 1 Year Free Hosting & Domain</li>
                            <li>✔ 1 Month Free Maintenance & Support</li>
                            <li>✔ Website Security</li>
                            <li>✔ Firewall Protection</li>
                            <li>✔ Regular Security Updates</li>
                            <li>✔ Backup & Restore Features</li>
                            <li>✔ Custom User Roles & Permissions</li>
                            <li>✔ 200 Photo Gallery</li>
                        </ul>
                        <div class="text-3xl font-bold text-orange-600 mb-4">₹75,000</div>
                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Drupal Hotel Pro Plan */}
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
                        <h3 class="text-2xl font-bold mb-4 text-gray-800">Drupal Hotel Pro</h3>
                        <p class="text-gray-600 mb-4">Advanced solution for hotels requiring comprehensive booking management and custom features.</p>
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li>✔ Custom Drupal Theme Development</li>
                            <li>✔ Room Management System</li>
                            <li>✔ Integrated Booking Engine</li>
                            <li>✔ SEO Optimization</li>
                            <li>✔ Mobile-Responsive Design</li>
                            <li>✔ Content Management System (CMS)</li>
                            <li>✔ Google Analytics Integration</li>
                            <li>✔ Social Media Integration</li>
                            <li>✔ 1 Year Free Hosting & Domain</li>
                            <li>✔ 1 Month Free Maintenance & Support</li>
                            <li>✔ Website Security</li>
                            <li>✔ Firewall Protection</li>
                            <li>✔ Regular Security Updates</li>
                            <li>✔ Backup & Restore Features</li>
                            <li>✔ Custom User Access Levels</li>
                        </ul>
                        <div class="text-3xl font-bold text-cyan-700 mb-4">₹1,25,000</div>
                        <button
                            onClick$={() => nav("/contact")}
                            class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
                        >
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
});