(module
    (export "add" (func $add))
    (export "square" (func $square))

    (func $add (param $x i32) (param $y i32) 
        (result i32)
        (local $ox i32)
		i32.const 33
		block 
			i32.const 33
			block 
				loop;;loop的br 0 到这里
					get_local $x
					get_local $y
					i32.add
					set_local $ox
					;;i32.const 58
					br 2	;;这个br 0.对loop 就是跳到开始 
							;;对block是跳至当前的end

							;;br 1 跳出两个end，loop是不可能跳至自己的end后面的
				end
				i32.const 33
				return
			end;;br 1 到这里
			i32.const 44
			return
		end;;br 2 到这里
        get_local $ox
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