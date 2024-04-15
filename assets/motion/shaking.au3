HotKeySet("{HOME}", "GStart")
HotKeySet("{PAUSE}", "Gpause")
HotKeySet("{ESC}", "Gexit")

While 1
    Sleep(100)
WEnd

Func Gstart()
While 1
    sleep(100)
    $pos = MouseGetPos()
    $x = $pos[0] + 10 - Random(0, 20, 1)
    $y = $pos[1] + 10 - Random(0, 20, 1)
    MouseMove($x,$y)
Wend
Endfunc


Func Gpause()
While 1
   sleep(100)
Wend
Endfunc

Func Gexit()
    MsgBox(0, "exit box", "Script exited")
    Exit 0
EndFunc