import { component$ } from '@builder.io/qwik';

export const AdsCta = component$(() => {
  return (
    <section class="bg-red-600 text-white py-20 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Explore Our Advertising Services</h2>
        <p class="mb-6">Smart strategies for Google, Meta, LinkedIn & more — crafted for results.</p>
        <a
          href="https://ads.webhoga.com"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white text-red-600 font-semibold px-8 py-3 rounded-xl hover:bg-red-100 transition"
        >
          Visit Ads Portal
        </a>
      </div>
    </section>
  );
});