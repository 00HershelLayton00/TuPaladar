// Elementos del DOM
const contentArea = document.getElementById('content-area');
const dynamicTitle = document.getElementById('dynamic-title');
const navBtns = document.querySelectorAll('.nav-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');

let currentCategory = 'nosotros';

// Función para renderizar según categoría
function renderCategory(category) {
    // Animación de salida
    contentArea.classList.add('fade-out');
    
    setTimeout(() => {
        const data = menuData[category];
        if (!data) return;

        // Actualizar título
        if (category === 'nosotros') {
            dynamicTitle.textContent = data.titulo;
        } else {
            dynamicTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        }

        // Generar HTML
        if (category === 'nosotros') {
            // Collage para nosotros
            let html = '<div class="collage-grid">';
            data.imagenes.forEach((img, index) => {
                html += `
                    <div class="collage-item" onclick="openModal('${img.src}', '${img.descripcion}', '', '${img.descripcion}')">
                        <img src="${img.src}" alt="${img.descripcion}" loading="lazy">
                        <div class="collage-caption">${img.descripcion}</div>
                    </div>
                `;
            });
            html += '</div>';
            contentArea.innerHTML = html;
        } else {
            // Grid de tarjetas
            let html = '<div class="menu-grid">';
            data.forEach(item => {
                html += `
                    <div class="card" onclick="openModal('${item.imagen}', '${item.nombre}', '${item.precio}', '${item.descripcion}')">
                        <img src="${item.imagen}" alt="${item.nombre}" class="card-img" loading="lazy">
                        <div class="card-info">
                            <div class="card-header">
                                <h3 class="card-title">${item.nombre}</h3>
                                <span class="card-price">${item.precio}</span>
                            </div>
                            <p class="card-desc">${item.descripcion}</p>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            contentArea.innerHTML = html;
        }

        // Animación de entrada
        contentArea.classList.remove('fade-out');
    }, 300);
}

// Función global para abrir modal
window.openModal = (imgSrc, title, price, desc) => {
    modalImage.src = imgSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalPrice.textContent = price || '';
    modalDesc.textContent = desc;
    
    // Mostrar/ocultar precio si no existe
    if (!price) {
        modalPrice.style.display = 'none';
    } else {
        modalPrice.style.display = 'inline-block';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // evitar scroll
};

// Cerrar modal
function closeModalHandler() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeModalHandler);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalHandler();
});

// Escapar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModalHandler();
    }
});

// Navegación
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // Actualizar botón activo
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentCategory = category;
        renderCategory(category);
    });
});

// Cargar categoría inicial (nosotros)
renderCategory('nosotros');

// Pequeño detalle: cambiar título cuando se vuelve a la pestaña
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '🍽️ Fusión Restaurant';
    } else {
        document.title = 'Fusión Restaurant · Menú Interactivo';
    }
});