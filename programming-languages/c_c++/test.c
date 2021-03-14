#include <stdio.h>
#include <stdlib.h>

/* La función de llamada toma una simple retrollamada como un parámetro. */
void ImprimirDosNumeros(int (*numeroEntrada)(void)) {
    printf("%d y %d\n", numeroEntrada(), numeroEntrada());
}

/* Una posible retrollamada. */
int unaRetrollamada(void) {
    return (rand() % 1000) + 9001;
}

/* Otra posible retrollamada. */
int otraRetrollamada(void) {
    return 42;
}

/* El programa principal llama a ImprimrDosNumeros() con tres retrollamadas diferentes. */
int main(void) {
    ImprimirDosNumeros(&rand);
    ImprimirDosNumeros(&unaRetrollamada);
    ImprimirDosNumeros(&otraRetrollamada);
    return 0;
}