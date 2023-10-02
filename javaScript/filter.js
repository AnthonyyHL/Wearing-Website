/*--------------------- CHECKOPTION HOVER|CLICK EFFECT ---------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let filterOptions = document.querySelectorAll(".filter-check-option li");

    filterOptions.forEach(filterOption => {

        filterOption.addEventListener('mouseover', function () {
            let checkOption = filterOption.querySelector('.check-option');

            checkOption.style.border = "1px solid black";
        });

        filterOption.addEventListener('mouseout', function () {
            let checkOption = filterOption.querySelector('.check-option');

            checkOption.style.border = "1px solid var(--very-light-gray-color)";

            if (checkOption.classList.contains('active')) {
                checkOption.style.border = "none";
            } else {
                checkOption.style.backgroundColor = "white";
                checkOption.style.border = "1px solid var(--very-light-gray-color)";
            }
        });

        filterOption.addEventListener('click', function () {
            let checkOption = filterOption.querySelector('.check-option');

            checkOption.classList.toggle('active');

            if (checkOption.classList.contains('active')) {
                checkOption.style.backgroundColor = "black";
                checkOption.style.border = "none";
            } else {
                checkOption.style.backgroundColor = "white";
                checkOption.style.border = "1px solid var(--very-light-gray-color)";
            }
        });

    });
});








/*--------------------- COLOR OPTION HOVER|CLICK EFFECT ---------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let productColorList = document.querySelectorAll(".product-color-list li");

    productColorList.forEach(productColor => {
        let colorOption = productColor.querySelector('.color-option');
        let isClicked = false;

        productColor.addEventListener('click', function () {
            isClicked = !isClicked;
            colorOption.classList.toggle('active');

            if (isClicked) {
                colorOption.style.border = "1px solid black";
            } else {
                colorOption.style.border = "none";
            }
        });

        productColor.addEventListener('mouseover', function () {
            if (!isClicked) {
                colorOption.style.border = "1px solid black";
            }
        });

        productColor.addEventListener('mouseout', function () {
            if (!isClicked) {
                colorOption.style.border = "none";
            }
        });
    });
});








/*--------------------- PRODUCTS DISPLAY FLEX'S VISIBLES ---------------------*/
document.addEventListener("DOMContentLoaded", function() {
    const productsGrid = document.querySelectorAll('.bd-grid');
    const productCountersSpan = document.querySelectorAll('.quantity');

    function updateProductCounter() {
        for (let i = 0; i < productsGrid.length; i++) {
            const product = productsGrid[i];
            const productCounterSpan = productCountersSpan[i];
            const productItems = product.querySelectorAll('.bd-grid .product');

            let visibleCounter = 0;

            productItems.forEach(item => {
                const computedStyle = window.getComputedStyle(item);
                if (computedStyle.getPropertyValue('display') !== 'none') {
                    visibleCounter++;
                }
            });

            productCounterSpan.textContent = visibleCounter;
        }
    }

    updateProductCounter();

    const observer = new MutationObserver(function(mutationsList) {
        // Llama a la función de actualización cada vez que haya cambios en el DOM
        updateProductCounter();
    });

    // Observa los cambios en el DOM
    for (let i = 0; i < productsGrid.length; i++) {
        const product = productsGrid[i];
        observer.observe(product, { attributes: true, childList: true, subtree: true });
    }
});








/*--------------------- FILTER|SORT BY BUTTONS FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    let filter = document.querySelector('.filter-title');
    let sortBy = document.querySelector('.sort-by-title');

    let filterContainer = document.querySelector('#filter .filter-container');
    let sortByContainer = document.querySelector('.sort-by-container');

    const sortByOptionContainer = document.querySelectorAll('.sort-by-option');

    let activeElement = null;

    function activateFilter() {
        filterContainer.classList.add('active');
        filterContainer.style.border = "1px solid black";
        filterContainer.style.height = "740px";
        filter.style.color = "black";
        filter.style.transition = ".3s ease-in-out";

        // Desactivar la sección de ordenación
        sortByContainer.classList.remove('active');
        sortByContainer.style.height = "0";
        sortBy.style.color = "var(--very-light-gray-color)";
        setTimeout(function () {
            sortByContainer.style.border = "none";
        }, 500);
    }

    function activateSortBy() {
        sortByContainer.classList.add('active');
        sortByContainer.style.border = "1px solid black";
        sortByContainer.style.height = "202px";
        sortBy.style.color = "black";
        sortBy.style.transition = ".1s ease-in-out";

        // Desactivar la sección de filtros
        filterContainer.classList.remove('active');
        filterContainer.style.height = "0";
        filter.style.color = "var(--very-light-gray-color)";
        setTimeout(function () {
            filterContainer.style.border = "none";
        }, 500);
    }

    filter.addEventListener('click', function () {
        if (!filterContainer.classList.contains('active')) {
            activateFilter();
        } else {
            // Si ya está activo, desactívalo
            filterContainer.classList.remove('active');
            filterContainer.style.height = "0";
            filter.style.color = "var(--very-light-gray-color)";
            filter.style.transition = ".3s ease-in-out";
            setTimeout(function () {
                filterContainer.style.border = "none";
            }, 500);
        }
    });

    filter.addEventListener('mouseover', function () {
        if (!filterContainer.classList.contains('active')) {
            filter.style.color = "black";
        }
    });

    filter.addEventListener('mouseout', function () {
        if (!filterContainer.classList.contains('active')) {
            filter.style.color = "var(--very-light-gray-color)";
        }
    });

    sortBy.addEventListener('click', function () {
        if (!sortByContainer.classList.contains('active')) {
            activateSortBy();
        } else {
            // Si ya está activo, desactívalo
            sortByContainer.classList.remove('active');
            sortByContainer.style.height = "0";
            sortBy.style.color = "var(--very-light-gray-color)";
            sortBy.style.transition = ".1s ease-in-out";
            setTimeout(function () {
                sortByContainer.style.border = "none";
            }, 300);
        }
    });

    sortBy.addEventListener('mouseover', function () {
        if (!sortByContainer.classList.contains('active')) {
            sortBy.style.color = "black";
        }
    });

    sortBy.addEventListener('mouseout', function () {
        if (!sortByContainer.classList.contains('active')) {
            sortBy.style.color = "var(--very-light-gray-color)";
        }
    });

    sortByOptionContainer.forEach(sortByOption => {
        sortByOption.addEventListener('mouseover', function () {
            if (!sortByOption.classList.contains('active')) {
                sortByOption.style.backgroundColor = "rgb(246,246,246)";
            }
        });

        sortByOption.addEventListener('mouseout', function () {
            if (!sortByOption.classList.contains('active')) {
                sortByOption.style.backgroundColor = "white";
            }
        });

        sortByOption.addEventListener('click', function () {
            if (sortByOption.classList.contains('active')) {
                sortByOption.classList.remove('active');
                sortByOption.style.backgroundColor = "white";
                activeElement = null;
            } else {
                if (activeElement !== null) {
                    activeElement.classList.remove('active');
                    activeElement.style.backgroundColor = "white";
                }
                sortByOption.classList.add('active');
                sortByOption.style.backgroundColor = "rgb(224,224,224)";
                activeElement = sortByOption;
            }
        });
    });

    document.addEventListener('click', function (event) {
        // Verificar si el clic no ocurrió en riSearchLine o en search
        if (!filter.contains(event.target) && !sortBy.contains(event.target) && !filterContainer.contains(event.target) && !sortByContainer.contains(event.target)) {
            // Si el clic fue en otro lugar, quitar la clase active de search
            filterContainer.classList.remove('active');
            filterContainer.style.height = "0";
            setTimeout(function () {
                filterContainer.style.border = "none";
            }, 500);

            sortByContainer.classList.remove('active');
            sortByContainer.style.height = "0";
            setTimeout(function () {
                sortByContainer.style.border = "none";
            }, 500);
        }
    });

});








/*--------------------- MAN|WOMAN BUTTONS FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    let manFilterBtn = document.querySelector('.kinda .genre-man');
    let womanFilterBtn = document.querySelector('.kinda .genre-woman');

    let productContainers = document.querySelector('.products-container');

    var manProducts = productContainers.getElementsByClassName('man');
    var womanProducts = productContainers.getElementsByClassName('woman');

    manFilterBtn.addEventListener('click', function () {

        for (let i = 0; i < manProducts.length; i++) {
            var manProduct = manProducts[i];
            manProduct.style.display = "flex";
        }

        for (let i = 0; i < womanProducts.length; i++) {
            var womanProduct = womanProducts[i];
            womanProduct.style.display = "none";
        }

        manFilterBtn.classList.toggle('active');
        womanFilterBtn.classList.remove('active');

        if (!manFilterBtn.classList.contains('active') && !womanFilterBtn.classList.contains('active')) {
            // Mostrar todos los productos si ambos filtros están inactivos
            for (let i = 0; i < manProducts.length; i++) {
                manProducts[i].style.display = "flex";
            }
            for (let i = 0; i < womanProducts.length; i++) {
                womanProducts[i].style.display = "flex";
            }
        }

    });

    womanFilterBtn.addEventListener('click', function () {

        for (let i = 0; i < womanProducts.length; i++) {
            var womanProduct = womanProducts[i];
            womanProduct.style.display = "flex";
        }

        for (let i = 0; i < manProducts.length; i++) {
            var manProduct = manProducts[i];
            manProduct.style.display = "none";
        }

        womanFilterBtn.classList.toggle('active');
        manFilterBtn.classList.remove('active');

        if (!manFilterBtn.classList.contains('active') && !womanFilterBtn.classList.contains('active')) {
            // Mostrar todos los productos si ambos filtros están inactivos
            for (let i = 0; i < manProducts.length; i++) {
                manProducts[i].style.display = "flex";
            }
            for (let i = 0; i < womanProducts.length; i++) {
                womanProducts[i].style.display = "flex";
            }
        }

    });

});








/*--------------------- FILTER BY PRICE FUNCTIONALITY ---------------------*/
/*document.addEventListener("DOMContentLoaded", function () {
    let productPriceListOptions = document.querySelectorAll('.product-price-option');
    console.log(productPriceListOptions,'hola');

    productPriceListOptions.forEach(productPrice => {
        productPrice.addEventListener('click', filterProductsByPrice);
    });

    function filterProductsByPrice(event) {
         // Obtén el valor seleccionado en el rango de precios
         let selectedPriceRangeOption = event.currentTarget;
         selectedPriceRangeOption.classList.toggle('active');
         let selectedPriceRange = selectedPriceRangeOption.querySelector('.product-price-option-range').textContent;

         // Obtén todos los productos (suponiendo que tengan una clase "product")
         const products = document.querySelectorAll('.products-container .product');

         // Itera a través de los productos y muestra/oculta según el rango de precios
         products.forEach(product => {
            const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));

            const priceRangeParts = selectedPriceRange.split('-'); // Divide la cadena en dos partes usando el guión como separador
            const minPrice = parseFloat(priceRangeParts[0].replace('$', '').trim()); // Valor mínimo del rango
            const maxPrice = parseFloat(priceRangeParts[1].replace('$', '').trim()); // Valor máximo del rango

            if (productPrice >= minPrice && productPrice <= maxPrice) {
             product.style.display = 'flex'; // Mostrar el producto
            } else {
             product.style.display = 'none'; // Ocultar el producto
            }

            console.log(minPrice);
            console.log(maxPrice);

         });
    }
});*/




/*document.addEventListener("DOMContentLoaded", function () {
    const productPriceListOptions = document.querySelectorAll('.product-price-option');
    const products = document.querySelectorAll('.products-container .product');
    const originalDisplayStates = Array.from(products).map(product => ({
        element: product,
        display: product.style.display || 'flex',
    }));

    productPriceListOptions.forEach(productPrice => {
        productPrice.addEventListener('click', filterProductsByPrice);
    });

    function filterProductsByPrice(event) {
        // Obtén el valor seleccionado en el rango de precios
        const selectedPriceRangeOption = event.currentTarget;
        selectedPriceRangeOption.classList.toggle('active');
        const selectedPriceRange = selectedPriceRangeOption.querySelector('.product-price-option-range').textContent;

        // Restaurar el estado original de los productos
        originalDisplayStates.forEach(item => {
            const { element, display } = item;
            element.style.display = display;
        });

        // Filtrar nuevamente los productos según el rango de precios
        products.forEach(product => {
            const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));

            const priceRangeParts = selectedPriceRange.split('-');
            const minPrice = parseFloat(priceRangeParts[0].replace('$', '').trim());
            const maxPrice = parseFloat(priceRangeParts[1].replace('$', '').trim());

            if (!(productPrice >= minPrice && productPrice <= maxPrice) && selectedPriceRangeOption.classList.contains('active')) {
                product.style.display = 'none';
            }
        });
    }
});*/


/*--------------------- FILTER BY PRICE FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const productPriceListOptions = document.querySelectorAll('.product-price-option');
    const products = document.querySelectorAll('.products-container .product');
    const originalDisplayStates = Array.from(products).map(product => ({
        element: product,
        display: product.style.display || 'flex',
    }));
    const selectedPriceRanges = new Set(); // Conjunto de rangos de precios seleccionados

    productPriceListOptions.forEach(productPrice => {
        productPrice.addEventListener('click', filterProductsByPrice);
    });

    function filterProductsByPrice(event) {
        // Obtén el valor seleccionado en el rango de precios
        const selectedPriceRangeOption = event.currentTarget;
        selectedPriceRangeOption.classList.toggle('active');
        const selectedPriceRange = selectedPriceRangeOption.querySelector('.product-price-option-range').textContent;

        // Restaurar el estado original de los productos
        originalDisplayStates.forEach(item => {
            const { element, display } = item;
            element.style.display = display;
        });

        // Agregar o eliminar el rango de precios del conjunto de seleccionados
        if (selectedPriceRangeOption.classList.contains('active')) {
            selectedPriceRanges.add(selectedPriceRange);
        } else {
            selectedPriceRanges.delete(selectedPriceRange);
        }

        // Filtrar los productos según los rangos de precios seleccionados
        products.forEach(product => {
            const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));

            // Verificar si el producto cumple con al menos uno de los filtros seleccionados
            const productPassesAnyFilter = [...selectedPriceRanges].some(selectedRange => {
                const [minPrice, maxPrice] = selectedRange.split('-').map(price => parseFloat(price.replace('$', '').trim()));
                return productPrice >= minPrice && productPrice <= maxPrice;
            });

            // Mostrar u ocultar el producto según si cumple con al menos un filtro activo
            if (!productPassesAnyFilter) {
                product.style.display = 'none';
            }
        });

        // Verificar si no hay filtros activos y mostrar todos los productos
        if (selectedPriceRanges.size === 0) {
            products.forEach(product => {
                product.style.display = 'flex';
            });
        }
    }
});



/*--------------------- FILTER BY COLOR FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const colorOptions = document.querySelectorAll('.product-color-item');
    const products = document.querySelectorAll('.products-container .product');
    const originalDisplayStates = Array.from(products).map(product => ({
        element: product,
        display: product.style.display || 'flex',
    }));
    const selectedColors = new Set(); // Conjunto de colores seleccionados

    colorOptions.forEach(colorOption => {
        const colorDiv = colorOption.querySelector('.color-option');
        const color = colorDiv.classList[1]; // Obtenemos la segunda clase que corresponde al color
        colorOption.addEventListener('click', () => filterProductsByColor(color));
    });

    function filterProductsByColor(selectedColor) {
        // Restaurar el estado original de los productos
        originalDisplayStates.forEach(item => {
            const { element, display } = item;
            element.style.display = display;
        });

        // Agregar o eliminar el color del conjunto de seleccionados
        if (selectedColors.has(selectedColor)) {
            selectedColors.delete(selectedColor);
        } else {
            selectedColors.add(selectedColor);
        }

        // Filtrar los productos según los colores seleccionados
        products.forEach(product => {
            // Obtén las clases del producto como un array
            const productClasses = product.className.split(' ');

            // Verificar si el producto cumple con al menos uno de los colores seleccionados
            const productPassesAnyFilter = productClasses.some(className => selectedColors.has(className));

            // Mostrar u ocultar el producto según si cumple con al menos un filtro activo
            if (!productPassesAnyFilter) {
                product.style.display = 'none';
            }
        });

        // Verificar si no hay filtros activos y mostrar todos los productos
        if (selectedColors.size === 0) {
            products.forEach(product => {
                product.style.display = 'flex';
            });
        }
    }
});



/*--------------------- BRAND FILTER COUNTER ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos <article> que contienen información de los productos
    const productos = document.querySelectorAll('.product');
    console.log(productos);

    // Crea un objeto para almacenar el recuento de productos por marca
    const recuentoPorMarca = {};

    // Itera a través de los productos y cuenta cuántos pertenecen a cada marca
    productos.forEach(producto => {
        const marca = producto.querySelector('.product-brand').textContent.trim();
        if (recuentoPorMarca[marca]) {
            recuentoPorMarca[marca]++;
        } else {
            recuentoPorMarca[marca] = 1;
        }
    });

    // Obtén la lista de opciones dentro del <ul>
    const listaOpciones = document.querySelector('.product-brand-list');
    console.log(listaOpciones);

    // Itera a través de las opciones y actualiza la cantidad dentro de los paréntesis
    listaOpciones.querySelectorAll('.product-brand-option').forEach(optionContainer => {
        console.log(optionContainer);
        const opcion = optionContainer.querySelector('.product-brand-counter');
        console.log(opcion);
        const spanAnterior = opcion.previousElementSibling;
        console.log(spanAnterior);
        const marca = spanAnterior.textContent.trim();
        console.log(marca);
        if (recuentoPorMarca[marca]) {
            opcion.textContent = `(${recuentoPorMarca[marca]})`;
        } else {
            opcion.textContent = '(0)';
        }
    });
});



/*--------------------- FILTER BY BRAND FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const brandOptions = document.querySelectorAll('.product-brand-option');
    const products = document.querySelectorAll('.products-container .product');
    const originalDisplayStates = Array.from(products).map(product => ({
        element: product,
        display: product.style.display || 'flex',
    }));
    const selectedBrands = new Set(); // Conjunto de marcas seleccionadas

    brandOptions.forEach(brandOption => {
        const brandDiv = brandOption.querySelector('.marca');
        const brand = brandDiv.classList[1]; // Obtenemos la segunda clase que corresponde a la marca
        brandOption.addEventListener('click', () => filterProductsByBrand(brand));
    });

    function filterProductsByBrand(selectedBrand) {
        // Restaurar el estado original de los productos
        originalDisplayStates.forEach(item => {
            const { element, display } = item;
            element.style.display = display;
        });

        // Agregar o eliminar la marca del conjunto de seleccionadas
        if (selectedBrands.has(selectedBrand)) {
            selectedBrands.delete(selectedBrand);
        } else {
            selectedBrands.add(selectedBrand);
        }

        // Filtrar los productos según las marcas seleccionadas
        products.forEach(product => {
            // Obtén las clases del producto como un array
            const productClasses = product.className.split(' ');

            // Verificar si el producto cumple con al menos una de las marcas seleccionadas
            const productPassesAnyFilter = productClasses.some(className => selectedBrands.has(className));

            // Mostrar u ocultar el producto según si cumple con al menos un filtro activo
            if (!productPassesAnyFilter) {
                product.style.display = 'none';
            }
        });

        // Verificar si no hay filtros activos y mostrar todos los productos
        if (selectedBrands.size === 0) {
            products.forEach(product => {
                product.style.display = 'flex';
            });
        }
    }
});



/*--------------------- ASC ALPHABETIC ORDER FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el contenedor de productos
    const productsContainer = document.querySelector('.products-container');

    // Obtén todos los elementos de artículo de producto
    const products = Array.from(productsContainer.querySelectorAll('.product'));

    // Función para ordenar los productos por nombre en orden ascendente (A-Z)
    function sortProductsAscending() {
        products.sort((a, b) => {
            const nameA = a.querySelector('.product-name').textContent.toLowerCase();
            const nameB = b.querySelector('.product-name').textContent.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        // Elimina todos los productos del contenedor
        products.forEach(product => {
            productsContainer.removeChild(product);
        });

        // Agrega los productos ordenados de nuevo al contenedor
        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    }

    // Agrega un controlador de clic al botón "ALFABÉTICAMENTE, A-Z"
    const sortByAZButton = document.querySelector('.sort-by-option.alfabeticamente-asc');
    sortByAZButton.addEventListener('click', sortProductsAscending);
});



/*--------------------- DESC ALPHABETIC ORDER FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el contenedor de productos
    const productsContainer = document.querySelector('.products-container');

    // Obtén todos los elementos de artículo de producto
    const products = Array.from(productsContainer.querySelectorAll('.product'));

    // Función para ordenar los productos por nombre en orden ascendente (A-Z)
    function sortProductsDescending() {
        products.sort((a, b) => {
            const nameA = a.querySelector('.product-name').textContent.toLowerCase();
            const nameB = b.querySelector('.product-name').textContent.toLowerCase();
            return nameB.localeCompare(nameA);
        });

        // Elimina todos los productos del contenedor
        products.forEach(product => {
            productsContainer.removeChild(product);
        });

        // Agrega los productos ordenados de nuevo al contenedor
        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    }

    // Agrega un controlador de clic al botón "ALFABÉTICAMENTE, A-Z"
    const sortByAZButton = document.querySelector('.sort-by-option.alfabeticamente-desc');
    sortByAZButton.addEventListener('click', sortProductsDescending);
});



/*--------------------- ASC PRICE ORDER FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el contenedor de productos
    const productsContainer = document.querySelector('.products-container');

    // Obtén todos los elementos de artículo de producto
    const products = Array.from(productsContainer.querySelectorAll('.product'));

    // Función para ordenar los productos por precio en orden ascendente (menor a mayor)
    function sortProductsByPriceAscending() {
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
            return priceA - priceB;
        });

        // Elimina todos los productos del contenedor
        products.forEach(product => {
            productsContainer.removeChild(product);
        });

        // Agrega los productos ordenados de nuevo al contenedor
        products.forEach(product => {
            productsContainer.appendChild(product);
        });

    }

    // Agrega un controlador de clic al botón "PRECIO, MENOR A MAYOR"
    const sortByPriceAscButton = document.querySelector('.sort-by-option.price-asc');
    sortByPriceAscButton.addEventListener('click', sortProductsByPriceAscending);
});



/*--------------------- ASC PRICE ORDER FUNCTIONALITY ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el contenedor de productos
    const productsContainer = document.querySelector('.products-container');

    // Obtén todos los elementos de artículo de producto
    const products = Array.from(productsContainer.querySelectorAll('.product'));

    // Función para ordenar los productos por precio en orden ascendente (menor a mayor)
    function sortProductsByPriceDescending() {
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
            return priceB - priceA;
        });

        // Elimina todos los productos del contenedor
        products.forEach(product => {
            productsContainer.removeChild(product);
        });

        // Agrega los productos ordenados de nuevo al contenedor
        products.forEach(product => {
            productsContainer.appendChild(product);
        });

    }

    // Agrega un controlador de clic al botón "PRECIO, MENOR A MAYOR"
    const sortByPriceDescButton = document.querySelector('.sort-by-option.price-desc');
    sortByPriceDescButton.addEventListener('click', sortProductsByPriceDescending);
});
