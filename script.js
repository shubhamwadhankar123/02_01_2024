document.addEventListener("DOMContentLoaded", function () {
    // Get the category from the URL query parameter
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    
    // Update the page title based on the category
    document.getElementById('category-title').textContent = `${capitalize(category)} Service Providers`;

    // Example data for each category
    const serviceProviders = {
        restaurant: [
            {
                name: 'The Rathi Restaurant',
                image: 'assets/images/Service_images/restaurant1.jpg',
                address: '123 Main Street',
                mobile: '123-456-7890',
                price: '$50 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant2.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant3.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant4.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant5.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant6.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant7.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant8.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant9.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            },
            {
                name: 'Fine Dining',
                image: 'assets/images/Service_images/restaurant10.jpg',
                address: '456 Oak Avenue',
                mobile: '987-654-3210',
                price: '$100 per meal',
            }
        ],
        hotel: [
            {
                name: 'Ranjeet Hotel',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_RANJEET.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'Jasnagra_Hotel',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_JASNAGRA.jpg',
                address: '321 Pine Avenue',
                mobile: '987-654-3210',
                price: '$150 per night',
            },
            {
                name: 'RS_Exclusive Hotel',
                image: 'assets/images/Service_images/Hotel_images/RG_EXCLUSIVE.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'RG_Exclusive Hotel',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_RS.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'Vaibhav Hotel',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_VAIBHAV.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'City Pride Hotel',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_CITY_PRIDE.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'VM_Imperial Hotel',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_VM_IMPERIAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'Tushar Celebration',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_TUSHAR_CELEBRATION.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'SR_Esecutive Hotel',
                image: 'assets/images/Service_images/Hotel_images/SR_EXECUTIVE.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'ALBELA Hotel',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_ALBELA.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            }
        ],
        healthcare: [
            {
                name: 'CITY HOSPITAL',
                image: 'assets/images/Service_images/HOSPITAL_IMAGES/CITY.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'SAHARA HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_JASNAGRA.jpg',
                address: '321 Pine Avenue',
                mobile: '987-654-3210',
                price: '$150 per night',
            },
            {
                name: 'EKVIRA HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/RG_EXCLUSIVE.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'GOVT. HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_RS.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'GUPTA HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_VAIBHAV.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'KHERDE HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_CITY_PRIDE.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'LADHHA HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_VM_IMPERIAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'LIFECARE HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_TUSHAR_CELEBRATION.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'LOTUS HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/SR_EXECUTIVE.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'MURARAKA HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_ALBELA.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'MANDHANE HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/SR_EXECUTIVE.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'DAMANI HOSPITAL',
                image: 'assets/images/Service_images/Hotel_images/HOTEL_ALBELA.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            }
        ],
        medical_service: [
            {
                name: 'AKOLA MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/AKOLA_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'DATTA MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/DATTA_MEDICAL.jpg',
                address: '321 Pine Avenue',
                mobile: '987-654-3210',
                price: '$150 per night',
            },
            {
                name: 'DATTAKRUPA MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/DATTAKRUPA.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'GOYAL MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/GOYAL_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'HARIOM MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/HARIOM_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'JANKALYAN MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/JANKALYAN_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'NAVRATNA MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/NAVRATNA_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'VARSHA MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/VARSHA_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'VIVEK MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/VIVEK_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            },
            {
                name: 'MAHESH MEDICAL',
                image: 'assets/images/Service_images/MEDICAL_IMAGES/MAHESH_MEDICAL.jpg',
                address: '789 Elm Street',
                mobile: '123-456-7890',
                price: '$200 per night',
            }
        ],
        // Add data for other categories (destination, healthcare, automotive, etc.)
    };

    // Function to capitalize category name
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Display providers based on the selected category
    const providers = serviceProviders[category];
    const providerList = document.getElementById('provider-list');

    if (providers) {
        providers.forEach(provider => {
            const providerDiv = document.createElement('div');
            providerDiv.className = 'provider-item';
            providerDiv.innerHTML = `
                <img src="${provider.image}" alt="${provider.name}">
                <h3>${provider.name}</h3>
                <p>Address: ${provider.address}</p>
                <p>Mobile: ${provider.mobile}</p>
                <p>Price: ${provider.price}</p>
                <button class="book-btn" onclick="bookService('${provider.name}')">Book Your Service Now</button>
            `;
            providerList.appendChild(providerDiv);
        });
    } else {
        providerList.innerHTML = `<p>No providers found for this category.</p>`;
    }
});

// Function to handle booking service
function bookService(providerName) {
    alert(`Service booked with ${providerName} successfully!`);
    // Here, you'd add logic to handle actual booking (e.g., API call, form submission, etc.)
}
