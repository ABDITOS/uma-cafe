"use client";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useMemo } from "react";
import { Leaf, Heart, Coffee, MapPin, Clock, Phone, Plus, Minus, Send, Search, X } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import { images, alts, formatPrice, weRecommend, popularDrinks, siteCopy, features, storyFeatures, contactInfo } from "@/data/content";
import { menuItems, MenuItem } from "@/data/menu";

export default function Home() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const categories = ["All", "Main Dishes", "Extras & Sides", "Dessert Treats", "Coffee & Drinks"];
  const filters = ["Chicken", "Beef", "Noodles & Rice", "Burgers", "Sweet", "Vegetarian-friendly (coming soon)"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const updateCart = (id: string, delta: number) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find(m => m.id === id);
    if (item && item.price) return sum + (item.price * qty);
    return sum;
  }, 0);
  
  const cartCount = Object.values(cart).reduce((a,b) => a + b, 0);

  const handleOrder = () => {
    if (cartCount === 0) {
      window.open('https://wa.me/6281234567890', '_blank');
      return;
    }
    let text = "Hi Uma Cafe, I would like to order:\n\n";
    Object.entries(cart).forEach(([id, qty]) => {
      const item = menuItems.find(m => m.id === id);
      if (item) {
        text += `- ${qty}x ${item.name} (${item.price ? item.price + 'K' : 'Price TBD'})\n`;
      }
    });
    if (cartTotal > 0) text += `\nTotal: Rp ${cartTotal}.000\n`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Filter Logic
  const filteredMenu = useMemo(() => {
    return menuItems.filter(item => {
      if (activeTab !== "All" && item.category !== activeTab) return false;
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) && !item.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      
      if (activeFilter) {
        const text = (item.name + " " + item.group + " " + (item.tags?.join(" ") || "")).toLowerCase();
        if (activeFilter === "Vegetarian-friendly (coming soon)") return false;
        if (activeFilter === "Sweet" && !text.includes("sweet") && item.category !== "Dessert Treats") return false;
        if (activeFilter === "Burgers" && !text.includes("burger")) return false;
        if (activeFilter === "Noodles & Rice" && !text.includes("noodle") && !text.includes("rice") && !text.includes("kwetiau")) return false;
        if (activeFilter === "Chicken" && !text.includes("chicken") && !text.includes("satay")) return false;
        if (activeFilter === "Beef" && !text.includes("beef")) return false;
      }
      return true;
    });
  }, [activeTab, searchQuery, activeFilter]);

  const groupedMenu = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {};
    filteredMenu.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredMenu]);

  return (
    <main className="min-h-screen w-full relative">

      {/* STICKY SOCIAL BAR */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 pl-4">
        <a href="#" aria-label="Instagram" className="group flex items-center h-12 bg-white/90 backdrop-blur-md text-green-deep rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-sage-200 hover:bg-green-deep hover:text-white hover:border-green-deep transition-all duration-300 overflow-hidden w-12 hover:w-[170px]">
          <div className="w-12 h-12 shrink-0 flex items-center justify-center">
            <FaInstagram size={20} />
          </div>
          <span className="font-bold text-sm whitespace-nowrap overflow-hidden pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            @umaluwih
          </span>
        </a>
        
        <a href="#" aria-label="Facebook" className="group flex items-center h-12 bg-white/90 backdrop-blur-md text-green-deep rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-sage-200 hover:bg-green-deep hover:text-white hover:border-green-deep transition-all duration-300 overflow-hidden w-12 hover:w-[190px]">
          <div className="w-12 h-12 shrink-0 flex items-center justify-center">
            <FaFacebook size={20} />
          </div>
          <span className="font-bold text-sm whitespace-nowrap overflow-hidden pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Uma Luwih Cafe
          </span>
        </a>

        <a href="https://wa.me/6281234567890" target="_blank" aria-label="WhatsApp" className="group flex items-center h-12 bg-white/90 backdrop-blur-md text-green-deep rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-sage-200 hover:bg-green-deep hover:text-white hover:border-green-deep transition-all duration-300 overflow-hidden w-12 hover:w-[210px]">
          <div className="w-12 h-12 shrink-0 flex items-center justify-center">
            <Phone size={20} />
          </div>
          <span className="font-bold text-sm whitespace-nowrap overflow-hidden pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            +62 812-3456-7890
          </span>
        </a>
      </div>

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-50 relative bg-cream">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-deep rounded-full flex items-center justify-center text-white">
            <Leaf size={20} />
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-xl leading-none text-text-primary">{siteCopy.name}</h1>
            <span className="text-xs text-text-secondary">specialty coffee</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text-primary">
          <button onClick={() => scrollTo('menu')} className="hover:text-green-deep transition">Menu</button>
          <button onClick={() => scrollTo('story')} className="hover:text-green-deep transition">Our Story</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-green-deep transition">Contact</button>
        </nav>
        <button onClick={() => scrollTo('contact')} className="btn-terra px-6 py-2.5 rounded-full text-sm font-bold">
          Order Now
        </button>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-lg z-10">
          <h2 className="font-heading font-extrabold text-5xl md:text-6xl text-text-primary leading-[1.1] tracking-tight mb-6">
            {siteCopy.heroTitle}
          </h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            {siteCopy.heroSubtitle}
          </p>
          <button onClick={() => scrollTo('menu')} className="btn-terra px-8 py-3.5 rounded-full text-base font-bold mb-12">
            View Menu
          </button>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sage-200 flex items-center justify-center text-green-deep"><Leaf size={16} /></div>
              <span className="text-xs font-semibold text-text-primary leading-tight">Specialty<br/>coffee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sage-200 flex items-center justify-center text-green-deep"><Heart size={16} /></div>
              <span className="text-xs font-semibold text-text-primary leading-tight">Made<br/>with love</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sage-200 flex items-center justify-center text-green-deep"><Coffee size={16} /></div>
              <span className="text-xs font-semibold text-text-primary leading-tight">Everyday<br/>cozy</span>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full z-10">
          <div className="absolute inset-0 bg-sage-200 mask-organic transform scale-105 translate-x-4 translate-y-4 -z-10"></div>
          <SmartImage 
            src={images.barExterior} 
            alt={alts.barExterior} 
            priority={true} 
            ratio="auto" 
            className="w-full h-full mask-organic shadow-2xl" 
          />
          <div className="absolute -bottom-4 right-4 md:bottom-8 md:-right-4 bg-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold text-sm text-text-primary z-20">
            <Leaf className="text-green-deep" size={18} />
            <span>{siteCopy.googleRating} Google Rating</span>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="w-full bg-sage-100 relative -mt-32 pt-32 z-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto absolute top-0 left-0 -translate-y-full drop-shadow-sm" preserveAspectRatio="none">
          <path d="M0,60 C320,120 420,0 740,40 C1060,80 1200,20 1440,60 L1440,120 L0,120 Z" fill="var(--color-sage-100)" />
        </svg>

        {/* FEATURES ROW */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-deep shadow-sm">
                {i === 0 ? <Leaf size={24} /> : i === 1 ? <Heart size={24} /> : i === 2 ? <MapPin size={24} /> : <Coffee size={24} />}
              </div>
              <h4 className="font-heading font-bold text-lg text-text-primary">{f.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* POPULAR DRINKS */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-sage-200 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center shadow-sm">
            <div className="lg:w-1/3 space-y-4">
              <h3 className="font-heading font-extrabold text-3xl text-green-dark">Popular Drinks</h3>
              <p className="text-green-dark/80 text-sm leading-relaxed mb-6">Classic and signature drinks for every taste, served fresh.</p>
              <button onClick={() => scrollTo('menu')} className="bg-cream text-text-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-white transition">
                See Full Menu
              </button>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {popularDrinks.map((drink, i) => (
                <div key={i} className={`flex flex-col items-center text-center ${i !== 2 ? 'md:border-r border-green-dark/10' : ''} px-4`}>
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-sage-100 mb-4 relative">
                    <SmartImage src={drink.image} alt={drink.imageAlt} ratio="1/1" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-green-dark mb-1">{drink.name}</h4>
                  <p className="text-green-dark/70 text-xs mb-2">{drink.desc}</p>
                  <span className="font-bold text-sm text-green-dark">{formatPrice(drink.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* WE RECOMMEND */}
      <section className="bg-cream max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-divider"></div>
          <Heart size={16} className="text-text-tertiary" />
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-text-primary px-2">We Recommend</h3>
          <Heart size={16} className="text-text-tertiary" />
          <div className="h-px w-12 bg-divider"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {weRecommend.map((item, i) => (
            <div key={i} className="bg-white rounded-[24px] p-4 flex items-center gap-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <SmartImage src={item.image || ""} alt={item.imageAlt} ratio="1/1" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-base text-text-primary leading-tight mb-1">{item.name}</h4>
                <p className="text-text-secondary text-xs mb-2">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-text-primary">{formatPrice(item.price)}</span>
                  <button onClick={() => scrollTo('menu')} className="w-8 h-8 rounded-full bg-sage-200 text-green-deep flex items-center justify-center hover:bg-green-deep hover:text-white transition">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODERN ONLINE MENU */}
      <section id="menu" className="bg-sage-100 py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Menu Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-green-deep/30"></div>
              <h3 className="font-heading font-extrabold text-3xl text-green-dark">Online Menu</h3>
              <div className="h-px w-8 bg-green-deep/30"></div>
            </div>
            <div className="flex gap-4">
               <button onClick={handleOrder} className="bg-green-deep text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90">
                 <Send size={16}/> Order via WhatsApp
               </button>
            </div>
          </div>

          {/* Sticky Tab Bar */}
          <div className="sticky top-0 z-40 bg-sage-100/90 backdrop-blur-md pt-4 pb-4 -mx-6 px-6 overflow-x-auto whitespace-nowrap hide-scrollbar flex gap-2 shadow-sm mb-6 border-b border-sage-200">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition flex-shrink-0 ${activeTab === cat ? 'bg-green-deep text-white shadow-md' : 'bg-white text-green-dark hover:bg-sage-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input 
                type="text" 
                placeholder="Search menu..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-sage-200 focus:outline-none focus:border-green-deep text-sm shadow-sm placeholder:text-text-tertiary"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary">
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
              {filters.map(f => (
                <button 
                  key={f} 
                  disabled={f.includes("coming soon")}
                  onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition border ${activeFilter === f ? 'bg-sage-300 border-sage-400 text-green-dark' : 'bg-white border-sage-200 text-text-secondary hover:bg-sage-50'} disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          {Object.keys(groupedMenu).length === 0 ? (
            <div className="py-20 text-center">
              <Coffee size={48} className="mx-auto text-sage-300 mb-4" />
              <h4 className="font-heading font-bold text-xl text-green-dark mb-2">No items found</h4>
              <p className="text-sm text-text-secondary mb-6">We couldn't find anything matching your filters.</p>
              <button onClick={() => { setSearchQuery(""); setActiveFilter(null); setActiveTab("All"); }} className="btn-terra px-6 py-2 rounded-full text-sm font-bold">Clear Filters</button>
            </div>
          ) : (
            <div className="space-y-16">
              {categories.map(cat => {
                const items = groupedMenu[cat];
                if (!items || items.length === 0) return null;
                
                return (
                  <div key={cat}>
                    <div className="flex items-center gap-4 mb-6">
                      <h4 className="font-heading font-extrabold text-2xl text-green-dark">{cat}</h4>
                      <span className="bg-sage-200 text-green-deep px-2.5 py-0.5 rounded-full text-xs font-bold">{items.length}</span>
                      <div className="h-px flex-1 bg-sage-300 ml-4"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map(item => (
                        <div key={item.id} className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition flex flex-col h-full border border-sage-100">
                          <SmartImage 
                            src={item.image || ""} 
                            alt={item.name} 
                            ratio="4/3" 
                            fallbackName={item.name}
                            fallbackIcon={item.category.includes('Dessert') ? 'sweet' : item.category.includes('Drinks') ? 'cup' : item.group.includes('Burger') ? 'burger' : 'bowl'}
                          />
                          <div className="p-5 flex flex-col flex-1">
                            <div className="flex gap-2 mb-3 flex-wrap">
                              {item.tags?.map(t => (
                                <span key={t} className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${t === 'Spicy' ? 'bg-red-100 text-red-700' : 'bg-sage-200 text-green-deep'}`}>
                                  {t}
                                </span>
                              ))}
                            </div>
                            <h5 className="font-heading font-bold text-lg text-text-primary leading-tight mb-2">{item.name}</h5>
                            <p className="text-text-secondary text-sm mb-4 flex-1 leading-relaxed">{item.description}</p>
                            
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-divider">
                              <span className="font-bold text-green-dark bg-sage-100 px-3 py-1 rounded-full text-sm">
                                {formatPrice(item.price)}
                              </span>
                              
                              {cart[item.id] ? (
                                <div className="flex items-center gap-3 bg-sage-100 rounded-full p-1">
                                  <button onClick={() => updateCart(item.id, -1)} className="w-7 h-7 rounded-full bg-white text-green-deep flex items-center justify-center shadow-sm hover:bg-green-deep hover:text-white transition">
                                    <Minus size={14} />
                                  </button>
                                  <span className="font-bold text-sm w-4 text-center text-green-dark">{cart[item.id]}</span>
                                  <button onClick={() => updateCart(item.id, 1)} className="w-7 h-7 rounded-full bg-green-deep text-white flex items-center justify-center shadow-sm hover:bg-green-dark transition">
                                    <Plus size={14} />
                                  </button>
                                </div>
                              ) : (
                                <button onClick={() => updateCart(item.id, 1)} className="w-9 h-9 rounded-full bg-sage-200 text-green-deep flex items-center justify-center shadow-sm hover:bg-green-deep hover:text-white transition">
                                  <Plus size={18} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          <p className="text-center text-sm text-text-tertiary mt-16 italic">Ask our friendly service team for seasonal specials. Prices in Indonesian Rupiah.</p>
        </div>
      </section>

      {/* OUR STORY BANNER */}
      <section id="story" className="max-w-[1400px] mx-auto py-12 px-4 md:px-6">
        <div className="bg-sage-200 rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-sm relative">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-green-dark mb-6 leading-tight">
              A place we're proud of
            </h3>
            <p className="text-green-dark/80 text-base leading-relaxed mb-8 max-w-md">
              {siteCopy.storyBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              {storyFeatures.map((feat, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start gap-2">
                  <div className="w-10 h-10 rounded-full border border-green-dark/20 flex items-center justify-center text-green-dark">
                    <Leaf size={18} />
                  </div>
                  <span className="text-xs font-semibold text-green-dark text-center sm:text-left">{feat}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 h-[300px] md:h-auto relative mask-banner">
            <SmartImage src={images.sunsetMountAgung} alt={alts.sunsetMountAgung} className="w-full h-full" ratio="auto" />
          </div>
        </div>
      </section>

      {/* CONTACT & CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-cream-dark/50 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row gap-12 border border-divider">
          
          <div className="md:w-1/2 space-y-6 md:pr-12 md:border-r border-divider">
            <h3 className="font-heading font-extrabold text-2xl text-text-primary mb-8">We're waiting for you!</h3>
            <div className="flex gap-4 items-start">
              <MapPin size={20} className="text-green-deep shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-text-primary">{contactInfo.address}</p>
            </div>
            <div className="flex gap-4 items-start">
              <Clock size={20} className="text-green-deep shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-text-primary">{contactInfo.hours}</p>
            </div>
            <div className="flex gap-4 items-start">
              <Phone size={20} className="text-green-deep shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-text-primary">{contactInfo.phone}</p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="font-heading font-extrabold text-2xl text-text-primary mb-4">Book a table or order ahead</h3>
            <p className="text-text-secondary text-sm mb-6">Skip the wait! Message us on WhatsApp to reserve your favorite spot facing the terraces, or to prepare your order for pickup.</p>
            <div className="flex gap-3">
              <button onClick={() => window.open('https://wa.me/6281234567890', '_blank')} className="btn-terra px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                <Send size={16} /> Contact WhatsApp
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sage-100 py-8 px-6 mt-10 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-green-dark/70">
          <div className="flex gap-4">
            <Leaf size={18} className="cursor-pointer hover:text-green-dark" />
            <Heart size={18} className="cursor-pointer hover:text-green-dark" />
            <MapPin size={18} className="cursor-pointer hover:text-green-dark" />
          </div>
          <p>© {siteCopy.name}, 2026</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-dark">Privacy Policy</a>
            <a href="#" className="hover:text-green-dark">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FLOATING MOBILE CART */}
      {cartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 md:hidden bg-green-deep text-white p-4 rounded-2xl shadow-[0_8px_32px_rgba(58,107,74,0.4)] flex items-center justify-between z-50 animate-fade-in-up border border-green-deep/20 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="font-bold text-sm">{cartCount} items</span>
            <span className="text-xs text-white/80">Rp {cartTotal}.000</span>
          </div>
          <button onClick={handleOrder} className="bg-white text-green-deep px-5 py-2 rounded-full text-sm font-bold shadow-sm active:scale-95 transition-transform">
            View order
          </button>
        </div>
      )}

    </main>
  );
}
