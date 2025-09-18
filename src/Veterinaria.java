public class Veterinaria {
    private Consultorio consultorio;

    public Veterinaria(Consultorio consultorio) {
        this.consultorio = consultorio;
    }

    public void atender(Animal a) {
        System.out.print("Atendiendo en " + consultorio.getUbicacion() + ": ");
        a.sonido();
    }
}