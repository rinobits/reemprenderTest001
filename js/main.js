jQuery(function($) {
    $(document).ready(function() {
        // tipo de masa
        loadJSONtipo('tipoMasa');

        function loadJSONtipo(id) {
            var htmlDrop = '';
            $.getJSON('../json/tipoMasa.json', function(data) {
                $.each(data, function(key, value) {
                    if (id == 'tipoMasa') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // sabor masa
        loadJSONsabor('saborMasa');

        function loadJSONsabor(id) {
            var htmlDrop = '';
            $.getJSON('../json/saborMasa.json', function(data) {
                $.each(data, function(key, value) {
                    if (id == 'saborMasa') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // cobertura
        loadJSONcobertura('cobertura');

        function loadJSONcobertura(id) {
            var htmlDrop = '';
            $.getJSON('../json/cobertura.json', function(data) {
                $.each(data, function(key, value) {
                    if (id == 'cobertura') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // tamaño
        loadJSONtamano('tamano');

        function loadJSONtamano(id) {
            var htmlDrop = '';
            $.getJSON('../json/tamano.json', function(data) {
                $.each(data, function(key, value) {
                    if (id == 'tamano') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
        // hora
        loadJSONhora('horaDrop');

        function loadJSONhora(id) {
            var htmlDrop = '';
            $.getJSON('../json/hora.json', function(data) {
                $.each(data, function(key, value) {
                    if (id == 'horaDrop') {
                        htmlDrop += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                });
                $("#" + id).html(htmlDrop);
            });
        }
    });
});