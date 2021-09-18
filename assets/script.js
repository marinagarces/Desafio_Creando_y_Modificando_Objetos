function cargarElementos(){
    let btnPacientesConstructor = document.getElementById('pacientesConsultorio');
    btnPacientesConstructor.addEventListener('click', instanciarPacientes);
}

function instanciarPacientes(){
  //Funcion constructora
  function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, '_getNombre', {
      get:function() {
      return _nombre;
      }
    });

    Object.defineProperty(this, '_setNombre', {
      set:function(nombre) {
        _nombre = nombre;
      }
    });

    Object.defineProperty(this, '_getEdad', {
      get:function() {
      return _edad;
      }
    });

    Object.defineProperty(this, '_setEdad', {
      set:function(edad) {
        _edad = edad;
      }
    });

    Object.defineProperty(this, '_getRut', {
      get:function() {
      return _rut;
      }
    });

    Object.defineProperty(this, '_setRut', {
      set:function(rut) {
        _rut = rut;
      }
    });

    Object.defineProperty(this, '_getDiagnostico', {
      get:function() {
      return _diagnostico;
      }
    });

    Object.defineProperty(this, '_setDiagnostico', {
      set:function(diagnostico) {
        _diagnostico = diagnostico;
      }
    });
 }

   Paciente.prototype.getNombre = function(){
     return this._getNombre;
   }
   Paciente.prototype.setNombre = function(nombre){
     this._setNombre = nombre;
   }
   Paciente.prototype.getEdad = function(){
     return this._getEdad;
   }
   Paciente.prototype.setEdad = function(edad){
     this._setEdad = edad;
   }
   Paciente.prototype.getRut = function(){
     return this._getRut;
   }
   Paciente.prototype.setRut = function(rut){
     this._setRut = rut;
   }
   Paciente.prototype.getDiagnostico = function(){
     return this._getDiagnostico;
   }
   Paciente.prototype.setDiagnostico = function(diagnostico){
     this._setDiagnostico = diagnostico;
   }
//Pacientes.prototype.listaPacientes = function() {}

//var paciente1 = new Paciente('Marina', 18, "1111111-1", "Super sana");
//console.log(paciente1.getNombre);


//Funcion constructora
  function Consultorio(nombre, paciente){
    var _nombre = nombre;
    var _paciente = paciente || [];

    Object.defineProperty(this, '_getNombre', {
      get:function() {
        return _nombre;
     }
    });
    Object.defineProperty(this, '_setNombre', {
      set:function(nombre) {
        _nombre = nombre;
      }
    });

    Object.defineProperty(this,'_getPaciente', {
      get:function() {
        return _paciente;
      }
    });

    Object.defineProperty(this, '_setPaciente', {
      set:function(paciente) {
        _paciente = paciente;
      }
    });
  }


  Consultorio.prototype.getNombre = function(){
    return this._getNombre;
  }
  Consultorio.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
  }

  Consultorio.prototype.getPaciente = function(){
    return this._getPaciente;
  }
  Consultorio.prototype.setPaciente = function(paciente){
    this._setPaciente = paciente;
  }

  Consultorio.prototype.agregarPaciente = function(nuevoPaciente){
    this.getPaciente().push(nuevoPaciente);
  }

  Consultorio.prototype.buscarPaciente = function(buscarPaciente){
    this.getPaciente().find(buscarPaciente);
  }

var paciente1 = new Paciente('Marina', 18, "1111111-1", "Super sana");
var paciente2 = new Paciente('Dario', 18, "1111111-2", "Super malito");
var paciente3 = new Paciente('Soledad', 18, "1111111-3", "Super sana");
let consultorio1 = new Consultorio('Indisa', [paciente2,paciente3]);
//let consultorio3 = new Consultorio('davila', paciente3);
//console.log(consultorio1);
//console.log('El Consultorio es: '+consultorio1.getNombre());
//console.log('El Paciente es: '+consultorio1.getPaciente().getEdad());
//console.log(consultorio1.getPaciente());

//En la siguiente salida extraemos el nombre y la edad del paciente DESDE la tabla "consultorio"
//console.log("El o La paciente "+consultorio1.getPaciente().getNombre()+ " tiene "+consultorio1.getPaciente().getEdad()+ " años");
console.log("El o La paciente "+consultorio1.getPaciente()[0].getNombre()+" "+consultorio1.getPaciente()[1].getNombre());
//Modificamos las variables
//consultorio1.setNombre('Indisa');
//consultorio1.setPaciente('Juanita');
var paciente4 = new Paciente('Elit', 18, "1111111-4", "Super Goldita");
consultorio1.agregarPaciente(paciente4);
console.log("El o La paciente "+consultorio1.getPaciente()[0].getNombre()+" "+consultorio1.getPaciente()[1].getNombre()+" "+consultorio1.getPaciente()[2].getNombre());

consultorio1.buscarPaciente("Soledad");








}
