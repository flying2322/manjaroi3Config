#include <iostream>
#include <GLFW/glfw3.h>
#include <OLASConfig.h>

#ifdef USE_ADDER
    #include <adder.h>
#endif

using namespace std;


// float add(float, float);

int main(int argc, char* argv[])
{
    cout<<"Hello Zitong~ \n "<<endl;
    cout<<"This is CMake Tutorial Episode05: Making Libs Optional!"

#ifdef USE_ADDER
    cout<<"Using Adder now:"<<add(24.5f, 33.8f)<<endl;
#else
    cout<<"Not using Adder now:"<<55.1f + 44.9f<<endl;
#endif



    cout<<argv[0]<<" Version "<<OLAS_VERSION_MAJOR<<"."<<OLAS_VERSION_MINOR<<"\n";

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
        // draw();

        // Update animation
        // animate();

        // Swap buffers
        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    // Terminate GLFW
    glfwTerminate();


    return 0;
}
