#include <iostream>
#include <adder.h>
#include <GLFW/glfw.h>

using namespace std;


// float add(float, float);

int main()
{
    cout<<"Hello Zitong~ \nThis is Lession 3, Are you happy? \nNow you can just quote adder.h directly~~"<<endl;
    cout<<add(24.5f, 33.8f)<<endl;

    GLFWwindow* window;

    if( !glfwInit() )
    {
        fprintf( stderr, "Failed to initialize GLFW\n" );
        exit( EXIT_FAILURE );
    }

    window = glfwCreateWindow( 300, 300, "Gears", NULL, NULL );
    if (!window)
    {
        fprintf( stderr, "Failed to open GLFW window\n" );
        glfwTerminate();
        exit( EXIT_FAILURE );
    }

    // Main loop
    while( !glfwWindowShouldClose(window) )
    {
        // Draw gears
        draw();

        // Update animation
        animate();

        // Swap buffers
        glfwSwapBuffers(window);
        glfwPollEvents();
    }
    return 0;
}
