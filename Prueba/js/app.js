//3. importar la funcion metodo HTTP get
import { getCategorias } from "../apiConnetion/api";
//1. Funtion IIFE
(function(){
    document.addEventListener('DOMContentLoaded', showCategorias)
    async function showCategorias(){
        const categorias = await getCategorias();
        console.log(categorias);
        const contenedor = document.querySelector('tbody')
        categorias.forEach(categoria => {
            const {id, categorie, borrar} = categoria
            const rows = document.createElement('tr');
            rows.innerHTML = `
            <th scope="row">${id}</th>
            <td scope="row">${categorie}</td>
            <td scope="row"><button type="button" class="btn btn-danger">Borrar</button></td>

            `;
            contenedor.appendChild(rows);
        });
    }
})