Components ->2 rules 
    a.it should start with UpperCase
    b.it should return a renderable content


L53.-> React component only run once.we need to say react to render componenet again so that the content will be updated and rendered.So we need a way to tell react to execute the component again.so thats where state comes into picture.

54->All the functions which start with use in React are called React hooks.They should be called only in react components.ex->useState() and not called in a nested code statement;So useState forces react to reexecute once a change is triggered;Use state has 2 elements array.Which are variable,setVariable.
set make sure that components reexecuted everytime.It sets the variable value after the full component gets reexecuted.only then new value will be available.
