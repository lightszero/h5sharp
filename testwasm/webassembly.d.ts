declare namespace WebAssembly
{
    //编译
    function compile(data: Uint8Array): Promise<IWebAssemblyModule>;

    //编译并且实例化，之后module.instance 就是一个模块实例
    function instantiate(data: Uint8Array): Promise<IWebAssemblyModule>;

    interface IWebAssemblyModule
    {
        instance: Instance;
    }

    //模块实例
    class Instance
    {
        constructor(module: IWebAssemblyModule);
        exports: { [id: string]:any};
    }
}