

function actorSelected(select) {

    let index = select.selectedIndex;
    let option = select.options[index];

    let id = option.value;
    let nombre = option.text;
    let urlImagen = option.dataset.url;

    if (id == 0) {
        return;
    }

    option.disabled = true;

    select.selectedIndex = 0;

    let ids = $("#ids").val();

    if (ids == "") {
        $("#ids").val(id);
    } else {
        $("#ids").val(ids + "," + id);
    }

    agregarActor(id, nombre, urlImagen);
}


function agregarActor(id, nombre, urlImagen) {

	let htmlString = `
        <div class="card col-md-3 m-2" style="width: 10rem">
            <img src="{URL_IMAGEN}" class="card-img-top">
            <div class="card-body">
                <p class="card-text">{NOMBRE}</p>
                <button class="btn btn-danger"
                        data-id="{ID}"
                        onclick="eliminarActor(this); return false;">
                    Eliminar
                </button>
            </div>
        </div>
    `;

	htmlString = htmlString.replace("{URL_IMAGEN}", urlImagen);
	htmlString = htmlString.replace("{NOMBRE}", nombre);
	htmlString = htmlString.replace("{ID}", id);

	$("#protagonistas_container").append(htmlString);
}


function eliminarActor(btn) {
	let id = btn.dataset.id;
	let node = btn.parentElement.parentElement;
	// 1,2,3,10 => [1,2,3,10] => [1,2,10]
	let arrayIds = $("#ids").val().split(",").filter(idActor => idActor != id);

	$("#ids").val(arrayIds.join(","));

	$("#protagonistas option[value='" + id + "']").prop("disabled", false);

	$(node).remove();
}

function previsualizar() {
	let reader = new FileReader();

	reader.readAsDataURL(document.getElementById("archivo_img").files[0]);

	reader.onload = function(e) {
		let vista = document.getElementById("vista_previa");
		vista.classList.remove("d-none");
		vista.style.backgroundImage = 'url("' + e.target.result + '")';
	}


}


$(document).ready(function () {

    let ids = $("#ids").val();

    if (ids != "") {

        let arrayIds = ids.split(",");

        arrayIds.forEach(function (id) {

            $("#protagonistas option[value='" + id + "']")
                .prop("disabled", true);

        });
    }

});








