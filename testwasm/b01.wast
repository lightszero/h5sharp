(module
    (export "add" (func $add))
    (export "square" (func $square))

    (func $add (param $x i32) (param $y i32) 
        (result i32)
        (local $x i32)
        loop
            get_local $x
            get_local $y
            i32.add
            set_local $x
            i32.const 0
            br 1//这个br 0.对loop 就是跳到开始
            //对block 和 br1 一样
            //br 1 跳出块，但要从栈上吃掉一个参数
        end
        get_local $x
        return
    )

    (func $square (param $x i32) (result i32)
        get_local $x
        get_local $x
        i32.mul
        return
    )

    (func $fuck (param i32)
        block           ;; declares a "label" at it's "end"
          loop          ;; declares a "label" right here
            get_local 0
            drop
          end
        end 
    )
)