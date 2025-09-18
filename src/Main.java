public class Main {
    public static void main(String[] args) {
        Consultorio consultorio = new Consultorio("Sala 1");
        Veterinaria vet = new Veterinaria(consultorio);
        Perro perro = new Perro("Firu", new Collar("rojo"));
        Gato gato = new Gato("Misu");
        vet.atender(perro);
        vet.atender(gato);

        Animal a = new Perro("Rocky", new Collar("azul"));
        if (a instanceof Perro) {
            Perro p = (Perro) a;
            p.moverCola();
        }

        Caja<Animal> caja = new Caja<>();
        caja.guardar(gato);
        Animal guardado = caja.obtener();
        vet.atender(guardado);
    }
}