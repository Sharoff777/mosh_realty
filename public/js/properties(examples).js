// ═══════════════════════════════════════
// MOSH REALTY — properties.js
// All property pages live at ROOT level (same as index.html)
// URL: /property-colombo-7-penthouse.html
// ═══════════════════════════════════════

const PROPERTIES = [
  {
    id: 'colombo-7-penthouse',
    status: 'For Sale',
    badgeClass: 'badge-sale',
    price: 'LKR 185 Mn',
    name: 'Colombo 7 Sky Penthouse',
    location: 'Cinnamon Gardens, Colombo 7',
    beds: 4, baths: 4, sqft: '6,200',
    type: 'Penthouse',
    featured: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    description: 'Perched on the 32nd floor of one of Colombo 7\'s most prestigious towers, this sky penthouse redefines elevated living. Wraparound panoramic views of the Indian Ocean and city skyline frame a residence of uncompromising quality — double-height ceilings, Italian marble floors, and a private rooftop terrace with plunge pool.',
    features: ['Private Rooftop Terrace', 'Plunge Pool', 'Italian Marble Flooring', 'Smart Home System', 'Panoramic Ocean View', '3-Car Parking', 'Concierge Service', 'Gym & Spa Access'],
    whatsapp: '94771234567',
  },
  {
    id: 'mount-lavinia-villa',
    status: 'For Sale',
    badgeClass: 'badge-sale',
    price: 'LKR 245 Mn',
    name: 'Mount Lavinia Beachfront Villa',
    location: 'Marine Drive, Mount Lavinia',
    beds: 5, baths: 5, sqft: '8,400',
    type: 'Villa',
    featured: true,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: 'A rare beachfront estate stretching across two lots on Colombo\'s most coveted coastal strip. Five-bedroom villa with private beach access, infinity pool, and a fully equipped guesthouse wing. Designed by a leading Sri Lankan architect.',
    features: ['Private Beach Access', 'Infinity Pool', 'Guest House', 'Home Theater', 'Wine Cellar', 'Chef\'s Kitchen', 'Landscaped Gardens', '4-Car Garage'],
    whatsapp: '94771234567',
  },
  {
    id: 'battaramulla-residence',
    status: 'For Sale',
    badgeClass: 'badge-sale',
    price: 'LKR 95 Mn',
    name: 'Battaramulla Modern Residence',
    location: 'Pelawatta, Battaramulla',
    beds: 4, baths: 3, sqft: '3,800',
    type: 'House',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
    ],
    description: 'Contemporary architecture meets thoughtful interior design in this four-bedroom family residence. Open-plan living connects seamlessly to a landscaped garden, while the upper level master suite includes a private study and walk-in wardrobe.',
    features: ['Open Plan Living', 'Landscaped Garden', 'Study Room', 'Walk-in Wardrobe', 'Double Garage', 'Solar Panels', 'Maid\'s Quarters', 'CCTV System'],
    whatsapp: '94771234567',
  },
  {
    id: 'rajagiriya-apartment',
    status: 'For Rent',
    badgeClass: 'badge-rent',
    price: 'LKR 220K / mo',
    name: 'Rajagiriya Luxury Apartment',
    location: 'Rajagiriya, Western Province',
    beds: 3, baths: 2, sqft: '2,100',
    type: 'Apartment',
    featured: false,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&q=80',
    ],
    description: 'A premium fully-furnished apartment in the heart of Rajagiriya with city views. Modern open kitchen, three well-appointed bedrooms, and access to building amenities including rooftop pool and fitness center.',
    features: ['Fully Furnished', 'Rooftop Pool', 'Fitness Center', 'City Views', 'Backup Generator', 'Covered Parking', 'High-speed Internet', '24hr Security'],
    whatsapp: '94771234567',
  },
  {
    id: 'dehiwala-land',
    status: 'Land',
    badgeClass: 'badge-land',
    price: 'LKR 12.5 Mn / perch',
    name: 'Dehiwala Prime Coastal Land',
    location: 'Marine Drive, Dehiwala',
    beds: null, baths: null, sqft: '40 Perches',
    type: 'Land',
    featured: false,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1200&q=80',
    ],
    description: 'A rare 40-perch land parcel fronting Marine Drive with unobstructed ocean views. Approved for residential or boutique hospitality development. Cleared and ready to build with all utilities at the boundary.',
    features: ['Ocean Views', 'Corner Plot', 'All Utilities', 'Development Approval', 'Clear Title', 'Paved Road Access', 'Low-rise Zone', 'Fenced & Secured'],
    whatsapp: '94771234567',
  },
  {
    id: 'colombo-10-apartment',
    status: 'For Rent',
    badgeClass: 'badge-rent',
    price: 'LKR 185,000/ mon',
    name: 'Colombo 10 Luxury Penthouse',
    location: '7/2 Kepton Road, Colombo 10',
    beds: 3, baths: 2, sqft: '1,200',
    type: 'Apartment',
    featured: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    description: 'Perched on the 32nd floor of one of Colombo 7\'s most prestigious towers, this sky penthouse redefines elevated living. Wraparound panoramic views of the Indian Ocean and city skyline frame a residence of uncompromising quality — double-height ceilings, Italian marble floors, and a private rooftop terrace with plunge pool.',
    features: ['Private Rooftop Terrace', 'Plunge Pool', 'Italian Marble Flooring', 'Smart Home System', 'Panoramic Ocean View', '3-Car Parking', 'Concierge Service', 'Gym & Spa Access'],
    whatsapp: '94771234567',
  }
];

window.PROPERTIES = PROPERTIES;

// Helper: render a property card
function renderPropCard(p, rootPrefix = '') {
  const specs = p.beds
    ? `<div class="prop-spec"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>${p.beds} Beds</div>
       <div class="prop-spec"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12V4a1 1 0 011-1h5a1 1 0 011 1v3M2 20h20M20 20v-8a2 2 0 00-2-2h-6"/></svg>${p.baths} Baths</div>
       <div class="prop-spec"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>${p.sqft} sqft</div>`
    : `<div class="prop-spec"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>${p.sqft}</div>`;

  return `<a href="${rootPrefix}property-${p.id}.html" class="prop-card">
    <div class="prop-card-img">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <span class="prop-badge ${p.badgeClass}">${p.status}</span>
    </div>
    <div class="prop-card-body">
      <div class="prop-price">${p.price}</div>
      <div class="prop-name">${p.name}</div>
      <div class="prop-loc">
        <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${p.location}
      </div>
      <div class="prop-divider"></div>
      <div class="prop-specs">${specs}</div>
    </div>
  </a>`;
}
window.renderPropCard = renderPropCard;
