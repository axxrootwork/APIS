const lista = document.querySelector('#listado');

        fetch('/datos.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((producto) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${producto.Producto}</td>
                <td>${producto.Precio}</td>
                <td>${producto.Marca}</td>
            `;
            lista.appendChild(tr);
            });
        })
        .catch((error) => console.error(error));