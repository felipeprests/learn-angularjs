angular.module("meuModulo")
.controller("indexController",function ($scope) {
	
	$scope.titulo = "Sistema com Angular JS";

	$scope.alunos = [
		{nome:"Jeferson Machado", email:"jefinhoboy@gmail.com", nota1:12, nota2:52, nota3:89}
		{nome:"Bruno Biluzitos", email:"biluzitos@gmail.com", nota1:12, nota2:52, nota3:89}
		{nome:"José Raul de Quadros", email:"dequadros@gmail.com", nota1:12, nota2:52, nota3:89}
		{nome:"Douglas Giovanella", email:"doug@gmail.com", nota1:12, nota2:52, nota3:89}
		{nome:"Erick Safado", email:"erick@gmail.com", nota1:12, nota2:52, nota3:89}
	];

	var init = function(){
		$scope.alunos = forEach(function(aluno){
			aluno.media = media(aluno);
		});
		limpaForm();
	};

	$scope.addAluno = function (Aluno) {
		
	};

	var alunoEditar;

	$scope.salvarAluno = function (Aluno) {
		alunoEditar.nome = Aluno.nome;
		alunoEditar.email = Aluno.nome;
		alunoEditar.nota1 = Aluno.nome;
		alunoEditar.nota2 = Aluno.nome;
		alunoEditar.nota3 = Aluno.nome;
		alunoEditar.media = media(Aluno);
		$("#modal1").modal('close');
	}

	var media = function(Aluno){
		var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3;
		return media.toFixed(2);
	};

	$scope.abreAddAluno = function () {
		$scope.editando = false;
		limpaForm();
		$('#modal1').modal('open');
	};

	$scope.deletarAluno = function (Aluno) {
		for (var index in $scope.alunos) {
			var aux = $scope.alunos[index];
			if (Aluno === aux) {
				$scope.alunos.splice(index, 1);
			}
		}
	};

	var limpaForm = function(){
		$scope.Aluno = {nome:"", email:"", nota1:"", nota2:"", nota3:"", media:""};
	};

	init();

	
})