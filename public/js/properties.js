// ═══════════════════════════════════════
// MOSH REALTY — properties.js
// All property pages live at ROOT level (same as index.html)
// URL: /property-colombo-7-penthouse.html
// ═══════════════════════════════════════

const PROPERTIES = [
  {
    id: '606-address',
    status: 'For Sale',
    badgeClass: 'badge-sale',
    price: 'LKR 220 Mn',
    name: '606 The Address',
    location: 'Colombo 07',
    beds: 3, baths: 3, sqft: '2,425',
    type: 'Apartment',
    featured: true,
    image: './Images/606-address/1.jpeg',
    gallery: [
      './Images/606-address/2.jpeg',
      './Images/606-address/3.jpeg',
      './Images/606-address/4.jpeg',
      './Images/606-address/5.jpeg',
      './Images/606-address/6.jpeg',
      './Images/606-address/7.jpeg',
      './Images/606-address/8.jpeg',
      
    ],
    description: 'A spacious 2,425 sq. ft. luxury 3-bedroom, 3-bathroom apartment at 606 The Address, Colombo 03, offering breathtaking panoramic ocean views stretching from Colpetty to Port City, complemented by a modern pantry, high-end bathroom fittings, and 2 dedicated parking spaces. Ideally situated in the heart of Colombo 03, the building features an in-house coffee shop and supermarket, with leading restaurants, essential amenities, and fuel stations just moments away — a rare opportunity to own a residence that perfectly combines stunning views, comfort, and convenience....',
    features: ['Swimming Pool', 'Gym', 'Lift', 'Generator', 'AC', '1 Car Parking', 'Cargills'],
    whatsapp: '+94777150066'
  },
  {
    id: 'kotte-apartment-residence',
    status: 'For Sale',
    badgeClass: 'badge-sale',
    price: 'LKR 67 Mn',
    name: 'The Residencies',
    location: '27 Thalapathpitiya Rd, Nugegoda',
    beds: 2, baths: 2, sqft: '823',
    type: 'Apartment',
    featured: true,
    image: './Images/the-residence/1.jpeg',
    gallery: [
      './Images/the-residence/2.jpeg',
      './Images/the-residence/3.jpeg',
      './Images/the-residence/4.jpeg',
      './Images/the-residence/5.jpeg',
      './Images/the-residence/6.jpeg',
      './Images/the-residence/7.jpeg',
      './Images/the-residence/8.jpeg',
      './Images/the-residence/9(1).jpeg',
      './Images/the-residence/9.jpeg',
      './Images/the-residence/10(1).jpeg',
      './Images/the-residence/10.jpeg',
      './Images/the-residence/11(1).jpeg',
      './Images/the-residence/11.jpeg',
      './Images/the-residence/13.jpeg',
      './Images/the-residence/14.jpeg',
      './Images/the-residence/15.jpeg',
      './Images/the-residence/16.jpeg',
    ],
    description: 'This 823 sq.ft, 2-bedroom, 2-bathroom unfurnished apartment is available for sale at The Residencies Kotte by ICC (Ref- MRH01), listed at LKR 67 million. The unit comes with air conditioning, and residents have access to building amenities including a swimming pool, lift, generator, gym, and security.',
    features: ['Swimming Pool', 'Gym', 'Lift', 'Generator', 'AC', '1 Car Parking'],
    whatsapp: '+94777150066',
  },
  {
    id: '3storey-building',
    status: 'For Sale',
    badgeClass: 'badge-sale',
    price: 'LKR 385 Mn',
    name: '3-Storey Bulding',
    location: 'Colombo 07',
    beds: 9, baths: 13, sqft: '823',
    type: 'Building',
    featured: true,
    image: './Images/3storey-building/1.jpeg',
    gallery: [
      './Images/3storey-building/2.jpeg',
      './Images/3storey-building/3.jpeg',
      './Images/3storey-building/4.jpeg',
      './Images/3storey-building/5.jpeg',
      './Images/3storey-building/6.jpeg',
      './Images/3storey-building/7.jpeg',
      './Images/3storey-building/8.jpeg',
      './Images/3storey-building/9.jpeg',
      './Images/3storey-building/10.jpeg',
      './Images/3storey-building/11.jpeg',
      './Images/3storey-building/12.jpeg',
      './Images/3storey-building/13.jpeg',
      './Images/3storey-building/14.jpeg',
      './Images/3storey-building/15.jpeg',
      './Images/3storey-building/16.jpeg',
      './Images/3storey-building/17.jpeg',
      './Images/3storey-building/19.jpeg',
      './Images/3storey-building/20.jpeg',
      './Images/3storey-building/21.jpeg',
      './Images/3storey-building/22.jpeg',
      './Images/3storey-building/23.jpeg',
      
    ],
    description: 'This furnished property spans 9,885 sqft and offers 9 rooms (3 per floor) along with 13 bathrooms in total, comprising 4 main bathrooms plus a maid's bathroom on each floor and a watchman's bathroom on the ground floor. It is fully air-conditioned except for the kitchen, and each bedroom features a built-in wardrobe. Additional amenities include a swimming pool, solar panel, lift, generator, and parking for 4 vehicles.',
    features: ['Swimming Pool', 'Solar Panel', 'Lift', 'Generator', '4-Vehicle Car Park', 'Built-In Wardrobes', 'Full AC', 'Furnished'],
    whatsapp: '+94777150066',
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
