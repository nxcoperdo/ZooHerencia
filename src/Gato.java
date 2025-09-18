public class Gato extends Animal {
    public Gato(String nombre) {
        super(nombre);
    }

    @Override
    public void sonido() {
        System.out.println(nombre + " dice: ¡Miau!");
    }
}
