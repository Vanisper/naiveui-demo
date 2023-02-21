import { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";

// 需要在window上挂载的东西  以及相应的代码提示
// 需要在tsconfig.json中将此文件夹加入到includes中
declare global {
    interface Window {
        $message: MessageApiInjection
    }
}