#include <stdio.h>

int main(void)
{
    int x = 10;
    printf("%d\n", x);
    int *ptr = &x;

    int *ptr_array[10]; // creates an array of 10 integer pointers
    ptr_array[0] = ptr; // insert ptr as the first element
    printf("%d\n", *ptr_array[0]);

    
    for (int i = 0; i < 10; i++) {
            printf("%p\n", &ptr_array[i]);
    }  
}
