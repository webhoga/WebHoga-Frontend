import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';

export const BeforeAfterSlider = component$(() => {
  const sliderPosition = useSignal(50);
  const isDragging = useSignal(false);
  const containerRef = useSignal<HTMLDivElement>();

  const handleMouseDown = $((e: MouseEvent) => {
    isDragging.value = true;
    e.preventDefault();
  });

  const handleMouseMove = $((e: MouseEvent) => {
    if (!isDragging.value || !containerRef.value) return;

    const rect = containerRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosition.value = percentage;
  });

  const handleMouseUp = $(() => {
    isDragging.value = false;
  });

  const handleClick = $((e: MouseEvent) => {
    if (!containerRef.value) return;

    const rect = containerRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosition.value = percentage;
  });

  // Touch events for mobile
  const handleTouchStart = $((e: TouchEvent) => {
    isDragging.value = true;
    e.preventDefault();
  });

  const handleTouchMove = $((e: TouchEvent) => {
    if (!isDragging.value || !containerRef.value) return;

    const rect = containerRef.value.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosition.value = percentage;
  });

  const handleTouchEnd = $(() => {
    isDragging.value = false;
  });

  // Handle dragging events
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track, cleanup }) => {
    track(() => isDragging.value);

    if (isDragging.value) {
      const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e);
      const mouseUpHandler = () => handleMouseUp();
      const touchMoveHandler = (e: TouchEvent) => handleTouchMove(e);
      const touchEndHandler = () => handleTouchEnd();

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
      document.addEventListener('touchmove', touchMoveHandler);
      document.addEventListener('touchend', touchEndHandler);

      cleanup(() => {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        document.removeEventListener('touchmove', touchMoveHandler);
        document.removeEventListener('touchend', touchEndHandler);
      });
    }
  });

  // Auto demo animation
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const timer = setTimeout(() => {
      let progress = 50;
      const demo = setInterval(() => {
        progress += 2;
        if (progress >= 80) {
          clearInterval(demo);
          setTimeout(() => {
            const backDemo = setInterval(() => {
              progress -= 2;
              if (progress <= 50) {
                clearInterval(backDemo);
              }
              sliderPosition.value = progress;
            }, 50);
          }, 1000);
        }
        sliderPosition.value = progress;
      }, 50);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div class="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen py-8">
      <div class="container mx-auto px-4">
        {/* Header */}
        <div class="text-center mb-8 animate-fade-in">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Website Transformation</h1>
          <p class="text-gray-600 text-lg">Drag the slider to see the dramatic improvement</p>
        </div>

        {/* Before/After Slider */}
        <div class="max-w-5xl mx-auto animate-fade-in">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">

            {/* Slider Container */}
            <div
              ref={containerRef}
              class="relative h-96 lg:h-[500px] overflow-hidden cursor-pointer select-none"
              onClick$={handleClick}
            >

              {/* Before Website */}
              <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                <div class="w-full h-full bg-yellow-100 relative overflow-hidden">
                  {/* Ugly header */}
                  <div class="bg-gradient-to-r from-orange-400 to-red-500 h-16 flex items-center px-4">
                    <h1 class="text-white font-bold text-lg animate-pulse">CHAI CENTER</h1>
                    <div class="ml-auto">
                      <div class="text-white text-sm bg-red-600 px-2 py-1 rounded animate-bounce">
                        Welcome to our site!
                      </div>
                    </div>
                  </div>

                  {/* Bad navigation */}
                  <div class="bg-gray-300 h-8 flex items-center px-4 text-xs gap-4 border-b-2 border-black">
                    <span class="underline cursor-pointer">Home</span>
                    <span class="underline cursor-pointer">About</span>
                    <span class="underline cursor-pointer">Menu</span>
                    <span class="underline cursor-pointer">Contact</span>
                  </div>

                  {/* Poor content layout */}
                  <div class="p-4">
                    <div class="border-2 border-black bg-yellow-200 p-3">
                      <h2 class="text-red-600 font-bold mb-2 text-sm">WELCOME TO CHAI CENTER!!!</h2>
                      <p class="text-black text-xs leading-tight mb-2">
                        We have the BEST chai in town!!! Come visit us for amazing tea experience.
                        Our chai is made with love and passion. We serve hot tea all day long.
                      </p>
                      <div class="text-red-600 font-bold text-xs animate-pulse">
                        SPECIAL OFFER: 10% OFF!!!
                      </div>

                      <div class="flex justify-center mt-4">
                        <div class="bg-yellow-600 w-16 h-16 rounded border-2 border-black flex items-center justify-center">
                          <span class="text-white text-lg">☕</span>
                        </div>
                      </div>
                      <p class="text-xs text-center font-bold mt-2">CHAI CUP</p>
                    </div>
                  </div>

                  {/* Visitor counter */}
                  <div class="absolute bottom-0 left-0 right-0 text-xs text-center bg-gray-200 p-1 border border-black">
                    Visitors: 000042 | Last updated: 2010
                  </div>
                </div>

                {/* Before Label */}
                <div class="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  😬 BEFORE
                </div>
              </div>

              {/* After Website */}
              <div
                class="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100"
                style={{ clipPath: `inset(0 ${100 - sliderPosition.value}% 0 0)` }}
              >
                <div class="w-full h-full relative overflow-hidden">
                  {/* Modern header */}
                  <div class="bg-white/90 backdrop-blur-sm h-16 flex items-center px-6 shadow-sm">
                    <h1 class="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      Chai Center
                    </h1>
                    <nav class="ml-auto flex gap-6 text-sm font-medium text-gray-700">
                      <span class="hover:text-amber-600 cursor-pointer transition-colors">Home</span>
                      <span class="hover:text-amber-600 cursor-pointer transition-colors">Menu</span>
                      <span class="hover:text-amber-600 cursor-pointer transition-colors">About</span>
                      <span class="hover:text-amber-600 cursor-pointer transition-colors">Contact</span>
                    </nav>
                  </div>

                  {/* Hero section */}
                  <div class="px-6 py-8 text-center">
                    <h2 class="text-3xl font-bold text-gray-800 mb-3">
                      Authentic Chai Experience
                    </h2>
                    <p class="text-gray-600 mb-4 max-w-md mx-auto leading-relaxed">
                      Discover the perfect blend of traditional spices and premium tea leaves,
                      crafted with passion in every cup.
                    </p>

                    {/* Modern chai illustration */}
                    <div class="flex justify-center mb-4">
                      <div class="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center">
                        <span class="text-white text-3xl">☕</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button class="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Order Now
                    </button>

                    {/* Features */}
                    <div class="flex justify-center gap-4 mt-6 text-xs">
                      <div class="bg-white/70 px-3 py-1 rounded-full backdrop-blur-sm">🌿 Organic</div>
                      <div class="bg-white/70 px-3 py-1 rounded-full backdrop-blur-sm">🚚 Fast Delivery</div>
                      <div class="bg-white/70 px-3 py-1 rounded-full backdrop-blur-sm">⭐ 4.9 Rating</div>
                    </div>
                  </div>
                </div>

                {/* After Label */}
                <div class="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  🚀 AFTER
                </div>
              </div>

              {/* Slider Handle */}
              <div
                class="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20 pointer-events-none"
                style={{ left: `${sliderPosition.value}%`, transform: 'translateX(-50%)' }}
              >
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border-4 border-orange-500 flex items-center justify-center cursor-ew-resize pointer-events-auto"
                  onMouseDown$={handleMouseDown}
                  onTouchStart$={handleTouchStart}
                >
                  <div class="flex gap-1">
                    <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
                    <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Improvement Badges */}
              <div class="absolute bottom-6 left-6 flex flex-wrap gap-2">
                <div class="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  +300% Speed
                </div>
                <div class="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  Mobile Optimized
                </div>
                <div class="bg-purple-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  SEO Ready
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div class="bg-gradient-to-r from-slate-50 to-blue-50 p-6">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-red-500">2.3s</div>
                  <div class="text-xs text-slate-600">Old Load Time</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-green-500">0.8s</div>
                  <div class="text-xs text-slate-600">New Load Time</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-blue-500">+250%</div>
                  <div class="text-xs text-slate-600">More Conversions</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-orange-500">100%</div>
                  <div class="text-xs text-slate-600">Mobile Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        `}
      </style>
    </div>
  );
});

export default BeforeAfterSlider;