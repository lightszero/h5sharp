(module
  (type (;0;) (func (param i32 i32) (result i32)))
  (type (;1;) (func (param i32) (result i32)))
  (func (;0;) (type 0) (param i32 i32) (result i32)
    get_local 0
    get_local 1
    i32.add
    return)
  (func (;1;) (type 1) (param i32) (result i32)
    get_local 0
    get_local 0
    i32.mul
    return)
  (export "add" (func 0))
  (export "square" (func 1)))
