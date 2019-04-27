	
	//проверка storage пуст или нет

	if (localStorage.length==0) {

		var cars={}

		cars.Toyota={
			name_car:"Toyota",
			year:"2012",
			model:"RAV4",
			class_car:"Offroad",
			type_back:"Huge back",
		};
		cars.Renault={
			name_car:"Renault",
			year:"2010",
			model:"Logan",
			class_car:"Luxe",
			type_back:"Sedan",
		};
		cars.Honda={
			name_car:"Honda",
			year:"2008",
			model:"Civic",
			class_car:"Luxe",
			type_back:"Sedan",
		};
	}else{

		cars=parsedCars=JSON.parse(localStorage.getItem("cars"));
	}

	//вывод автомобилей
	for( var key in cars){
		var list=document.getElementById('list')
		var elem=document.createElement('li');
		elem.innerHTML=cars[key].name_car+" | "+cars[key].year+" | "+cars[key].model+" | "+cars[key].class_car+" | "+cars[key].type_back;
		list.appendChild(elem)
	};

	//нажатие enter
	function getCode(event){
		if (event.keyCode===13) {
			var command= prompt("Введите команду");
			switch(command){
				case('Добавить'):
				addObj();
				break;

				case('Удалить'):
				deleteObj();
				break;

				case('Редактировать'):
				editObj();
				break;
			};
		};
	}

	//запись в localstorage
	function store(){
		var carsObj=JSON.stringify(cars);
		localStorage.setItem("cars",carsObj);
	}

	//удаление объекта
	function deleteObj(){
		var model=prompt("Введите модель автомобиля который хотите удалить");
		for( var key in cars){
			if (cars[key].model===model) {
			delete cars[key];
			};
		};

		store();

		//очищаю список
		var list=document.getElementById('list')
		while(list.firstChild){
			list.removeChild(list.firstChild)
		};

		//вывожу оставщиеся
		for( var key in cars){
			var elem=document.createElement('li');
			elem.innerHTML=cars[key].name_car+" | "+cars[key].year+" | "+cars[key].model+" | "+cars[key].class_car+" | "+cars[key].type_back;
			list.appendChild(elem);	
		};
	};

	//добавление обьекта
	function addObj(){
		var name_car=prompt("Введите производителя автомобиля");
		var year=prompt("Введите год автомобиля");
		var model=prompt("Введите модель автомобиля");
		var class_car=prompt("Введите класс автомобиля");
		var type_back=prompt("Введите тип кузова");

		//
		cars[name_car]={
			name_car:name_car,
			year:year,
			model:model,
			class_car:class_car,
			type_back:type_back
		};

		store();

		var list=document.getElementById('list')
		var elem=document.createElement('li');
		elem.innerHTML=cars[name_car].name_car+" | "+cars[name_car].year+" | "+cars[name_car].model+" | "+cars[name_car].class_car+" | "+cars[name_car].type_back;
		list.appendChild(elem);
	};

	//редактирование объекта
	function editObj(){
		var model_car=prompt("Введите модель автомобиля который хотите редактировать");
		if(model_car===""){
			return;
		}else{
			for( var key in cars){
				if (cars[key].model===model_car) {
					var param=prompt("Введите параметр автомобиля который хотите редактировать: Производитель, Год, Модель, Класс автомобиля, Тип кузова");
					
					switch (param){
						case 'Производитель': 
						var newParam=prompt("Введите нового производителя");
						cars[key].name_car=newParam;
						break;

						case 'Год': 
						var newParam=prompt("Введите новый год машины");
						cars[key].year=newParam;
						break;

						case 'Модель': 
						var newParam=prompt("Введите новую модель машины");
						cars[key].model=newParam;
						break;

						case 'Класс машины': 
						var newParam=prompt("Введите новый класс машины");
						cars[key].class_car=newParam;
						break;

						case 'Тип кузова': 
						var newParam=prompt("Введите новый тип кузова машины");
						cars[key].type_back=newParam;
						break;

					};

					store();

					var list=document.getElementById('list')
					while(list.firstChild){
						list.removeChild(list.firstChild)
					}

					for( var key in cars){
					var list=document.getElementById('list')
					var elem=document.createElement('li');
					elem.innerHTML=cars[key].name_car+" | "+cars[key].year+" | "+cars[key].model+" | "+cars[key].class_car+" | "+cars[key].type_back;
					list.appendChild(elem)

					};
				};
			};	
		};
	};