testdna 是一個 ts 項目，裏面關鍵代碼就一行
<script src="_framework/Blazor.Runtime.js" main ="helloworld.dll"></script>
這個 js 文件内部找到helloworld.dll 執行他

helloworld dll代碼如下

    public class Class1
    {
        public static void Main(string[] args)
        {
            System.Console.Write("run a dll on web.");


        }
    }

運行testdna 可見這一行log



Blazor 對於關鍵部分，dna項目改造，以及如何完成js 和 dna虛擬機的互訪，

未見代碼、未見資料

繼續研究至實用，工作量黑洞。
blazor 可判定為個人項目，無文檔 無測例。
進一步工作比較困難，不建議普通程序員介入。