import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CHAT_URL = "https://widget.troiachat.com/chat/6a3ed185a898fd92c029fc94";

const Chat = () => {
  useEffect(() => {
    window.location.href = CHAT_URL;
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground mb-4">Abrindo o chat...</p>
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default Chat;
