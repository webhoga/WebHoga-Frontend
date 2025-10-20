import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import WebHogaLogo from "./WebHoga Logo.png";

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const isScrolled = useSignal(false);

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  const closeMenu = $(() => {
    isMenuOpen.value = false;
  });

  useVisibleTask$(() => {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      class={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled.value
          ? "border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div class="bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm text-white">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <span>📞</span>
              <span class="font-medium">+91 9061156535</span>
            </div>
            <div class="hidden items-center gap-2 md:flex">
              <span>✉️</span>
              <span>contact@webhoga.com</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="hidden items-center gap-2 md:flex">
              <span class="h-2 w-2 animate-pulse rounded-full bg-green-300"></span>
              <span class="text-sm">Business Consultation Available</span>
            </div>
            <div class="flex items-center gap-2">
              <a
                href="https://www.youtube.com/@WebHoga"
                class="transition-colors hover:text-orange-200"
              >
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/WebHoga/61576908121524/"
                class="transition-colors hover:text-orange-200"
              >
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://in.pinterest.com/webhogaindia/"
                class="transition-colors hover:text-orange-200"
              >
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.135-1.507-.703-2.448-2.909-2.448-4.68 0-3.123 2.498-8.766 8.998-8.766C17.92 2.587 21.17 6.024 21.17 10.532c0 5.405-3.409 9.747-8.148 9.747-1.587 0-3.081-.828-3.593-1.814l-.978 3.726c-.353 1.372-1.31 3.086-1.95 4.144 1.462.213 2.99.32 4.546.32 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          {/* Logo */}
          <div class="flex items-center">
            <img src={WebHogaLogo}
              alt="WebHoga Logo"
              width="120"
              height="48"
              class="h-12 w-auto"
              onError$={(e) => {
                console.error("Logo failed to load:", e);
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div class="hidden items-center gap-8 lg:flex">
            <a
              href="/"
              class="group relative font-medium text-slate-700 transition-colors hover:text-orange-600"
            >
              Home
              <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div class="group relative">
              <a
                href="/services"
                class="flex items-center gap-1 font-medium text-slate-700 transition-colors hover:text-orange-600"
              >
                Services
              </a>
            </div>

            {/* BizAssist */}
            <a
              href="/bizassist"
              class="group relative font-medium text-slate-700 transition-colors hover:text-emerald-600"
            >
              <span class="flex items-center gap-1">
                <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text font-semibold text-transparent">
                  BizAssist
                </span>
              </span>
              <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Ads */}
            <a
              href="https://ads.webhoga.com"
              class="group relative font-medium text-slate-700 transition-colors hover:text-red-600"
            >
              <span class="flex items-center gap-1">
                <span class="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text font-semibold text-transparent">
                  Ad Services
                </span>
              </span>
              <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-rose-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="/contact"
              class="group relative font-medium text-slate-700 transition-colors hover:text-orange-600"
            >
              Contact
              <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="https://blog.webhoga.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative font-medium text-slate-700 transition-colors hover:text-orange-600"
            >
              Blog
              <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div class="flex items-center gap-4">
            <a
              href="/contact"
              class="group relative hidden transform overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white no-underline shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:block"
            >
              <span class="relative z-10 flex items-center gap-2">
                Get Quote
                <svg
                  class="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick$={toggleMenu}
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg lg:hidden"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen.value ? (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          class={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen.value ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div class="space-y-1 pt-4 pb-2">
            <a
              href="#home"
              onClick$={closeMenu}
              class="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
            >
              Home
            </a>
            <a
              href="/services"
              onClick$={closeMenu}
              class="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
            >
              Services
            </a>

            <a
              href="/bizassist"
              onClick$={closeMenu}
              class="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
            >
              <span class="flex items-center gap-2">
                <span class="font-semibold text-emerald-600">BizAssist</span>
              </span>
            </a>

            <a
              href="https://ads.webhoga.com"
              onClick$={closeMenu}
              class="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <span class="flex items-center gap-2">
                <span class="font-semibold text-red-600">Ad Services</span>
              </span>
            </a>

            <a
              href="#contact"
              onClick$={closeMenu}
              class="block rounded-lg px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
            >
              Contact
            </a>
            <div class="pt-2">
              <a
                href="/contact"
                class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white no-underline shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-amber-600"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});
